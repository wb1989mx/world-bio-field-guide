#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
图像采集流水线（生产级 · 需联网运行）
=====================================
把「采集 → 落库 → 点注」做成可复用的脚本，对应《策划方案》第二部分 §15。

功能：
  1. 在 Wikimedia Commons 检索物种图像，按许可协议过滤（仅保留 CC / 公有领域 / 自由许可）。
  2. 下载到 assets/img/<domain>/<id>/，文件名保留原扩展名。
  3. 把作者 / 许可 / 来源 / 署名写入 image-manifest.json（版权可审计台账）。
  4. 生成可供前端引用的 images 片段（含空 hotspots 点位，待人工/脚本点注）。

用法示例：
  python image_pipeline.py --domain animal --id animal-mammal-ailuropoda-melanoleuca \
        --query "Giant panda" --limit 3

说明：
  - 必须在可访问外网的环境运行（当前沙箱无外网，脚本会优雅报错）。
  - 下载后请人工核对形态准确性，并在 species.js 的 images[].src 指向本地产物。
  - AI 生成示意图走另一条路（标注「示意图·AI生成」），不在此台账的 photo 类型中。
"""
import argparse
import json
import os
import sys
import urllib.parse
import urllib.request
from pathlib import Path

BASE = Path(__file__).resolve().parent
IMG_DIR = BASE / "assets" / "img"
MANIFEST = BASE / "image-manifest.json"

# 仅允许这些许可（宽松自由许可 + 公有领域），并在署名上强制要求
ALLOWED_LICENSES = (
    "cc-by", "cc-by-sa", "cc0", "public domain", "gfdl",
    "cc-by-2.0", "cc-by-3.0", "cc-by-4.0", "cc-by-sa-3.0", "cc-by-sa-4.0",
)

API = "https://commons.wikimedia.org/w/api.php"


def api_get(params):
    url = API + "?" + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers={"User-Agent": "BioAtlasPipeline/0.1"})
    with urllib.request.urlopen(req, timeout=20) as r:
        return json.loads(r.read().decode("utf-8"))


def search_images(query, limit=3):
    params = {
        "action": "query", "generator": "search", "gsrsearch": query,
        "gsrnamespace": "6", "gsrlimit": str(limit * 3),
        "prop": "imageinfo", "iiprop": "url|extmetadata|mime|size",
        "iiurlwidth": "1024", "format": "json",
    }
    data = api_get(params)
    pages = (data.get("query", {}).get("pages", {}) or {}).values()
    results = []
    for p in pages:
        ii = (p.get("imageinfo") or [{}])[0]
        meta = ii.get("extmetadata") or {}
        license_ = (meta.get("LicenseShortName", {}) or {}).get("value", "").lower()
        if not any(ok in license_ for ok in ALLOWED_LICENSES):
            continue
        results.append({
            "title": p.get("title"),
            "url": ii.get("url"),
            "thumburl": ii.get("thumburl"),
            "mime": ii.get("mime"),
            "license": meta.get("LicenseShortName", {}).get("value", ""),
            "artist": (meta.get("Artist", {}) or {}).get("value", ""),
            "descriptionurl": meta.get("DescriptionUrl", {}).get("value", ii.get("descriptionurl", "")),
        })
        if len(results) >= limit:
            break
    return results


def sanitize(name):
    import re
    name = re.sub(r"[^\w\-.]", "_", name)
    return name[:80]


def download(url, dest):
    req = urllib.request.Request(url, headers={"User-Agent": "BioAtlasPipeline/0.1"})
    with urllib.request.urlopen(req, timeout=30) as r, open(dest, "wb") as f:
        f.write(r.read())


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--domain", required=True, choices=["animal", "plant", "microbe"])
    ap.add_argument("--id", required=True, help="species id，对应 species.js 中的 id")
    ap.add_argument("--query", required=True, help="检索词，如 'Giant panda'")
    ap.add_argument("--limit", type=int, default=3)
    args = ap.parse_args()

    try:
        found = search_images(args.query, args.limit)
    except Exception as e:
        print("❌ 联网检索失败（当前可能无外网）：", e)
        print("   请在可访问 Wikimedia Commons 的环境运行本脚本。")
        sys.exit(2)

    if not found:
        print("⚠️ 未找到符合自由许可的图像，请更换检索词或放宽限制。")
        sys.exit(3)

    out_dir = IMG_DIR / args.domain / args.id
    out_dir.mkdir(parents=True, exist_ok=True)

    manifest = {}
    if MANIFEST.exists():
        try:
            manifest = json.loads(MANIFEST.read_text(encoding="utf-8"))
        except Exception:
            manifest = {}

    entries = []
    for i, item in enumerate(found, 1):
        ext = (item["url"].split(".")[-1].split("?")[0] or "jpg")[:4]
        fname = f"{args.id}_{i}.{ext}"
        dest = out_dir / fname
        try:
            download(item["thumburl"] or item["url"], dest)
        except Exception as e:
            print("   下载失败：", item["title"], e)
            continue
        rel = f"assets/img/{args.domain}/{args.id}/{fname}"
        entries.append({
            "src": rel,
            "caption": f"{args.query}（来源：Wikimedia Commons）",
            "license": item["license"],
            "author": item["artist"],
            "source": item["descriptionurl"],
            "attribution": f"© {item['artist']} / {item['license']}",
            "ai_generated": False,
            "hotspots": [],  # 待人工/脚本补充点注
        })
        manifest[rel] = {
            "author": item["artist"], "license": item["license"],
            "source": item["descriptionurl"],
            "attribution": f"© {item['artist']} / {item['license']}",
            "type": "photo", "ai_generated": False,
        }
        print("   ✅", rel)

    MANIFEST.write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding="utf-8")
    # 输出前端可用的 images 片段
    print("\n📋 将以下 images 片段写入 species.js 对应物种：")
    print(json.dumps(entries, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
