const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const types = {'.html':'text/html; charset=utf-8','.css':'text/css','.js':'application/javascript','.webp':'image/webp','.png':'image/png','.svg':'image/svg+xml','.mp4':'video/mp4'};
http.createServer((request, response) => {
  if (!['GET','HEAD'].includes(request.method)) { response.writeHead(405); return response.end(); }
  let file;
  try { const pathname = new URL(request.url, 'http://localhost').pathname; file = path.resolve(root, '.' + decodeURIComponent(pathname === '/' ? '/index.html' : pathname)); }
  catch { response.writeHead(400); return response.end(); }
  if (!file.startsWith(root + path.sep)) { response.writeHead(403); return response.end(); }
  fs.stat(file, (error, stat) => {
    if (error || !stat.isFile()) { response.writeHead(404); return response.end(); }
    const headers = {'Content-Type':types[path.extname(file)] || 'application/octet-stream','Accept-Ranges':'bytes'};
    const range = request.headers.range && /^bytes=(\d+)-(\d*)$/.exec(request.headers.range);
    const start = range ? Number(range[1]) : 0;
    const end = range && range[2] ? Math.min(Number(range[2]),stat.size-1) : stat.size-1;
    if (start > end || start >= stat.size) { response.writeHead(416, {'Content-Range':'bytes */'+stat.size}); return response.end(); }
    headers['Content-Length'] = end-start+1;
    if (range) headers['Content-Range'] = `bytes ${start}-${end}/${stat.size}`;
    response.writeHead(range ? 206 : 200, headers);
    if (request.method === 'HEAD') return response.end();
    fs.createReadStream(file,{start,end}).pipe(response);
  });
}).listen(4176, '127.0.0.1', () => console.log('Resume preview: http://127.0.0.1:4176/'));
