$ErrorActionPreference = 'Stop'
$taskRoot = [IO.Path]::GetFullPath((Join-Path $PSScriptRoot '..'))
$taskOutput = Join-Path $taskRoot 'deliverables'
[IO.Directory]::CreateDirectory($taskOutput) | Out-Null
$taskArchive = Join-Path $taskOutput '李鑫炎-AI实践个人网站-源码.zip'
Add-Type -AssemblyName System.IO.Compression
Add-Type -AssemblyName System.IO.Compression.FileSystem
# Explicit inclusion only. Never package .git, deliverables, caches, or QA captures.
$taskFiles = @('index.html','styles.css','script.js','README.md','ASSETS.md','DESIGN.md','PRODUCT.md','.gitignore','.nojekyll','.impeccable/surface.md','.impeccable/design.json','tools/serve.cjs','tools/package.ps1')
$taskFiles += Get-ChildItem -LiteralPath (Join-Path $taskRoot 'assets') -Recurse -File | ForEach-Object { [IO.Path]::GetRelativePath($taskRoot, $_.FullName) }
$taskStream = [IO.File]::Open($taskArchive, [IO.FileMode]::Create)
$taskZip = [IO.Compression.ZipArchive]::new($taskStream, [IO.Compression.ZipArchiveMode]::Create, $false)
try {
    foreach ($taskRelative in $taskFiles) {
        $taskAbsolute = [IO.Path]::GetFullPath((Join-Path $taskRoot $taskRelative))
        if (-not $taskAbsolute.StartsWith($taskRoot + [IO.Path]::DirectorySeparatorChar)) { throw 'Out-of-workspace archive source' }
        [IO.Compression.ZipFileExtensions]::CreateEntryFromFile($taskZip, $taskAbsolute, $taskRelative.Replace('\','/'), [IO.Compression.CompressionLevel]::Optimal) | Out-Null
    }
} finally { $taskZip.Dispose(); $taskStream.Dispose() }
$taskCheck = [IO.Compression.ZipFile]::OpenRead($taskArchive)
try {
    if ($taskCheck.Entries.FullName -match '(^|/)(\.git|deliverables|node_modules|\.codex-remote-attachments)(/|$)') { throw 'Unexpected archive content' }
    Write-Output ('Verified {0} entries: {1}' -f $taskCheck.Entries.Count, $taskArchive)
} finally { $taskCheck.Dispose() }
