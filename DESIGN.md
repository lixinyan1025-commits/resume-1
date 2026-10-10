---
name: 李鑫炎 · 学习与实践简历
description: 深色科技感、轻微空间层次与清晰阅读并重的 Bento 简历
colors:
  bg: "#080c16"
  surface: "rgba(20,27,43,.86)"
  line: "rgba(177,196,230,.14)"
  text: "#eff4ff"
  muted: "#a9b6cc"
  cyan: "#84dcf1"
  violet: "#b7a4ff"
  button-primary: "#a6dcec"
  button-primary-text: "#061624"
  button-primary-hover: "#c0eafa"
  button-secondary: "rgba(78,96,129,.1)"
  button-secondary-text: "#cedbef"
  button-secondary-hover: "#183349"
  tag-bg: "rgba(149,124,230,.09)"
  tag-text: "#c0b1f5"
typography:
  display:
    fontFamily: '"Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: "48px"
    fontWeight: 750
    lineHeight: 1.2
    letterSpacing: "-2px"
  headline:
    fontFamily: '"Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: "26px"
    fontWeight: 650
    lineHeight: 1.35
    letterSpacing: "-0.6px"
  title:
    fontFamily: '"Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: "17px"
    fontWeight: 650
    lineHeight: 1.45
  body:
    fontFamily: '"Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: "15px"
    lineHeight: 1.7
  label:
    fontFamily: '"Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: "11px"
  button:
    fontFamily: '"Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1.5
rounded:
  card: "24px"
  card-mobile: "22px"
  button: "10px"
  tag: "20px"
  pill: "30px"
  media: "16px"
spacing:
  grid: "20px"
  grid-mobile: "14px"
  card: "28px"
  card-mobile: "24px"
  section: "66px"
  section-mobile: "42px"
components:
  button-primary:
    backgroundColor: "{colors.button-primary}"
    textColor: "{colors.button-primary-text}"
    typography: "{typography.button}"
    rounded: "{rounded.button}"
    padding: "10px 14px"
  button-primary-hover:
    backgroundColor: "{colors.button-primary-hover}"
    textColor: "#071725"
  button-secondary:
    backgroundColor: "{colors.button-secondary}"
    textColor: "{colors.button-secondary-text}"
    typography: "{typography.button}"
    rounded: "{rounded.button}"
    padding: "10px 14px"
  button-secondary-hover:
    backgroundColor: "{colors.button-secondary-hover}"
  tag:
    backgroundColor: "{colors.tag-bg}"
    textColor: "{colors.tag-text}"
    typography: "{typography.label}"
    rounded: "{rounded.tag}"
    padding: "4px 10px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.card}"
    padding: "{spacing.card}"
  navigation:
    textColor: "#b7c1d4"
    size: "13px"
---

# Design System: 李鑫炎 · 学习与实践简历

## Overview

**Creative North Star: "深色科技 Bento"**

用户指定的 Apple/Bento 方向以墨蓝背景、半透明圆角表面与安静的细边框呈现。紫色提供柔和的空间氛围，青色帮助识别操作与技术线索；内容保持清晰、克制，让真实作品与学习记录承担说服力。

信息密度通过大小不同的容器组织，文字与原始素材保持可读。桌面倾斜是指针反馈，移动端和减少动态模式保持静态。系统字体避免远程字体加载，使离线阅读的外观稳定。

**Key Characteristics:**

- 墨蓝底色与半透明深色表面。
- 青色操作提示、紫色氛围与薄边框。
- 圆角 Bento 容器与直接可读的中文层级。
- 桌面轻微空间反馈，手机静态阅读。

## Colors

色彩以深色中性层次承载信息，青色与紫色作为有限的强调。

### Primary

- **冰青操作色**（`cyan`）：图标、键盘焦点、链接响应；主按钮使用浅青实色，搭配深色文字。

### Secondary

- **柔紫氛围色**（`violet`）：身份相关装饰、标签和数字渐变的紫色端；避免用于大段正文。

### Neutral

- **墨蓝背景**（`bg`）：整个页面的底层。
- **半透明深蓝表面**（`surface`）：通用容器，允许背景光层轻微透出。
- **雾白文字**（`text`）：姓名、重要标题与信息。
- **蓝灰说明文字**（`muted`）：正文和辅助解释。
- **低透明度边界**（`line`）：卡片与分隔线，强调轮廓而不过度切割画面。

