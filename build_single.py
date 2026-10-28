#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
构建脚本：将「文件夹版」生物图鉴内联打包为「单 HTML 文件版」。
用法：python build_single.py
产物：../生物图鉴-单文件版.html
说明：对应《策划方案》第二部分 §13.2 的「双分发」——同一份源码产出两种形态。
     当前物种图像为内联 SVG（自包含，无需外链）；若后续由 image_pipeline.py
     产出真实照片，可在此扩展为将 assets/img 下图片 base64 内联。
"""
import pathlib, re, base64, mimetypes

BASE = pathlib.Path(__file__).resolve().parent
OUT = BASE.parent / "生物图鉴-单文件版.html"

html = (BASE / "index.html").read_text(encoding="utf-8")
css = (BASE / "assets" / "css" / "style.css").read_text(encoding="utf-8")
appjs = (BASE / "assets" / "js" / "app.js").read_text(encoding="utf-8")
searchjs = (BASE / "assets" / "js" / "search_index.js").read_text(encoding="utf-8")
datajs = (BASE / "data" / "species.js").read_text(encoding="utf-8")

html = html.replace(
    '<link rel="stylesheet" href="assets/css/style.css">',
    "<style>\n" + css + "\n</style>"
)
html = html.replace(
    '<script src="data/species.js"></script>',
    "<script>\n" + datajs + "\n</script>"
)
html = html.replace(
    '<script src="assets/js/search_index.js"></script>',
    "<script>\n" + searchjs + "\n</script>"
)
html = html.replace(
    '<script src="assets/js/app.js"></script>',
    "<script>\n" + appjs + "\n</script>"
)

# 将 assets/img 下的图片压缩后 base64 内联，使单文件版完全离线且体积可控
from PIL import Image

THUMB_DIR = BASE / "_thumbs_single"
THUMB_DIR.mkdir(exist_ok=True)
img_paths = set(re.findall(r'assets/img/[^"\'\)]+?\.(?:png|jpg|jpeg|webp|gif)', html, re.IGNORECASE))
for rel in img_paths:
    img_file = BASE / rel
    if not img_file.exists():
        print("⚠️ 图片未找到，跳过：", rel)
        continue
    # 生成压缩缩略图：最长边 600px、JPEG quality 75，兼顾离线体积与显示效果
    thumb_file = THUMB_DIR / (pathlib.Path(rel).stem + ".jpg")
    with Image.open(img_file) as im:
        im = im.convert("RGB")
        im.thumbnail((600, 600), Image.Resampling.LANCZOS)
        im.save(thumb_file, "JPEG", quality=75, optimize=True)
    b64 = base64.b64encode(thumb_file.read_bytes()).decode("ascii")
    data_uri = f"data:image/jpeg;base64,{b64}"
    html = html.replace(rel, data_uri)
    print("✅ 已内联压缩图片：", rel, "→", round(len(data_uri) / 1024, 1), "KB")

# 清理本次构建的临时缩略图（每次重建均重新生成）
import shutil
shutil.rmtree(THUMB_DIR, ignore_errors=True)

OUT.write_text(html, encoding="utf-8")
print("✅ 已生成单文件版：", OUT)
print("   体积：", round(OUT.stat().st_size / 1024, 1), "KB")
