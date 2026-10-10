# 李鑫炎 · AI 研发中心面试个人网站

供 AI 研发中心面试时查看的独立个人网站。展示身份和联系方式、3 项软件与网页作品、AI 工具与本地模型实践、AI 辅助电脑科普动画，以及 6 项学习认证。作品明确标注个人构思与 AI 辅助实现，不将工具实践包装为独立编码或研究成果，未补写 GPA、排名或影响力等未经确认的信息。

Codex 使用最多，也常用 WorkBuddy、Claude Code（API）和 DeepSeek Harness；Harness 工具与聊天产品分别表述。科普动画刚开始尝试，结合电脑销售知识，借助 AI 梳理内容并制作前端动画；主题不限于显卡，当前显卡成片仅作为示例。

## 打开与分享

在线网站：[https://lixinyan1025-commits.github.io/resume-1/](https://lixinyan1025-commits.github.io/resume-1/)

源码仓库：[https://github.com/lixinyan1025-commits/resume-1](https://github.com/lixinyan1025-commits/resume-1)

GitHub Pages 从 `main` 分支根目录发布，`.nojekyll` 保证静态文件直接部署。旧版 `resume-2` 保持不变。

在 Edge 或 Chrome 中双击 `index.html` 即可离线打开。样式、图标、倾斜库、截图、证书和视频都随项目保存在本地，主体页面不依赖 CDN。发送网页时请一起发送 `index.html`、`styles.css`、`script.js` 和完整 `assets` 文件夹，保持相对路径；单独发送 HTML 会缺失样式与素材。

3 项作品的体验或展示地址及源码地址共 6 条完整 HTTPS URL 直接显示且可点击，原有截图保留；访问这些外部链接需要联网。6 项证书直接展示本地 PNG 原图，点击打开同一完整原图；视频既可在卡片中播放，也可单独打开。页面无后台提交、访客数据收集或追踪脚本。

若安装了 Node.js，在项目目录执行：

```powershell
node tools/serve.cjs
```

然后打开 [本地预览](http://127.0.0.1:4176/)。在终端按 Ctrl+C 结束。静态服务器支持视频范围请求；无需安装 npm 依赖。

## 网站交付

页首“联系我”入口指向联系方式。本轮交付为网站，不主动生成 PDF；`deliverables/` 中旧 PDF 和打印预览仅为上一轮历史记录，不纳入本轮交付。

## 实现与维护

使用静态 HTML/CSS/JavaScript，配合本地 Tailwind CSS Browser 4.1.14、Lucide 0.468.0 和 Vanilla-Tilt 1.8.1。授权文件见 `assets/vendor/`。自定义样式也提供基础网格和排版，正文与作品链接不依赖 JavaScript。

桌面满足精确悬停指针、无触摸、宽度至少 900px 且未开启减少动态时启用轻微倾斜，最大 6°、速度 400ms，并带 glare。手机、触摸设备与减少动态模式保持静态。可复制邮箱，失败时提示手动复制；视频不自动播放，网页进入后台时暂停。

内容在 `index.html`，样式在 `styles.css`，交互在 `script.js`。产品约束记录在 `PRODUCT.md`，页面方向在 `.impeccable/surface.md`，已实现设计 token 与组件规范在 `DESIGN.md` 和 `.impeccable/design.json`，素材来源在 `ASSETS.md`。

“千问 3.59b”的具体型号尚未确认，正文只使用“千问模型本地部署”的泛称；未推断或填写 Opus 版本。未来修改时应先确认事实再添加。

## 交付与验证

本轮重新检查了 1440×900、768×1024、390×844 三种视口，未出现水平溢出或坏图；六条完整网址与目标一致，六张证书均使用原始 PNG。邮箱复制、视频播放、触摸与减少动态禁用倾斜，以及 `file://` 打开均通过验证。最新记录与截图位于 `deliverables/`；本轮独立终审结论为可交付，未生成 PDF。

本项目在当前目录独立创建，没有覆盖 `D:/ChatGPT/简历 2` 旧站。新版单独上传到 `resume-1` 仓库；可分享上述在线地址，也可发送整套网页文件夹供离线查看。