## Typography

显示与正文共用本机无衬线字体栈，中文回退到苹方或微软雅黑；不依赖外部字体服务。

- **Display**：姓名使用紧凑字距与较高字重；手机缩为（42px）。
- **Headline**：章节标题承担分组，手机缩为（23px）。
- **Title**：工具、视频与教育卡片标题；项目名根据重要程度在（18–32px）之间。
- **Body**：全局基准在 frontmatter；实际卡片说明采用（12–15px），保持宽松行高。
- **Label**：屏幕模式的辅助标签基准为（11px）；英文姓名与时间标注保留少量字距。

正文不使用渐变，渐变限于大数字等短信息。打印使用独立的 point 字号层级。

## Layout

屏幕内容最大宽度为（1200px），常规四列网格以（20px）间距连接不同大小容器。宽度不超过（1000px）时改为两列，部分内容跨两列；不超过（640px）时改为单列，页面两侧各留（16px），网格间距采用移动端 token。较窄桌面和平板保留总计（64px）外侧空间。

章节间距使用较宽松的节奏，容器内部较紧凑。文字允许换行，图片按实际内容选择完整展示或封面裁切：证书完整展示，作品预览允许封面裁切。具体页面顺序由 `.impeccable/surface.md` 描述，不将一页的构图固化为所有后续页面的模板。

打印使用 A4、四周（12mm）页边距与白底墨色文字。工具与实践章节另起一页，隐藏视频播放器、作品大图、网页操作提示及交互控件，保留核心文字与链接。

## Elevation & Depth

层次由背景柔光、半透明表面、薄描边和轻阴影共同提供。通用卡片使用（16px）背景模糊；静止阴影为 `0 10px 40px rgba(0,0,0,.11), inset 0 1px rgba(235,244,255,.025)`，悬停阴影为 `0 12px 42px rgba(0,0,0,.2)`。媒体边框内的局部阴影支撑截图与视频，不改变主要阅读层次。

Vanilla-Tilt 的最大倾斜为（6°）、响应速度为（400ms），glare 上限按卡片为（0.08–0.12）。仅在宽度至少（900px）、精确悬停指针、无触摸能力且未启用减少动态时运行；打印和正在播放的视频卡片取消倾斜。

## Shapes

容器采用较大的柔和圆角，按钮较紧凑，标签为短胶囊。通用容器与移动容器分别使用 frontmatter 的 `card` 与 `card-mobile` 圆角。头像为圆形，视频框使用媒体圆角，作品截图保留独立边框。不要把有意义的原始证书文字当作装饰裁去。

## Components

### Buttons

主按钮以浅青实色承载“展示与下载”和“播放成片”等明确操作；次按钮用透明深色与细边框。悬停提高背景亮度，键盘焦点使用青色（2px）外轮廓与（5px）偏移。普通过渡为（200ms）；不采用脚本生成的额外点击状态。

### Chips

非交互标签用柔紫或青色轻背景与细边框，字号遵循 label。工具名称胶囊使用更大的 pill 圆角，不表现为可筛选控件。

### Cards / Containers

卡片背景、边框、圆角和阴影保持一致，重要身份与作品容器可使用已实现的深色渐变。悬停提高边框和阴影强度，倾斜遵循 Elevation & Depth。媒体和文字有独立内边距，保持真实素材的可识别性。

### Navigation

页首导航为直接的章节锚点，默认蓝灰，悬停转为青色；手机隐藏章节导航，保留身份标记与联系入口。键盘焦点与按钮一致。

### Evidence Metrics

短数字使用紫青渐变和等宽数字特性，下接正文描述。数字必须来自已确认记录；通过数字大小而非更多装饰形成强调。

## Do's and Don'ts

### Do:

- Do 保持深色科技 Bento、柔和圆角与安静边界。
- Do 用真实原图、简洁文字与可打开的链接表达成果。
- Do 为键盘焦点提供可见轮廓，并在触摸与减少动态模式保持静态。
- Do 让手机文字和打印内容自然换行。

### Don't:

- Don't 把长段正文做成渐变、发光字或动态效果。
- Don't 为装饰裁切证书文字，或改写原始素材中的事实。
- Don't 让倾斜阻碍视频控制、打印或移动端阅读。
- Don't 添加无事实来源的能力、排名、规模或模型版本。
