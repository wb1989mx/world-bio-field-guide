# 世界生物图鉴 · PWA 版本

离线可用的渐进式 Web 应用（Progressive Web App）版本，适合部署到 GitHub Pages。

## 功能特性
- 可「添加到主屏幕」，以独立应用形式打开（`display: standalone`）
- 离线可用：首次在线加载后，访问过的页面与图片可离线浏览
- 自适应明暗主题、语音朗读、全文检索、收藏、「下一个同类」导航

## 目录结构（本文件夹即整个 PWA）
```
生物图鉴/
├── index.html              # 应用入口
├── manifest.webmanifest    # PWA 清单
├── sw.js                  # Service Worker（离线缓存）
├── assets/
│   ├── css/style.css
│   ├── js/{app,search_index}.js
│   ├── img/{animal,plant,microbe}/   # 139 张 AI 示意图
│   └── icons/             # PWA 图标（192 / 512 / maskable / apple-touch）
└── data/species.js        # 139 个物种数据
```

## 部署到 GitHub Pages
1. 在 GitHub 新建仓库（如 `bio-atlas`）。
2. 把**整个 `生物图鉴/` 文件夹**作为仓库根内容 `push`（保持上面的目录结构，不要多套一层）。
3. 仓库 **Settings → Pages → Source** 选择 `main` 分支、`/(root)` 目录 → Save。
4. 约 1 分钟后访问 `https://<用户名>.github.io/<仓库名>/` 即可。
5. 浏览器/手机打开后，点「添加到主屏幕」即可安装为 App。

> `manifest.webmanifest` 的 `start_url` 与 `scope` 均使用相对路径 `./`，
> 因此**部署在子路径（如 `user.github.io/repo/`）也能正常工作**。

## 本地预览
```bash
cd 生物图鉴
python -m http.server 8899
# 浏览器访问 http://localhost:8899/
```
> Service Worker 仅在 `http://` / `https://` 下生效；直接双击 `file://` 打开不会注册 SW（属正常现象，不影响页面功能）。
> 验证 PWA：Chrome 打开后按 F12 → Application → Manifest / Service Workers 可查看注册状态。

## 离线行为说明
- **应用外壳**（HTML / CSS / JS / 数据 / 图标）在安装时预缓存，离线必可用。
- **物种图片**采用运行时缓存：首次浏览过的物种图片会存到本地，之后可离线查看；未浏览过的图片离线时仍需要网络。

## （可选）全量预缓存所有图片
若希望**首次安装即离线可看全部 139 张图**，把图片路径加入 `sw.js` 的 `APP_SHELL` 数组：
```js
// 在 install 阶段一并预缓存（首次安装体积约 20–30 MB）
const images = []; // 用脚本生成 assets/img/{animal,plant,microbe}/*.png 的完整列表
const APP_SHELL = [/* 现有外壳 */, ...images];
```
代价是首次安装下载量较大，但之后完全离线可用。

## 备注
- 本原型文本为示意，正式上线前须以权威源（Catalogue of Life / IUCN / 中国生物志库）核对。
- 图像为手绘示意图或 AI 生成示意图（非实拍），均已标注，正式版建议替换为 CC 授权照片。
