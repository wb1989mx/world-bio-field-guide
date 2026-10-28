#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
物种数据生成器：输出 data/species.js（120 物种 · MVP 数据集）。
- 动物 50 / 植物 50 / 微生物 20
- 12 个物种有 AI 生成图（assets/img/<domain>/...）
- 其余使用统一形态占位 SVG（按类群）
- 内容经常见资料整理，正式上线前仍须以权威源核对
"""
import json, pathlib

OUT = pathlib.Path(__file__).resolve().parent / "data" / "species.js"

# ---------- 占位 SVG 模板（按类群） ----------
SVGS = {
    "mammal": lambda zh: f'<svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" class="ill" role="img" aria-label="{zh}示意图"><ellipse cx="200" cy="190" rx="95" ry="75" fill="#c9bfa8" stroke="#6d5e45" stroke-width="3"/><ellipse cx="200" cy="95" rx="65" ry="58" fill="#c9bfa8" stroke="#6d5e45" stroke-width="3"/><ellipse cx="155" cy="55" rx="28" ry="22" fill="#6d5e45"/><ellipse cx="245" cy="55" rx="28" ry="22" fill="#6d5e45"/><circle cx="175" cy="88" r="8" fill="#333"/><circle cx="225" cy="88" r="8" fill="#333"/></svg>',
    "bird": lambda zh: f'<svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" class="ill" role="img" aria-label="{zh}示意图"><path d="M60 200 q80 -110 220 -100 q50 60 0 120 q-110 40 -220 -20 z" fill="#88b5c9" stroke="#4a7280" stroke-width="3"/><circle cx="270" cy="115" r="9" fill="#333"/><path d="M288 115 l50 6 l-45 18 z" fill="#e8a040"/><path d="M120 225 l-50 40 M200 235 l0 50 M280 225 l50 40" stroke="#6d5e45" stroke-width="5"/></svg>',
    "reptile": lambda zh: f'<svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" class="ill" role="img" aria-label="{zh}示意图"><path d="M40 200 q60 -80 180 -70 q80 10 120 50 q-60 40 -120 30 q-100 -10 -180 60 z" fill="#7a9e6b" stroke="#3d5a32" stroke-width="3"/><path d="M340 180 l25 -15 l-5 25 z" fill="#3d5a32"/><circle cx="85" cy="155" r="7" fill="#333"/></svg>',
    "amphibian": lambda zh: f'<svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" class="ill" role="img" aria-label="{zh}示意图"><ellipse cx="200" cy="210" rx="90" ry="55" fill="#7fbc6e" stroke="#3d7a3d" stroke-width="3"/><circle cx="160" cy="140" r="45" fill="#7fbc6e" stroke="#3d7a3d" stroke-width="3"/><circle cx="150" cy="125" r="8" fill="#333"/><circle cx="178" cy="125" r="8" fill="#333"/><path d="M120 240 q-40 40 -80 20 M280 240 q40 40 80 20" stroke="#3d7a3d" stroke-width="4"/></svg>',
    "fish": lambda zh: f'<svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" class="ill" role="img" aria-label="{zh}示意图"><path d="M40 160 q60 -70 180 -50 q90 10 120 40 q-40 50 -120 50 q-120 10 -180 -40 z" fill="#6ca7c4" stroke="#335e75" stroke-width="3"/><polygon points="340,150 390,100 390,210" fill="#6ca7c4" stroke="#335e75" stroke-width="3"/><circle cx="110" cy="130" r="7" fill="#333"/><path d="M180 120 l20 -25 M200 140 l20 20" stroke="#335e75" stroke-width="2"/></svg>',
    "insect": lambda zh: f'<svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" class="ill" role="img" aria-label="{zh}示意图"><ellipse cx="200" cy="180" rx="55" ry="85" fill="#e6b94c" stroke="#6b5225" stroke-width="3"/><path d="M150 130 q-60 -50 -80 -10 M250 130 q60 -50 80 -10" stroke="#9ecfe8" stroke-width="3" fill="none"/><path d="M150 240 q-50 50 -80 30 M250 240 q50 50 80 30" stroke="#6b5225" stroke-width="3"/><circle cx="200" cy="95" r="28" fill="#6b5225"/><circle cx="190" cy="85" r="5" fill="#fff"/><circle cx="210" cy="85" r="5" fill="#fff"/></svg>',
    "invertebrate": lambda zh: f'<svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" class="ill" role="img" aria-label="{zh}示意图"><path d="M200 70 q70 60 60 130 q-10 80 -60 100 q-50 -20 -60 -100 q-10 -70 60 -130 z" fill="#c9dce8" stroke="#6d8fa3" stroke-width="3"/><circle cx="200" cy="130" r="45" fill="none" stroke="#6d8fa3" stroke-width="2"/><path d="M200 70 l0 -40 M160 80 l-30 -30 M240 80 l30 -30" stroke="#6d8fa3" stroke-width="2"/></svg>',
    "tree": lambda zh: f'<svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" class="ill" role="img" aria-label="{zh}示意图"><rect x="188" y="250" width="24" height="60" fill="#7a4a1e"/><ellipse cx="200" cy="130" rx="120" ry="110" fill="#6ea86e" stroke="#3d7a3d" stroke-width="3"/><path d="M200 80 q40 30 80 60 M200 80 q-40 30 -80 60" stroke="#4a8a4a" stroke-width="2"/></svg>',
    "flower": lambda zh: f'<svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" class="ill" role="img" aria-label="{zh}示意图"><g fill="#e87f9c" stroke="#b85c75" stroke-width="2"><ellipse cx="200" cy="130" rx="40" ry="80" transform="rotate(0 200 160)"/><ellipse cx="200" cy="130" rx="40" ry="80" transform="rotate(72 200 160)"/><ellipse cx="200" cy="130" rx="40" ry="80" transform="rotate(144 200 160)"/><ellipse cx="200" cy="130" rx="40" ry="80" transform="rotate(216 200 160)"/><ellipse cx="200" cy="130" rx="40" ry="80" transform="rotate(288 200 160)"/></g><circle cx="200" cy="160" r="22" fill="#f6d24a"/><line x1="200" y1="210" x2="200" y2="300" stroke="#4a8a4a" stroke-width="5"/></svg>',
    "leaf": lambda zh: f'<svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" class="ill" role="img" aria-label="{zh}示意图"><path d="M200 270 Q140 220 140 160 Q140 80 200 60 Q260 80 260 160 Q260 220 200 270 Z" fill="#8ec06a" stroke="#4a7a2a" stroke-width="3"/><line x1="200" y1="80" x2="200" y2="270" stroke="#4a7a2a" stroke-width="2"/><path d="M200 120 q-30 10 -50 30 M200 120 q30 10 50 30 M200 160 q-30 10 -50 30" stroke="#4a7a2a" stroke-width="1.5" fill="none"/></svg>',
    "grass": lambda zh: f'<svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" class="ill" role="img" aria-label="{zh}示意图"><path d="M200 290 Q200 200 160 120 M200 290 Q210 200 240 130 M200 290 Q190 210 200 100" stroke="#6ea86e" stroke-width="5" fill="none"/><ellipse cx="200" cy="95" rx="20" ry="35" fill="#d4b05e" stroke="#9a8238" stroke-width="2"/></svg>',
    "fungus": lambda zh: f'<svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" class="ill" role="img" aria-label="{zh}示意图"><path d="M140 200 Q140 100 200 80 Q260 100 260 200 Z" fill="#c9a46d" stroke="#7a5e38" stroke-width="3"/><rect x="190" y="200" width="20" height="80" fill="#c9a46d" stroke="#7a5e38" stroke-width="3"/><g fill="#f2e6d0" opacity="0.6"><circle cx="170" cy="140" r="8"/><circle cx="210" cy="120" r="10"/><circle cx="230" cy="150" r="7"/></g></svg>',
    "bacterium": lambda zh: f'<svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" class="ill" role="img" aria-label="{zh}示意图"><rect x="100" y="140" width="200" height="50" rx="25" fill="#d8e8cf" stroke="#6b8f5a" stroke-width="3"/><g stroke="#6b8f5a" stroke-width="2"><line x1="140" y1="140" x2="140" y2="120"/><line x1="200" y1="140" x2="200" y2="115"/><line x1="260" y1="140" x2="260" y2="120"/></g><circle cx="220" cy="165" r="12" fill="none" stroke="#4a6b3d" stroke-width="2"/></svg>',
    "coccus": lambda zh: f'<svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" class="ill" role="img" aria-label="{zh}示意图"><g fill="#d8e8cf" stroke="#6b8f5a" stroke-width="2"><circle cx="160" cy="160" r="45"/><circle cx="240" cy="160" r="45"/><circle cx="200" cy="110" r="45"/><circle cx="200" cy="210" r="45"/></g></svg>',
    "virus": lambda zh: f'<svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" class="ill" role="img" aria-label="{zh}示意图"><polygon points="200,90 240,110 240,150 200,170 160,150 160,110" fill="#9aa0a6" stroke="#555" stroke-width="3"/><rect x="192" y="170" width="16" height="55" fill="#9aa0a6" stroke="#555" stroke-width="2"/><line x1="200" y1="225" x2="200" y2="260" stroke="#555" stroke-width="3"/><path d="M185 260 l-18 22 M215 260 l18 22" stroke="#555" stroke-width="3" fill="none"/></svg>',
    "protist": lambda zh: f'<svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" class="ill" role="img" aria-label="{zh}示意图"><path d="M120 160 q40 -60 100 -50 q70 10 90 50 q-20 60 -90 70 q-90 10 -100 -70 z" fill="#cfe3ef" stroke="#7fb9cc" stroke-width="3"/><circle cx="180" cy="140" r="18" fill="#e8d24a"/><circle cx="240" cy="170" r="12" fill="#e8d24a"/><path d="M120 160 q30 20 60 0" stroke="#7fb9cc" stroke-width="2" fill="none"/></svg>',
    "cyanobacteria": lambda zh: f'<svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" class="ill" role="img" aria-label="{zh}示意图"><g fill="#6faf8c" stroke="#2f7d52" stroke-width="2"><circle cx="120" cy="160" r="18"/><circle cx="160" cy="150" r="18"/><circle cx="200" cy="165" r="18"/><circle cx="240" cy="150" r="18"/><circle cx="280" cy="162" r="18"/></g><path d="M120 160 q40 -20 80 -10 q40 12 80 -5 q40 14 80 12" stroke="#2f7d52" stroke-width="2" fill="none"/></svg>',
}

# ---------- AI 图映射（12 张） ----------
AI_IMAGES = {
    "animal-mammal-ailuropoda-melanoleuca": {
        "type": "overview",
        "caption": "大熊猫整体形态（AI 生成示意图，非实拍）",
        "illustration": True,
        "src": "assets/img/animal/animal-mammal-ailuropoda-melanoleuca.png",
        "hotspots": [
            {"x": 0.50, "y": 0.24, "label": "黑眼圈", "desc": "眼周黑色斑纹，是大熊猫最显著的鉴别特征。"},
            {"x": 0.42, "y": 0.56, "label": "伪拇指", "desc": "前掌增大的籽骨，用于抓握竹竿，并非真正的指。"},
            {"x": 0.50, "y": 0.70, "label": "黑白体色", "desc": "四肢、肩带、耳与眼周黑；躯干白，利于林下隐蔽。"},
        ],
    },
    "animal-mammal-panthera-tigris-altaica": {
        "type": "overview", "caption": "东北虎形态（AI 生成示意图，非实拍）", "illustration": True,
        "src": "assets/img/animal/animal-mammal-panthera-tigris-altaica.png",
        "hotspots": [{"x": 0.50, "y": 0.45, "label": "黑色横纹", "desc": "全身黑色横纹，个体间图案不重复，可用于识别。"}],
    },
    "animal-mammal-balaenoptera-musculus": {
        "type": "overview", "caption": "蓝鲸形态（AI 生成示意图，非实拍）", "illustration": True,
        "src": "assets/img/animal/animal-mammal-balaenoptera-musculus.png",
        "hotspots": [{"x": 0.50, "y": 0.50, "label": "流线型躯体", "desc": "体型巨大而流线，是地球上已知最大动物。"}],
    },
    "animal-bird-nipponia-nippon": {
        "type": "overview", "caption": "朱鹮形态（AI 生成示意图，非实拍）", "illustration": True,
        "src": "assets/img/animal/animal-bird-nipponia-nippon.png",
        "hotspots": [{"x": 0.50, "y": 0.33, "label": "朱红色头冠", "desc": "繁殖期头部与颈部皮肤呈朱红色，是得名由来。"}],
    },
    "plant-ginkgophyta-ginkgo-biloba": {
        "type": "leaf", "caption": "银杏叶形态（AI 生成示意图，非实拍）", "illustration": True,
        "src": "assets/img/plant/plant-ginkgophyta-ginkgo-biloba.png",
        "hotspots": [
            {"x": 0.50, "y": 0.35, "label": "扇形叶", "desc": "叶呈扇状，顶端常二裂，是银杏最易识别的形态特征。"},
            {"x": 0.50, "y": 0.50, "label": "二叉脉", "desc": "叶脉自基部呈二叉状反复分叉，裸子植物中罕见。"},
            {"x": 0.50, "y": 0.82, "label": "长叶柄", "desc": "具细长叶柄，连接叶片与枝条。"},
        ],
    },
    "plant-ginkgophyta-metasequoia-glyptostroboides": {
        "type": "tree", "caption": "水杉形态（AI 生成示意图，非实拍）", "illustration": True,
        "src": "assets/img/plant/plant-ginkgophyta-metasequoia-glyptostroboides.png",
        "hotspots": [{"x": 0.50, "y": 0.42, "label": "塔形树冠", "desc": "树冠呈尖塔形，是对生线形叶与落叶习性共同形成的轮廓。"}],
    },
    "plant-angiosperm-paeonia-suffruticosa": {
        "type": "flower", "caption": "牡丹形态（AI 生成示意图，非实拍）", "illustration": True,
        "src": "assets/img/plant/plant-angiosperm-paeonia-suffruticosa.png",
        "hotspots": [{"x": 0.50, "y": 0.50, "label": "重瓣大花", "desc": "花大色艳、重瓣层叠，春季盛开，素有花王之誉。"}],
    },
    "plant-angiosperm-nelumbo-nucifera": {
        "type": "flower", "caption": "荷花形态（AI 生成示意图，非实拍）", "illustration": True,
        "src": "assets/img/plant/plant-angiosperm-nelumbo-nucifera.png",
        "hotspots": [{"x": 0.50, "y": 0.55, "label": "叶与花", "desc": "叶圆盾状浮/挺水，夏季开粉花，中央膨大为莲蓬。"}],
    },
    "microbe-bacteria-escherichia-coli": {
        "type": "cell", "caption": "大肠杆菌细胞结构（AI 生成示意图，非实拍）", "illustration": True,
        "src": "assets/img/microbe/microbe-bacteria-escherichia-coli.png",
        "hotspots": [
            {"x": 0.10, "y": 0.50, "label": "鞭毛", "desc": "细胞一端多根鞭毛，用于游动。"},
            {"x": 0.50, "y": 0.32, "label": "菌毛", "desc": "菌体表面细毛，用于附着宿主表面。"},
            {"x": 0.50, "y": 0.65, "label": "细胞壁/膜", "desc": "外层细胞壁与内膜构成杆状细胞边界。"},
            {"x": 0.55, "y": 0.52, "label": "拟核/质粒", "desc": "内部环状染色体（拟核）与小型环状质粒。"},
        ],
    },
    "microbe-fungi-saccharomyces-cerevisiae": {
        "type": "cell", "caption": "酿酒酵母形态（AI 生成示意图，非实拍）", "illustration": True,
        "src": "assets/img/microbe/microbe-fungi-saccharomyces-cerevisiae.png",
        "hotspots": [{"x": 0.60, "y": 0.42, "label": "出芽生殖", "desc": "母体长出小芽体，成熟后脱落，为典型无性繁殖方式。"}],
    },
    "microbe-bacteria-mycobacterium-tuberculosis": {
        "type": "cell", "caption": "结核分枝杆菌形态（AI 生成示意图，非实拍）", "illustration": True,
        "src": "assets/img/microbe/microbe-bacteria-mycobacterium-tuberculosis.png",
        "hotspots": [{"x": 0.50, "y": 0.50, "label": "抗酸杆菌", "desc": "细长略弯的杆菌，因细胞壁富脂质而抗酸染色阳性。"}],
    },
    "microbe-virus-t4-phage": {
        "type": "virion", "caption": "T4 噬菌体结构（AI 生成示意图，非实拍）", "illustration": True,
        "src": "assets/img/microbe/microbe-virus-t4-phage.png",
        "hotspots": [{"x": 0.50, "y": 0.40, "label": "头部与尾鞘", "desc": "蛋白质衣壳构成的头部储存遗传物质，尾鞘可收缩以注入核酸。"}],
    },
}

# ---------- 原始 4 条保留手绘 SVG 的物种（无 AI 图） ----------
# 川金丝猴、蜜蜂、春兰、念珠藻
KEEP_SVGS = {
    "animal-mammal-rhinopithecus-roxellana": {
        "type": "overview", "caption": "川金丝猴形态示意（手绘示意图，非实拍）", "illustration": True,
        "svg": '<svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" class="ill" role="img" aria-label="金丝猴示意图"><ellipse cx="200" cy="210" rx="90" ry="75" fill="#d9a441" stroke="#7a5410" stroke-width="3"/><circle cx="200" cy="120" r="58" fill="#c9b06a" stroke="#7a5410" stroke-width="3"/><ellipse cx="200" cy="125" rx="34" ry="40" fill="#5b7fa6" stroke="#3a536e" stroke-width="2"/><circle cx="186" cy="118" r="6" fill="#222"/><circle cx="214" cy="118" r="6" fill="#222"/><path d="M200 140 q-8 10 -16 4 M200 140 q8 10 16 4" stroke="#3a536e" stroke-width="3" fill="none"/></svg>',
        "hotspots": [{"x": 0.50, "y": 0.39, "label": "淡蓝色面部", "desc": "脸部皮肤呈淡蓝至灰蓝色，是金丝猴属的典型特征。"}],
    },
    "animal-insect-apis-mellifera": {
        "type": "overview", "caption": "西方蜜蜂形态示意（手绘示意图，非实拍）", "illustration": True,
        "svg": '<svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" class="ill" role="img" aria-label="蜜蜂示意图"><ellipse cx="200" cy="180" rx="55" ry="80" fill="#f4c430" stroke="#333" stroke-width="3"/><g fill="#333"><rect x="150" y="150" width="100" height="10"/><rect x="148" y="175" width="104" height="10"/><rect x="150" y="200" width="100" height="10"/></g><ellipse cx="200" cy="90" rx="26" ry="22" fill="#222"/><path d="M170 120 q-40 -30 -60 -10 q20 30 60 10 z" fill="#cfe3ef" stroke="#7fb9cc" stroke-width="1.5"/><path d="M230 120 q40 -30 60 -10 q-20 30 -60 10 z" fill="#cfe3ef" stroke="#7fb9cc" stroke-width="1.5"/></svg>',
        "hotspots": [{"x": 0.50, "y": 0.56, "label": "黄黑斑纹", "desc": "黄黑相间的警戒色，并具高度社会性的采蜜行为。"}],
    },
    "plant-angiosperm-cymbidium-goeringii": {
        "type": "flower", "caption": "春兰形态示意（手绘示意图，非实拍）", "illustration": True,
        "svg": '<svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" class="ill" role="img" aria-label="春兰示意图"><path d="M120 290 q-10 -120 60 -150" stroke="#3f8f5b" stroke-width="4" fill="none"/><path d="M150 290 q0 -110 70 -140" stroke="#3f8f5b" stroke-width="4" fill="none"/><g fill="#bcd9a0" stroke="#7fae5b" stroke-width="1.5"><path d="M210 130 q30 -20 50 10 q-30 10 -50 -10 z"/><path d="M210 130 q-10 -30 20 -40 q0 25 -20 40 z"/></g><circle cx="222" cy="128" r="10" fill="#e8d24a"/></svg>',
        "hotspots": [{"x": 0.50, "y": 0.50, "label": "叶与花", "desc": "带状丛生叶，春季开清香小花，是中国特有兰属植物。"}],
    },
    "microbe-cyanobacteria-nostoc": {
        "type": "colony", "caption": "念珠藻群体示意（手绘示意图，非实拍）", "illustration": True,
        "svg": '<svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" class="ill" role="img" aria-label="念珠藻示意图"><g fill="#5fae8c" stroke="#2f7d52" stroke-width="2"><circle cx="120" cy="160" r="20"/><circle cx="160" cy="150" r="20"/><circle cx="200" cy="165" r="20"/><circle cx="240" cy="150" r="20"/><circle cx="280" cy="162" r="20"/><circle cx="318" cy="150" r="18"/></g><path d="M120 160 q40 -20 80 -10 q40 12 80 -5 q40 14 78 12" stroke="#2f7d52" stroke-width="2" fill="none"/></svg>',
        "hotspots": [{"x": 0.50, "y": 0.50, "label": "念珠状群体", "desc": "细胞串成念珠状群体，外被胶质鞘，能固氮。"}],
    },
}

# ---------- 物种主数据（120 条） ----------
# 格式：id, zh, en, sci, domain, group, taxon..., iucn, cn_status, distribution, summary, features, habitat, diet, behavior, facts, topics, season
MASTER = [
    # 动物界（50）
    ("animal-mammal-ailuropoda-melanoleuca","大熊猫","Giant Panda","Ailuropoda melanoleuca","animal","mammal","动物界","脊索动物门","哺乳纲","食肉目","熊科","大熊猫属","易危 (VU)","国家一级保护野生动物",["中国·四川","中国·陕西","中国·甘肃"],"体型肥硕似熊，头圆尾短；体色黑白两色，眼周、四肢、耳为黑色。",["黑眼圈（眼周黑色斑）","伪拇指","黑白体色"],"高山竹林","几乎全为竹类","独居，晨昏活动，善爬树",["成体一天可进食 12–38 kg 竹子","伪拇指由腕部籽骨特化而来"],["chinaEndemic","endangered"],None),
    ("animal-mammal-panthera-tigris-altaica","东北虎","Amur Tiger","Panthera tigris altaica","animal","mammal","动物界","脊索动物门","哺乳纲","食肉目","猫科","豹属","濒危 (EN)","国家一级保护野生动物",["中俄边境","中国·吉林·黑龙江东部山地"],"体大而壮，毛色棕黄，全身具黑色横纹；前额『王』字纹明显。",["黑色横纹","前额『王』字斑纹","体型为现存最大猫科"],"温带针阔混交林","有蹄类（狍、鹿、野猪）","独居，夜行，领地性强",["冬季毛被增厚御寒","条纹如同指纹，个体间不重复"],["chinaEndemic","endangered"],None),
    ("animal-mammal-rhinopithecus-roxellana","川金丝猴","Golden Snub-nosed Monkey","Rhinopithecus roxellana","animal","mammal","动物界","脊索动物门","哺乳纲","灵长目","猴科","仰鼻猴属","濒危 (EN)","国家一级保护野生动物",["中国·四川","中国·陕西","中国·湖北·甘肃"],"体被金黄色长毛，面部呈淡蓝色，鼻孔上仰；尾长。",["金黄色被毛","淡蓝色面部","上仰鼻孔"],"亚高山针叶林","树叶、果实、苔藓","群居，树栖",["适应高寒，冬季集群御寒","仰鼻利于减少冷空气刺激"],["chinaEndemic","endangered"],None),
    ("animal-bird-nipponia-nippon","朱鹮","Crested Ibis","Nipponia nippon","animal","bird","动物界","脊索动物门","鸟纲","鹈形目","鹮科","朱鹮属","濒危 (EN)","国家一级保护野生动物",["中国·陕西·汉中","历史广布东亚"],"体羽白色，繁殖期头颈部呈铅灰色并具红色裸露皮肤；喙黑而长向下弯。",["白色体羽","头颈部朱红色","长而下弯的喙"],"湿地、稻田、疏林","小鱼、蛙、昆虫","筑巢于高树，晨昏觅食",["曾濒临灭绝，经人工繁育种群恢复","名字源于头部繁殖期的朱红色"],["chinaEndemic","endangered"],None),
    ("animal-mammal-balaenoptera-musculus","蓝鲸","Blue Whale","Balaenoptera musculus","animal","mammal","动物界","脊索动物门","哺乳纲","鲸偶蹄目","须鲸科","须鲸属","濒危 (EN)","国家一级保护野生动物",["全球大洋","北大西洋、北太平洋、南大洋"],"地球现存最大动物，流线型躯体呈蓝灰色带浅色斑；具鲸须板滤食。",["流线型巨大躯体","蓝灰体色带斑","鲸须滤食"],"开阔大洋","小型甲壳类（磷虾）","长距离洄游，深潜",["体长可达约 30 m，重逾 150 t","历史捕鲸致种群锐减"],["endangered"],None),
    ("animal-insect-apis-mellifera","西方蜜蜂","Western Honey Bee","Apis mellifera","animal","insect","动物界","节肢动物门","昆虫纲","膜翅目","蜜蜂科","蜜蜂属","无危 (LC)","—",["全球（驯化引种）","原产欧亚非"],"体被黄褐色与黑色相间的斑纹；具膜质翅两对，后足为采粉足。",["黄黑相间斑纹","膜质翅","社会性采蜜"],"蜂巢（人工/野生）","花蜜、花粉","真社会性，分工明确",["授粉对农业至关重要","以『舞蹈』传递蜜源方位信息"],["season"],"spring"),
    # 动物-新增
    ("animal-mammal-panthera-leo","非洲狮","Lion","Panthera leo","animal","mammal","动物界","脊索动物门","哺乳纲","食肉目","猫科","豹属","易危 (VU)","—",["非洲撒哈拉以南草原","亚洲吉尔森林残存"],"雌雄两态显著，雄狮具鬃毛；群居性大型猫科动物。",["雄狮具鬃毛","群居（狮群）","黄褐色短毛"],"热带草原","有蹄类（斑马、角马等）","群居，雌狮主猎",["雌狮承担主要狩猎","吼声可传 8 km"],["endangered"],None),
    ("animal-mammal-panthera-pardus","豹","Leopard","Panthera pardus","animal","mammal","动物界","脊索动物门","哺乳纲","食肉目","猫科","豹属","易危 (VU)","国家一级保护野生动物",["非洲、亚洲多地","中国西南与南方山区"],"体型结实，毛被黄褐色并具黑色环斑；善攀爬，常将猎物拖上树。",["黑色环斑","善攀爬","强劲咬合力"],"森林、灌丛、山地","中型有蹄类、猴类","独居夜行",["会发出类似锯木的叫声","斑环可融入斑驳光影"],["endangered"],None),
    ("animal-mammal-panthera-uncia","雪豹","Snow Leopard","Panthera uncia","animal","mammal","动物界","脊索动物门","哺乳纲","食肉目","猫科","豹属","易危 (VU)","国家一级保护野生动物",["中亚高山","中国·青藏高原及周边"],"灰白毛皮具深色斑点，尾粗长；适应高寒裸岩环境。",["灰白底深色斑点","粗长尾平衡","大脚掌似雪鞋"],"高山裸岩与草甸","岩羊、北山羊等","独居，晨昏活动",["尾毛厚，休息时盖住口鼻保暖","常被称为『雪山之王』"],["chinaEndemic","endangered"],None),
    ("animal-mammal-acinonyx-jubatus","猎豹","Cheetah","Acinonyx jubatus","animal","mammal","动物界","脊索动物门","哺乳纲","食肉目","猫科","猎豹属","易危 (VU)","—",["非洲东部、南部","伊朗极少量"],"陆地上最快动物，躯干纤细，泪沟明显，爪不能缩回。",["泪沟纹","不能缩回的爪","流线型躯干"],"开阔稀树草原","小型羚羊","独居或小群，昼行",["冲刺时速可达约 110 km","转弯时需甩尾保持平衡"],["endangered"],None),
    ("animal-mammal-loxodonta-africana","非洲草原象","African Bush Elephant","Loxodonta africana","animal","mammal","动物界","脊索动物门","哺乳纲","长鼻目","象科","非洲象属","濒危 (EN)","—",["非洲撒哈拉以南"],"现存最大陆生动物，耳大，鼻与上唇愈合为长鼻，雌雄均具象牙。",["大而散的耳朵","可抓握的长鼻","弯曲象牙"],"稀树草原、森林边缘","草、树叶、果实","母系群居，长距离迁徙",["象群由母象统领","可通过低频声波远距离沟通"],["endangered"],None),
    ("animal-mammal-elephas-maximus","亚洲象","Asian Elephant","Elephas maximus","animal","mammal","动物界","脊索动物门","哺乳纲","长鼻目","象科","亚洲象属","濒危 (EN)","国家一级保护野生动物",["南亚、东南亚","中国·云南南部"],"体型较非洲象小，耳小，前额有两隆起，雌性多无象牙。",["小耳朵","前额隆起","雄性具象牙"],"热带森林、季雨林","草、竹叶、芭蕉等","母系群居",["亚洲象能发出人类听不到的次声波","泥浴可防晒防虫"],["chinaEndemic","endangered"],None),
    ("animal-mammal-giraffa-camelopardalis","长颈鹿","Giraffe","Giraffa camelopardalis","animal","mammal","动物界","脊索动物门","哺乳纲","偶蹄目","长颈鹿科","长颈鹿属","易危 (VU)","—",["非洲稀树草原"],"现存最高陆生动物，颈与四肢极长，体表具不规则网纹状斑。",["极长颈与四肢","网纹状斑","长舌可达 45 cm"],"稀树草原","金合欢等高处树叶","小群活动",["心脏强大以把血液泵上脑部","幼仔站立出生"],["endangered"],None),
    ("animal-mammal-equus-quagga","平原斑马","Plains Zebra","Equus quagga","animal","mammal","动物界","脊索动物门","哺乳纲","奇蹄目","马科","马属","近危 (NT)","—",["非洲东部与南部草原"],"体黑白色条纹相间，条纹延伸至腹部；群居有蹄类。",["黑白条纹","群居","善奔跑"],"草原","禾草","群居，与角马混群迁徙",["条纹可能干扰蝇类着陆","每匹斑马条纹独一无二"],[],None),
    ("animal-mammal-diceros-bicornis","黑犀牛","Black Rhinoceros","Diceros bicornis","animal","mammal","动物界","脊索动物门","哺乳纲","奇蹄目","犀科","黑犀属","极危 (CR)","—",["非洲东部与南部"],"体型粗壮，皮厚，上唇具钩状突起；具两只角。",["钩状上唇","双角","厚皮"],"灌丛、稀树草原","枝叶、嫩芽","独居或母子群",["视力差但听觉嗅觉敏锐","是受盗猎威胁最严重的犀牛之一"],["endangered"],None),
    ("animal-mammal-hippopotamus-amphibius","河马","Common Hippopotamus","Hippopotamus amphibius","animal","mammal","动物界","脊索动物门","哺乳纲","偶蹄目","河马科","河马属","易危 (VU)","—",["撒哈拉以南非洲河流湖泊"],"半水生大型草食动物，身体圆桶状，皮肤裸露呈灰褐色。",["半水生","厚皮肤分泌红色黏液","大门齿"],"河流、湖泊、沼泽","草、水生植物","黄昏上岸觅食",["皮肤分泌的黏液类似防晒霜","水中闭目憋气可达 5 分钟"],[],None),
    ("animal-mammal-ursus-maritimus","北极熊","Polar Bear","Ursus maritimus","animal","mammal","动物界","脊索动物门","哺乳纲","食肉目","熊科","熊属","易危 (VU)","—",["北极圈海冰区"],"最大陆生食肉动物之一，毛色乳白，皮下脂肪厚，善游泳。",["白色厚毛皮","厚脂肪层","大脚掌善游泳"],"海冰、海岸","环斑海豹等","独居，冬春季交配",["毛皮实际为透明中空毛","依赖海冰捕食，受气候变化威胁"],["endangered"],None),
    ("animal-mammal-ursus-arctos","棕熊","Brown Bear","Ursus arctos","animal","mammal","动物界","脊索动物门","哺乳纲","食肉目","熊科","熊属","无危 (LC)","国家二级保护野生动物",["欧亚大陆、北美","中国·西北、东北山地"],"体型粗壮，毛色从浅黄到深褐不等，肩背隆起。",["肩背隆起","长爪"," omnivorous 适应强"],"森林、山地","植物、浆果、鱼类、小型哺乳动物","独居，冬眠",["冬眠前大量进食储存脂肪","母熊育幼期极具攻击性"],[],None),
    ("animal-mammal-canis-lupus","灰狼","Gray Wolf","Canis lupus","animal","mammal","动物界","脊索动物门","哺乳纲","食肉目","犬科","犬属","无危 (LC)","国家二级保护野生动物",["北半球广泛分布","中国·东北、西北、青藏高原"],"体型中等偏大，毛色灰褐，耳尖直立，尾下垂。",["灰褐色毛","直立三角耳","群居嚎叫"],"森林、草原、苔原","有蹄类、啮齿类","群居，家族领地",["狼群由优势配偶领导","嚎叫用于宣示领地"],[],None),
    ("animal-mammal-vulpes-vulpes","赤狐","Red Fox","Vulpes vulpes","animal","mammal","动物界","脊索动物门","哺乳纲","食肉目","犬科","狐属","无危 (LC)","—",["北半球广泛分布","中国多地"],"体型 slender，毛色红棕，尾长而蓬松，尾尖白色。",["红棕毛色","蓬松长尾","尖耳"],"森林、农田、城市边缘","小型哺乳类、鸟类、果实","独居夜行",["听觉敏锐，可定位雪下猎物","适应性强，已入侵澳洲造成生态问题"],[],None),
    ("animal-mammal-macropus-rufus","红大袋鼠","Red Kangaroo","Macropus rufus","animal","mammal","动物界","脊索动物门","哺乳纲","双门齿目","袋鼠科","大袋鼠属","无危 (LC)","—",["澳大利亚内陆干旱区"],"体型最大的袋鼠，雄性红棕色，雌性蓝灰色；后肢极长，尾粗。",["强壮后肢跳跃","育儿袋育幼","雄性红棕毛色"],"干旱草原、荒漠","草、嫩芽","夜行群居",["跳跃时速可达 65 km","幼崽在育儿袋中发育约 8 个月"],[],None),
    ("animal-mammal-phascolarctos-cinereus","考拉","Koala","Phascolarctos cinereus","animal","mammal","动物界","脊索动物门","哺乳纲","双门齿目","树袋熊科","树袋熊属","易危 (VU)","—",["澳大利亚东部桉树林"],"树栖有袋类，圆耳、无尾（短尾），爪锐利，主要食桉树叶。",["圆耳无尾","利爪攀树","以桉树叶为食"],"桉树林","桉树叶","独居树栖，日睡 18 小时",["桉树叶低热量故活动少","幼崽在育儿袋中吃母兽粪便启蒙菌群"],["endangered"],None),
    ("animal-mammal-pan-troglodytes","黑猩猩","Chimpanzee","Pan troglodytes","animal","mammal","动物界","脊索动物门","哺乳纲","灵长目","人科","黑猩猩属","濒危 (EN)","—",["非洲中部与西部热带森林"],"最接近人类的现存近亲之一，黑色被毛，面部裸露，能制造工具。",["黑色被毛","高智商与工具使用","社群复杂"],"热带雨林","果实、昆虫、小型兽","社群，母系为主",["能使用树枝钓白蚁","基因与人类相似度极高"],["endangered"],None),
    ("animal-mammal-gorilla-gorilla","西部大猩猩","Western Gorilla","Gorilla gorilla","animal","mammal","动物界","脊索动物门","哺乳纲","灵长目","人科","大猩猩属","极危 (CR)","—",["非洲中西部热带雨林"],"体型最大的灵长类，雄性背毛银白色称为『银背』。",["银背雄性","强壮上肢","地面与树栖"],"热带雨林","叶、果实、竹笋","群居，银背领导",["与人类基因相似约 98%","埃博拉与栖息地丧失致种群锐减"],["endangered"],None),
    ("animal-mammal-pongo-abelii","苏门答腊猩猩","Sumatran Orangutan","Pongo abelii","animal","mammal","动物界","脊索动物门","哺乳纲","灵长目","人科","猩猩属","极危 (CR)","—",["印度尼西亚·苏门答腊岛"],"树栖大型猿类，红棕色长毛，双臂极长，独居为主。",["红棕色长毛","极长双臂","独居树栖"],"热带雨林","果实、树皮、昆虫","独居或母子",["世界上最珍稀的猩猩","雨林砍伐与油棕种植威胁严重"],["endangered"],None),
    ("animal-mammal-suricata-suricatta","狐獴","Meerkat","Suricata suricatta","animal","mammal","动物界","脊索动物门","哺乳纲","食肉目","獴科","狐獴属","无危 (LC)","—",["非洲南部卡拉哈里"],"小型群居食肉目，体细长，站立体姿，眼周具黑斑。",["站立体姿","眼周黑斑","群体哨兵制度"],"干旱草原、沙漠","昆虫、蜥蜴、蝎","群居，轮值放哨",["一只站立警戒，其余觅食","对毒蛇免疫性较高"],[],None),
    ("animal-mammal-orycteropus-afer","土豚","Aardvark","Orycteropus afer","animal","mammal","动物界","脊索动物门","哺乳纲","管齿目","土豚科","土豚属","无危 (LC)","—",["非洲撒哈拉以南"],"夜间活动的食蚁动物，长鼻、大耳、强力爪，舌极长。",["长管状鼻","大耳","强爪挖蚁穴"],"稀树草原、林地","白蚁、蚂蚁","独居夜行",["一晚可食数万只白蚁","与食蚁兽为趋同进化"],[],None),
    ("animal-bird-pavo-cristatus","蓝孔雀","Indian Peafowl","Pavo cristatus","animal","bird","动物界","脊索动物门","鸟纲","鸡形目","雉科","孔雀属","无危 (LC)","—",["印度、斯里兰卡、东南亚","中国南方引种"],"雄鸟具华丽延长尾上覆羽，眼状斑醒目；雌鸟灰褐色。",["雄鸟长尾屏","眼状斑","冠羽"],"森林、灌丛、农田","种子、昆虫、小型动物","地栖兼树栖",["雄鸟开屏求偶","尾屏实际由尾上覆羽构成"],["season"],"spring"),
    ("animal-bird-phoenicopterus-roseus","大红鹳","Greater Flamingo","Phoenicopterus roseus","animal","bird","动物界","脊索动物门","鸟纲","红鹳目","红鹳科","红鹳属","无危 (LC)","—",["非洲、南欧、南亚、西亚湿地"],"涉禽，体羽粉红，颈与腿极长，喙向下弯曲滤食。",["粉红羽色","极长颈腿","倒弯喙滤食"],"咸水湖、潟湖","藻类、甲壳类","大群集居",["粉红来自食物中的类胡萝卜素","常单脚站立"],[],None),
    ("animal-bird-aquila-chrysaetos","金雕","Golden Eagle","Aquila chrysaetos","animal","bird","动物界","脊索动物门","鸟纲","鹰形目","鹰科","雕属","无危 (LC)","国家一级保护野生动物",["北半球山地","中国·西部、北部、青藏高原"],"大型猛禽，头颈金色，喙钩曲，爪锐利，翼宽而长。",["金色头颈","钩曲喙","锐利爪"],"高山、草原、荒漠","野兔、旱獭、鸟类","独居或成对，高空盘旋",["飞行时速可达 240 km","常借助上升气流盘旋"],["chinaEndemic","endangered"],None),
    ("animal-bird-strigiformes-tyto-alba","仓鸮","Barn Owl","Tyto alba","animal","bird","动物界","脊索动物门","鸟纲","鸮形目","草鸮科","草鸮属","无危 (LC)","国家二级保护野生动物",["全球除极地外","中国·华南、西南"],"面盘心形，羽色浅黄褐带灰斑，无声飞行。",["心形面盘","无声飞羽","夜行"],"农田、林地、谷仓","鼠类、小型鸟类","夜行独居",["听觉极敏锐可定位地下猎物","一只仓鸮一年可捕食数千只鼠"],[],None),
    ("animal-bird-spheniscidae-adeliae","阿德利企鹅","Adélie Penguin","Pygoscelis adeliae","animal","bird","动物界","脊索动物门","鸟纲","企鹅目","企鹅科","阿德利企鹅属","近危 (NT)","—",["南极大陆及岛屿海岸"],"中小型企鹅，头背黑，腹白，眼周白色。",["黑白配色","眼周白环","南极分布"],"南极海岸、海冰","磷虾、鱼类","群居繁殖",["用卵石筑巢，卵石常被盗","游泳时速可达 75 km"],[],None),
    ("animal-bird-cygnus-olor","疣鼻天鹅","Mute Swan","Cygnus olor","animal","bird","动物界","脊索动物门","鸟纲","雁形目","鸭科","天鹅属","无危 (LC)","国家二级保护野生动物",["欧洲、中亚","中国·新疆、华北等地"],"大型游禽，纯白羽，喙橙红具黑色疣状突起，颈呈 S 形。",["纯白羽","橙红喙带黑疣","优雅长颈"],"湖泊、河流、沼泽","水生植物、藻类","成对或小群",["雄鸟护巢时极具攻击性","颈部可摆出独特心形"],[],None),
    ("animal-bird-grus-japonensis","丹顶鹤","Red-crowned Crane","Grus japonensis","animal","bird","动物界","脊索动物门","鸟纲","鹤形目","鹤科","鹤属","濒危 (EN)","国家一级保护野生动物",["中国东北、日本北海道、朝鲜半岛"],"大型涉禽，通体白，次级飞羽黑，头顶皮肤裸露呈朱红色。",["头顶朱红","黑次级飞羽","优雅站姿"],"湿地、沼泽","鱼、虾、昆虫、植物","成对或家族群",["长寿与忠贞象征","舞姿复杂用于求偶"],["chinaEndemic","endangered"],None),
    ("animal-bird-psittacidae-ara-macao","绯红金刚鹦鹉","Scarlet Macaw","Ara macao","animal","bird","动物界","脊索动物门","鸟纲","鹦形目","鹦鹉科","金刚鹦鹉属","无危 (LC)","—",["中美与南美热带雨林"],"色彩艳丽的大型鹦鹉，红、黄、蓝羽相间，尾长。",["红黄斑蓝羽","强劲钩喙","长尾"],"热带雨林","果实、坚果、种子","成对或小群，长寿",["可活 50 年以上","用喙攀援与破壳硬坚果"],[],None),
    ("animal-bird-trochilidae-archilochus","黑颏北蜂鸟","Ruby-throated Hummingbird","Archilochus colubris","animal","bird","动物界","脊索动物门","鸟纲","雨燕目","蜂鸟科","北蜂鸟属","无危 (LC)","—",["北美洲东部"],"小型蜂鸟，雄鸟喉部红宝石色，飞行时可悬停、倒飞。",["悬停飞行","虹彩喉部","长喙吸蜜"],"花园、林地、草地","花蜜、小型昆虫","独居，迁徙",["心跳休息时约 250 次/分钟","可跨墨西哥湾迁徙"],["season"],"summer"),
    ("animal-bird-struthio-camelus","非洲鸵鸟","Common Ostrich","Struthio camelus","animal","bird","动物界","脊索动物门","鸟纲","鸵形目","鸵鸟科","鸵鸟属","无危 (LC)","—",["非洲稀树草原与荒漠"],"现存最大鸟类，不能飞，双腿强壮善奔跑，颈长。",["最大鸟类","不能飞行","强壮长腿"],"干旱草原、荒漠","草、种子、昆虫","群居",["奔跑时速可达 70 km","每只眼几乎与脑一样大"],[],None),
    ("animal-reptile-crocodylus-niloticus","尼罗鳄","Nile Crocodile","Crocodylus niloticus","animal","reptile","动物界","脊索动物门","爬行纲","鳄目","鳄科","鳄属","无危 (LC)","—",["非洲淡水河流湖泊"],"非洲最大淡水鳄，体长可达 5 m，吻部略呈 V 形。",["V 形吻","装甲鳞片","强大利齿"],"河流、湖泊、湿地","鱼类、哺乳动物、鸟类","伏击型捕食者",["咬合力极强","可在水下憋气数小时"],[],None),
    ("animal-reptile-chelonia-mydas","绿海龟","Green Sea Turtle","Chelonia mydas","animal","reptile","动物界","脊索动物门","爬行纲","龟鳖目","海龟科","海龟属","濒危 (EN)","国家一级保护野生动物",["热带亚热带海域","中国·南海"],"大型海龟，成体背甲心形，主食海草，脂肪呈绿色。",["心形背甲","以海草为食","四肢特化为鳍"],"浅海海草床、珊瑚礁","海草、藻类","长距离洄游",["洄游数千公里返回出生地产卵","幼龟成活率极低"],["endangered"],None),
    ("animal-reptile-python-bivittatus","缅甸蟒","Burmese Python","Python bivittatus","animal","reptile","动物界","脊索动物门","爬行纲","有鳞目","蟒科","蟒属","易危 (VU)","国家二级保护野生动物",["东南亚","中国·华南、云南"],"世界最大蛇类之一，体色棕褐具斑纹，无毒，绞杀猎物。",["体型巨大","无毒绞杀","热窝感温"],"森林、草地、湿地","哺乳动物、鸟类","夜行独居",["可长达 5–6 m","入侵佛罗里达造成生态问题"],[],None),
    ("animal-reptile-varanus-komodoensis","科莫多巨蜥","Komodo Dragon","Varanus komodoensis","animal","reptile","动物界","脊索动物门","爬行纲","有鳞目","巨蜥科","巨蜥属","濒危 (EN)","—",["印度尼西亚·科莫多岛等"],"现存最大蜥蜴，体长可达 3 m，唾液含多种细菌。",["最大蜥蜴","强锯齿状牙齿","毒液与细菌"],"热带稀树草原、森林","鹿、猪、腐肉","独居，嗅觉敏锐",["幼体常栖树避成体","奔跑短时可达 20 km/h"],["endangered"],None),
    ("animal-reptile-gekko-gecko","大壁虎","Tokay Gecko","Gekko gecko","animal","reptile","动物界","脊索动物门","爬行纲","有鳞目","壁虎科","壁虎属","无危 (LC)","国家二级保护野生动物",["东南亚、南亚","中国·华南、云南"],"体色灰蓝具橙色斑点，趾具吸盘，夜行性，鸣声响亮。",["趾端吸盘","橙色斑点","夜间鸣叫"],"建筑、岩缝、树林","昆虫","夜行独居",["叫声似『to-kay』","断尾可再生"],[],None),
    ("animal-amphibian-rana-temporaria","欧洲林蛙","Common Frog","Rana temporaria","animal","amphibian","动物界","脊索动物门","两栖纲","无尾目","蛙科","蛙属","无危 (LC)","—",["欧洲、亚洲北部"],"典型无尾两栖动物，体色多变，后肢长善跳跃，皮肤湿润。",["湿润皮肤","长后肢跳跃","变态发育"],"池塘、林地、草地","昆虫、蛛类","夜行",["蝌蚪经变态发育为成蛙","冬季水底冬眠"],[],None),
    ("animal-amphibian-ambystoma-mexicanum","美西螈","Axolotl","Ambystoma mexicanum","animal","amphibian","动物界","脊索动物门","两栖纲","有尾目","钝口螈科","钝口螈属","极危 (CR)","—",["墨西哥·霍奇米尔科湖"],"幼体性熟的两栖动物，具外鳃、鳍状尾，再生能力极强。",["外鳃","幼态持续","极强再生"],"淡水湖泊、运河","小鱼、昆虫、蠕虫","独居夜行",["可再生四肢、心脏与部分大脑","野生种群因污染极危"],["endangered"],None),
    ("animal-amphibian-bufo-bufo","中华大蟾蜍","Common Toad","Bufo bufo","animal","amphibian","动物界","脊索动物门","两栖纲","无尾目","蟾蜍科","蟾蜍属","无危 (LC)","—",["欧亚大陆广泛分布"],"体粗壮，皮肤粗糙具疣粒，眼后有毒腺。",["粗糙疣状皮肤","眼后毒腺","短腿爬行"],"林地、草地、花园","昆虫、蠕虫、蜗牛","夜行",["皮肤毒液可驱避捕食者","幼体即蝌蚪"],[],None),
    ("animal-fish-carcharodon-carcharias","大白鲨","Great White Shark","Carcharodon carcharias","animal","fish","动物界","脊索动物门","软骨鱼纲","鼠鲨目","鼠鲨科","噬人鲨属","易危 (VU)","国家二级保护野生动物",["全球温带沿海"],"大型掠食性鲨鱼，体呈纺锤形，背鳍大，牙齿三角形锯齿状。",["三角形锯齿齿","大背鳍","体型可达 6 m"],"近海、外海","海豹、鱼类、鲸尸","独居巡游",["通过试探性咬击判断猎物","体温高于周围海水"],["endangered"],None),
    ("animal-fish-salmo-salar","大西洋鲑","Atlantic Salmon","Salmo salar","animal","fish","动物界","脊索动物门","辐鳍鱼纲","鲑形目","鲑科","鲑属","近危 (NT)","—",["北大西洋及河流"],"著名的溯河洄游鱼类，银蓝色成鱼，繁殖期体色变深。",["溯河洄游","银蓝色流线体","繁殖期色变"],"海洋、淡水河流","小鱼、甲壳类","洄游",["产卵后多数死亡","能跃过瀑布上溯"],[],None),
    ("animal-fish-carassius-auratus","金鱼","Goldfish","Carassius auratus","animal","fish","动物界","脊索动物门","辐鳍鱼纲","鲤形目","鲤科","鲫属","无危（驯化）","—",["中国起源，全球观赏"],"鲫鱼的驯化变种，体色金黄或多样，鳍形多变。",["金黄体色","人工选育品种繁多","鲤科鱼类"],"池塘、水族箱","藻类、小型无脊椎动物","群居",["由中国鲫鱼驯化而来","对颜色有较好识别"],[],None),
    ("animal-fish-amphiprion-ocellaris","眼斑双锯鱼","Ocellaris Clownfish","Amphiprion ocellaris","animal","fish","动物界","脊索动物门","辐鳍鱼纲","鲈形目","雀鲷科","双锯鱼属","无危 (LC)","—",["印度洋-太平洋珊瑚礁"],"橙白相间的小型海水鱼，与海葵互利共生。",["橙白条纹","与海葵共生","雌大雄小"],"珊瑚礁","浮游动物、藻类","小群栖息海葵",["体表黏液使其免被海葵刺伤","群体中最大者为雌鱼"],[],None),
    ("animal-fish-thunnus-thynnus","大西洋蓝鳍金枪鱼","Atlantic Bluefin Tuna","Thunnus thynnus","animal","fish","动物界","脊索动物门","辐鳍鱼纲","鲈形目","鲭科","金枪鱼属","近危 (NT)","—",["大西洋、地中海"],"大型远洋洄游鱼，纺锤形，体温调节能力强，游速极快。",["恒温能力","极高游速","深红色肉"],"开阔大洋","小鱼、头足类","集群洄游",["售价高昂致过度捕捞","可持续渔业管理后种群恢复"],["endangered"],None),
    ("animal-fish-hippocampus","海马","Seahorse","Hippocampus spp.","animal","fish","动物界","脊索动物门","辐鳍鱼纲","海龙目","海龙科","海马属","易危 (VU)〔多数种〕","国家二级保护野生动物",["全球温带热带浅海"],"头部似马，尾可卷曲抓握，雄鱼具育儿袋。",["马头状","卷曲尾抓握","雄鱼育幼"],"海草床、珊瑚礁、红树林","小型甲壳类","独居",["海马由雄鱼怀孕","游泳能力弱"],["endangered"],None),
    ("animal-insect-danaus-plexippus","君主斑蝶","Monarch Butterfly","Danaus plexippus","animal","insect","动物界","节肢动物门","昆虫纲","鳞翅目","蛱蝶科","斑蝶属","濒危 (EN)","—",["北美洲"],"橙黑相间的大型蝴蝶，幼虫食马利筋，进行长距离迁徙。",["橙黑警戒色","长距离迁徙","幼虫食马利筋"],"草地、花园、森林","花蜜","迁徙",["迁徙距离可达数千公里","马利筋毒素使其不可口"],["endangered"],"summer"),
    ("animal-insect-formica-rufa","木蚁","Wood Ant","Formica rufa","animal","insect","动物界","节肢动物门","昆虫纲","膜翅目","蚁科","蚁属","无危 (LC)","—",["欧亚大陆北部森林"],"红褐色中型蚂蚁，筑大型蚁丘，具蚁酸防御。",["筑大型蚁丘","喷射蚁酸","社会性"],"森林","蚜虫蜜露、昆虫","群居",["蚁丘由针叶与土壤构成","冬季蚁丘内仍保持一定温度"],[],None),
    ("animal-insect-anisoptera","蜻蜓","Dragonfly","Anisoptera","animal","insect","动物界","节肢动物门","昆虫纲","蜻蜓目","差翅亚目","—","无危 (LC)","—",["全球淡水环境"],"大型捕食性昆虫，复眼大，翅透明具翅痣，飞行敏捷。",["大复眼","透明翅","捕食性飞行"],"湖泊、河流、湿地","蚊、蝇、小型昆虫","独居",["幼虫水生，捕食蚊虫幼体","复眼几乎覆盖头部"],[],None),
    ("animal-insect-coccinella-septempunctata","七星瓢虫","Seven-spot Ladybug","Coccinella septempunctata","animal","insect","动物界","节肢动物门","昆虫纲","鞘翅目","瓢虫科","瓢虫属","无危 (LC)","—",["欧亚大陆","中国广泛分布"],"红色鞘翅具七个黑色斑点，半球形，捕食蚜虫。",["红底黑斑","半球形","捕食蚜虫"],"农田、花园、林地","蚜虫、介壳虫","独居或聚集越冬",["一生产卵数百枚","是农业重要天敌"],[],None),
    ("animal-insect-scarabaeidae","蜣螂","Dung Beetle","Scarabaeidae","animal","insect","动物界","节肢动物门","昆虫纲","鞘翅目","金龟子科","—","无危 (LC)","—",["全球（除南极）"],"以动物粪便为食，有推粪球、掘洞等习性，对土壤有重要生态作用。",["推粪球","强壮足","粪食性"],"草原、森林、农田","粪便","独居或交配期成对",["古埃及象征重生","一坨粪可埋入地下减少蝇类"],[],None),
    ("animal-invertebrate-araneae","蜘蛛","Spider","Araneae","animal","invertebrate","动物界","节肢动物门","蛛形纲","蜘蛛目","—","—","无危 (LC)","—",["全球（除南极）"],"八足节肢动物，身体分头胸部与腹部，多数能纺丝结网。",["八足","纺丝结网","两体段"],"多样生境","昆虫","独居",["蜘蛛丝强度高于同等粗细钢铁","毒液多用于液化猎物"],[],None),
    ("animal-invertebrate-octopus-vulgaris","普通章鱼","Common Octopus","Octopus vulgaris","animal","invertebrate","动物界","软体动物门","头足纲","八腕目","章鱼科","章鱼属","无危 (LC)","—",["全球温带热带海域"],"八腕头足类，具高度发达眼睛与色素细胞，能改变体色。",["八腕","变色拟态","三心脏"],"浅海岩礁、海草床","蟹、贝类、鱼类","独居，夜行",["具有短期记忆与问题解决能力","喷墨逃生"],[],None),
    ("animal-invertebrate-scyphozoa","海月水母","Moon Jellyfish","Aurelia aurita","animal","invertebrate","动物界","刺胞动物门","钵水母纲","旗口水母目","羊须水母科","海月水母属","无危 (LC)","—",["全球温带沿海"],"透明伞状水母，四马蹄形生殖腺明显，具刺细胞。",["透明伞状体","四马蹄形生殖腺","刺细胞"],"近海、海湾","浮游生物、小型鱼虾","漂浮生活",["无大脑、心脏与血液","95% 以上为水"],[],None),
    ("animal-invertebrate-asterias-rubens","普通海星","Common Starfish","Asterias rubens","animal","invertebrate","动物界","棘皮动物门","海星纲","海星目","海盘车科","海盘车属","无危 (LC)","—",["东北大西洋"],"五辐射对称棘皮动物，具管足与再生能力。",["五辐射对称","管足运动","再生腕"],"潮间带至浅海","贝类、蠕虫","独居或群居",["外翻胃部消化体外猎物","断腕可再生"],[],None),
    ("animal-invertebrate-achatina-fulica","非洲大蜗牛","Giant African Snail","Achatina fulica","animal","invertebrate","动物界","软体动物门","腹足纲","柄眼目","非洲大蜗牛科","非洲大蜗牛属","无危（入侵种）","—",["非洲东部","已入侵多国热带亚热带"],"大型陆生蜗牛，壳长可达 20 cm，繁殖力强。",["大型螺壳","两对触角","繁殖力强"],"潮湿林地、花园","植物、腐殖质","夜行",["雌雄同体","世界百大入侵物种之一"],[],None),
    ("animal-invertebrate-brachyura","螃蟹","Crab","Brachyura","animal","invertebrate","动物界","节肢动物门","甲壳纲","十足目","短尾下目","—","无危 (LC)","—",["全球水域与海岸"],"十足目甲壳类，身体宽扁，五对步足，第一对常特化为螯。",["五对步足","一对螯","横走"],"海洋、淡水、潮间带","杂食性","独居或集群",["螃蟹横着走","蜕壳成长"],[],None),
    ("animal-invertebrate-scorpiones","蝎子","Scorpion","Scorpiones","animal","invertebrate","动物界","节肢动物门","蛛形纲","蝎目","—","—","无危 (LC)","—",["全球热带亚热带干旱区"],"蛛形纲捕食者，具毒刺尾、钳状触肢，夜行。",["毒刺尾","钳状触肢","夜行"],"沙漠、岩石缝隙","昆虫、蜘蛛","独居",["紫外光下发出蓝绿色荧光","尾刺毒液用于捕食与防御"],[],None),

    # 植物界（50）
    ("plant-ginkgophyta-ginkgo-biloba","银杏","Ginkgo","Ginkgo biloba","plant","leaf","植物界","裸子植物门","银杏纲","银杏目","银杏科","银杏属","濒危 (EN)","国家一级保护野生植物",["原生中国（浙江天目山等）","现全球广泛栽培"],"落叶乔木；叶扇形，具长叶柄，顶端常二裂，叶脉二叉状分叉。",["扇形叶","二叉脉","长叶柄"],"温带湿润山地","光合自养","雌雄异株，种子称白果",["被誉为活化石","野生种群极稀少，栽培个体遍布全球"],["chinaEndemic","endangered"],"autumn"),
    ("plant-ginkgophyta-metasequoia-glyptostroboides","水杉","Dawn Redwood","Metasequoia glyptostroboides","plant","tree","植物界","裸子植物门","松柏纲","松柏目","杉科","水杉属","濒危 (EN)","国家一级保护野生植物",["中国·湖北·利川","现全球引种栽培"],"落叶针叶乔木，树冠塔形；叶线形、对生，秋季变红褐色后脱落。",["塔形树冠","对生线形叶","落叶针叶树"],"山谷湿地、河岸","光合自养","速生，喜湿润",["曾被认为已灭绝，1940s 在中国重新发现","与恐龙同代的活化石"],["chinaEndemic","endangered"],"autumn"),
    ("plant-angiosperm-paeonia-suffruticosa","牡丹","Tree Peony","Paeonia suffruticosa","plant","flower","植物界","被子植物门","双子叶植物纲","虎耳草目","芍药科","芍药属","无危（广泛栽培）","—",["中国中原、西北","现全球园林栽培"],"灌木；花大，重瓣，花色丰富；叶互生二回三出复叶。",["重瓣大花","花径可达 20 cm","木质茎"],"庭院、园林","光合自养","春季开花",["素有花中之王、国色天香之称","为中国传统名花，栽培史逾千年"],["season"],"spring"),
    ("plant-angiosperm-nelumbo-nucifera","荷花","Sacred Lotus","Nelumbo nucifera","plant","flower","植物界","被子植物门","双子叶植物纲","山龙眼目","莲科","莲属","无危（广布栽培）","—",["亚洲热带至温带水池","中国南北广泛栽培"],"水生草本；叶圆盾状、挺出水面；花大、粉或白色，中央为莲蓬。",["圆盾状叶","挺水开花","莲蓬"],"池塘、湖沼","光合自养","夏季开花",["根状茎即藕，种子为莲子","叶面的蜡质使其出淤泥而不染"],["season"],"summer"),
    ("plant-angiosperm-cymbidium-goeringii","春兰","Goering's Cymbidium","Cymbidium goeringii","plant","flower","植物界","被子植物门","单子叶植物纲","天门冬目","兰科","兰属","近危","国家二级保护野生植物",["中国·华东·华中·西南"],"地生兰；叶带状、丛生；花单生，淡绿至浅紫，清香。",["丛生带状叶","花单生清香","中国特有兰属"],"林下阴湿处","光合自养","春季开花",["中国传统名花，赏叶亦赏花","因采挖压力，野生资源需保护"],["chinaEndemic","endangered"],"spring"),
    ("plant-angiosperm-rosa-chinensis","月季","Chinese Rose","Rosa chinensis","plant","flower","植物界","被子植物门","双子叶植物纲","蔷薇目","蔷薇科","蔷薇属","无危（广布栽培）","—",["中国原产，全球栽培"],"常绿或半常绿灌木，茎具皮刺；花常簇生，重瓣，花色多样。",["皮刺茎","重瓣花","多季开花"],"园林、庭院","光合自养","夏季为主，多季开花",["现代月季重要亲本之一","花语常与爱情相关"],["season"],"summer"),
    ("plant-angiosperm-tulipa","郁金香","Tulip","Tulipa spp.","plant","flower","植物界","被子植物门","单子叶植物纲","百合目","百合科","郁金香属","无危（栽培）","—",["中亚起源，全球栽培"],"球根花卉，花杯状，茎叶光滑；花色丰富，春季开花。",["杯状花","球根","春季开花"],"园林、花田","光合自养","春季开花",["荷兰国花","郁金香狂热是早期经济泡沫案例"],["season"],"spring"),
    ("plant-angiosperm-orchidaceae","蝴蝶兰","Moth Orchid","Phalaenopsis spp.","plant","flower","植物界","被子植物门","单子叶植物纲","天门冬目","兰科","蝴蝶兰属","无危（栽培）","—",["东南亚热带森林"],"附生兰，花形似蝶，唇瓣发达，花期长，常见盆栽观赏。",["蝶形花","附生","长花期"],"热带森林、温室","光合自养","冬春开花",["附生于树干，气生根吸收水分","是重要年宵花卉"],["season"],"winter"),
    ("plant-angiosperm-lilium","百合","Lily","Lilium spp.","plant","flower","植物界","被子植物门","单子叶植物纲","百合目","百合科","百合属","无危（栽培）","—",["北半球温带"],"球根花卉，花大喇叭状，常具香气；鳞茎可食或药用。",["喇叭状花","鳞茎","香气"],"山地、园林","光合自养","夏季开花",["部分种类鳞茎可食用","在西方象征纯洁"],["season"],"summer"),
    ("plant-angiosperm-helianthus-annuus","向日葵","Sunflower","Helianthus annuus","plant","flower","植物界","被子植物门","双子叶植物纲","菊目","菊科","向日葵属","无危（栽培）","—",["北美洲原产，全球栽培"],"一年生草本，茎直立高大；花序盘状，花盘随太阳转向。",["大花盘","向光性","种子可食"],"农田、园林","光合自养","夏季开花",["花盘由多数小花组成","种子榨油为重要食用油"],["season"],"summer"),
    ("plant-angiosperm-chrysanthemum","菊花","Chrysanthemum","Chrysanthemum × morifolium","plant","flower","植物界","被子植物门","双子叶植物纲","菊目","菊科","菊属","无危（栽培）","—",["中国原产，世界栽培"],"多年生草本，头状花序，舌状花与管状花兼备，品种繁多。",["头状花序","品种繁多","秋季开花"],"园林、庭院","光合自养","秋季开花",["中国十大名花之一","日本皇室象征"],["season"],"autumn"),
    ("plant-angiosperm-bellis-perennis","雏菊","Daisy","Bellis perennis","plant","flower","植物界","被子植物门","双子叶植物纲","菊目","菊科","雏菊属","无危 (LC)","—",["欧亚大陆"],"小型多年生草本，基生叶莲座状；头状花序，舌状花白色、盘花黄色。",["莲座叶","白舌状花黄心","早春开花"],"草地、路边、园林","光合自养","春季开花",["菊科典型头状花序","在欧美象征天真"],["season"],"spring"),
    ("plant-angiosperm-lavandula","薰衣草","Lavender","Lavandula angustifolia","plant","flower","植物界","被子植物门","双子叶植物纲","唇形目","唇形科","薰衣草属","无危（栽培）","—",["地中海地区"],"常绿芳香灌木，花穗紫色，叶披针形灰绿，具芳香油。",["紫色花穗","灰绿色叶","芳香精油"],"干旱坡地、园林","光合自养","夏季开花",["精油用于香氛与助眠","耐旱，忌积水"],["season"],"summer"),
    ("plant-angiosperm-prunus-serrulata","樱花","Japanese Cherry","Prunus serrulata","plant","flower","植物界","被子植物门","双子叶植物纲","蔷薇目","蔷薇科","李属","无危（栽培）","—",["东亚广泛栽培"],"落叶乔木，春季先花后叶，花白色或淡粉，花瓣 5。",["先花后叶","淡粉色花","春季盛放"],"园林、山野","光合自养","春季开花",["花期短暂，常被视为无常之美","园艺品种极多"],["season"],"spring"),
    ("plant-angiosperm-prunus-mume","梅花","Chinese Plum","Prunus mume","plant","flower","植物界","被子植物门","双子叶植物纲","蔷薇目","蔷薇科","李属","无危（栽培）","—",["中国原产"],"落叶小乔木，冬末春初开花，花香清幽，耐寒。",["冬春开花","花香","耐寒"],"园林、庭院","光合自养","冬末春初",["中国十大名花之首","与兰竹菊并称四君子"],["season"],"winter"),
    ("plant-angiosperm-magnolia-denudata","玉兰","Yulan Magnolia","Magnolia denudata","plant","flower","植物界","被子植物门","双子叶植物纲","木兰目","木兰科","木兰属","无危（栽培）","—",["中国原产"],"落叶乔木，早春开大花，白色，花被片 9，先花后叶。",["大白色花","先花后叶","花被片 9"],"园林、庭院","光合自养","早春开花",["上海市市花","花形秀美，芳香"],["season"],"spring"),
    ("plant-angiosperm-hibiscus-rosa-sinensis","朱槿","Chinese Hibiscus","Hibiscus rosa-sinensis","plant","flower","植物界","被子植物门","双子叶植物纲","锦葵目","锦葵科","木槿属","无危（栽培）","—",["中国南部及热带亚洲"],"常绿灌木，花大红色，单生，雄蕊柱长，四季开花。",["大红花","雄蕊柱","四季开花"],"热带园林","光合自养","全年开花",["南宁市市花","单朵花仅开放一日"],["season"],"summer"),
    ("plant-angiosperm-narcissus","水仙","Narcissus","Narcissus tazetta var. chinensis","plant","flower","植物界","被子植物门","单子叶植物纲","天门冬目","石蒜科","水仙属","无危（栽培）","—",["中国福建、浙江沿海"],"球根花卉，叶带状；花白色具黄色副冠，清香，冬季开花。",["白色花黄色副冠","球根","冬季开花"],"水边、盆栽","光合自养","冬季开花",["漳州水仙著名","花香浓郁"],["season"],"winter"),
    ("plant-angiosperm-oryza-sativa","水稻","Asian Rice","Oryza sativa","plant","grass","植物界","被子植物门","单子叶植物纲","禾本目","禾本科","稻属","无危（栽培）","—",["亚洲季风区广泛种植"],"一年生草本，茎秆中空，穗下垂；颖果即稻谷，去壳为大米。",["穗状花序","中空茎秆","颖果"],"水田、湿地","光合自养","夏秋成熟",["全球约半数人口主食","中国最早驯化水稻地区之一"],["season"],"autumn"),
    ("plant-angiosperm-triticum-aestivum","普通小麦","Common Wheat","Triticum aestivum","plant","grass","植物界","被子植物门","单子叶植物纲","禾本目","禾本科","小麦属","无危（栽培）","—",["全球温带广泛种植"],"一年生或二年生草本，穗状花序，小穗具芒；颖果磨粉。",["穗状花序","颖果磨粉","六倍体"],"旱地、农田","光合自养","夏季成熟",["全球三大谷物之一","面粉主要来源"],["season"],"summer"),
    ("plant-angiosperm-zea-mays","玉米","Maize","Zea mays","plant","grass","植物界","被子植物门","单子叶植物纲","禾本目","禾本科","玉蜀黍属","无危（栽培）","—",["美洲原产，全球栽培"],"一年生高大草本，茎直立，雌雄同株异花；颖果即玉米粒。",["雌雄同株","颖果紧密排成穗","高大茎秆"],"农田","光合自养","夏末秋初成熟",["用途极广：粮、饲、工业原料","C4 作物光合效率高"],["season"],"autumn"),
    ("plant-angiosperm-camellia-sinensis","茶树","Tea Plant","Camellia sinensis","plant","leaf","植物界","被子植物门","双子叶植物纲","山茶目","山茶科","山茶属","无危（栽培）","—",["中国西南起源，全球种植"],"常绿灌木或小乔木，叶革质椭圆形；嫩芽制茶。",["革质椭圆叶","嫩芽制茶","常绿"],"亚热带山地、茶园","光合自养","春秋季采嫩芽",["绿茶、红茶、乌龙茶均源于同一种","中国是茶原产地"],[],None),
    ("plant-angiosperm-malus-domestica","苹果","Apple","Malus domestica","plant","leaf","植物界","被子植物门","双子叶植物纲","蔷薇目","蔷薇科","苹果属","无危（栽培）","—",["中亚起源，全球温带栽培"],"落叶乔木，叶卵圆形；花白或淡粉；果实球形，肉质多汁。",["球形肉质果","叶卵圆","春季白花"],"温带果园","光合自养","秋季结果",["富含果胶与膳食纤维","品种繁多，颜色各异"],["season"],"autumn"),
    ("plant-angiosperm-musa-acuminata","香蕉","Banana","Musa acuminata","plant","leaf","植物界","被子植物门","单子叶植物纲","姜目","芭蕉科","芭蕉属","无危（野生）","—",["东南亚热带"],"大型草本，叶巨大长椭圆形；果串弯曲，浆果无籽。",["巨大叶片","浆果无籽","多年生草本"],"热带果园","光合自养","全年可采收",["常见无籽香蕉为三倍体","富含钾"],[],None),
    ("plant-angiosperm-citrus-sinensis","甜橙","Sweet Orange","Citrus sinensis","plant","leaf","植物界","被子植物门","双子叶植物纲","芸香目","芸香科","柑橘属","无危（栽培）","—",["原产东南亚，全球亚热带栽培"],"常绿小乔木，叶椭圆形有翼叶；果实球形，果皮橙色，汁囊化。",["球形橙果","翼叶","芳香皮油"],"亚热带果园","光合自养","冬季成熟",["富含维生素 C","果皮可提取精油"],["season"],"winter"),
    ("plant-angiosperm-vitis-vinifera","葡萄","Common Grape Vine","Vitis vinifera","plant","leaf","植物界","被子植物门","双子叶植物纲","葡萄目","葡萄科","葡萄属","无危（栽培）","—",["西亚起源，全球栽培"],"落叶木质藤本，卷须攀援；叶掌状分裂；果实成串。",["藤本卷须","掌状叶","成串浆果"],"温带果园、干旱坡地","光合自养","夏末秋初成熟",["可鲜食、制干、酿酒","葡萄酒主要原料"],["season"],"autumn"),
    ("plant-angiosperm-brassica-oleracea","甘蓝","Cabbage","Brassica oleracea var. capitata","plant","leaf","植物界","被子植物门","双子叶植物纲","十字花目","十字花科","芸薹属","无危（栽培）","—",["地中海起源，全球栽培"],"二年生草本，叶球状紧密包叠；甘蓝、花椰菜等同属不同变种。",["叶球紧密","十字花科","品种多样"],"农田、菜园","光合自养","秋季收获",["花椰菜与西兰花为其变种","富含维生素 C 与纤维"],[],None),
    ("plant-angiosperm-solanum-lycopersicum","番茄","Tomato","Solanum lycopersicum","plant","leaf","植物界","被子植物门","双子叶植物纲","茄目","茄科","番茄属","无危（栽培）","—",["南美洲原产，全球栽培"],"一年生草本，茎蔓性或直立；叶羽状；果实浆果，红或黄色。",["浆果蔬菜","羽状复叶","无限生长型"],"农田、温室","光合自养","夏秋结果",["果实富含番茄红素","常作蔬菜食用"],["season"],"summer"),
    ("plant-angiosperm-daucus-carota","胡萝卜","Carrot","Daucus carota subsp. sativus","plant","leaf","植物界","被子植物门","双子叶植物纲","伞形目","伞形科","胡萝卜属","无危（栽培）","—",["中亚起源，全球栽培"],"二年生草本，直根肥大肉质，橙红色；叶羽状分裂。",["肥大肉质根","橙红色","伞形花序"],"农田、菜园","光合自养","秋季收获",["富含 β-胡萝卜素","可生食或熟食"],[],None),
    ("plant-angiosperm-bambusoideae","毛竹","Moso Bamboo","Phyllostachys edulis","plant","grass","植物界","被子植物门","单子叶植物纲","禾本目","禾本科","刚竹属","无危（栽培）","—",["中国华东、华中、西南"],"大型散生竹，竿高达 20 m，节间圆筒形；春笋可食。",["高大圆竹竿","竹鞭扩展","春笋可食"],"亚热带山地、丘陵","光合自养","春夏出笋",["中国竹资源最丰富的国家","大熊猫主食竹种之一"],["season"],"spring"),
    ("plant-angiosperm-aloe-vera","芦荟","Aloe Vera","Aloe vera","plant","leaf","植物界","被子植物门","单子叶植物纲","天门冬目","阿福花科","芦荟属","无危（栽培）","—",["阿拉伯半岛起源"],"多年生肉质草本，叶厚多汁披针形，缘有刺状小齿。",["肉质厚叶","缘具小刺","叶汁药用"],"干旱地区、盆栽","光合自养","冬末春初开花",["叶汁常用于护肤与轻度烫伤","耐旱多肉植物"],[],None),
    ("plant-pteridophyta-pteridium","蕨","Bracken","Pteridium aquilinum","plant","leaf","植物界","蕨类植物门","真蕨纲","水龙骨目","碗蕨科","蕨属","无危 (LC)","—",["全球温带广泛分布"],"多年生蕨类，根状茎横走，叶大型羽状复叶，幼叶卷曲。",["大型羽状复叶","幼叶拳卷","孢子繁殖"],"林下、山坡、草地","光合自养","春季展叶",["幼叶称蕨菜可食用","成熟植株含原蕨苷"],["season"],"spring"),
    ("plant-bryophyta-moss","苔藓","Moss","Bryophyta","plant","leaf","植物界","苔藓植物门","藓纲","—","—","—","无危 (LC)","—",["全球潮湿环境"],"小型非维管植物，无真根，具假根；叶片细小，靠孢子繁殖。",["无维管组织","假根固定","孢子繁殖"],"阴湿岩面、树干、土壤","光合自养","全年缓慢生长",["是陆地生态系统拓荒者","对空气污染敏感，可作指示植物"],[],None),
    ("plant-fungi-agaricus-bisporus","双孢蘑菇","Button Mushroom","Agaricus bisporus","plant","fungus","真菌界","担子菌门","伞菌纲","伞菌目","蘑菇科","蘑菇属","无危（栽培）","—",["全球栽培"],"最常见的食用蘑菇之一，菌盖白至褐色，菌褶幼时粉后变褐。",["菌盖菌褶","担子菌","腐生"],"堆肥、土壤","腐生（分解有机物）","子实体夏秋季",["世界产量最大的食用菌之一","成熟菌褶变褐产孢子"],[],None),
    ("plant-fungi-penicillium","青霉","Penicillium","Penicillium chrysogenum","plant","fungus","真菌界","子囊菌门","散囊菌纲","散囊菌目","发菌科","青霉属","无危（常见）","—",["全球"],"丝状真菌，菌落青绿色，分生孢子梗呈扫帚状分支。",["扫帚状孢子梗","青绿色菌落","抗生素来源"],"土壤、腐烂有机物","腐生","全年",["青霉素即由青霉提取"," bread mold 常见种"],["microscopic"],None),
    ("plant-fungi-aspergillus","曲霉","Aspergillus","Aspergillus flavus","plant","fungus","真菌界","子囊菌门","散囊菌纲","散囊菌目","发菌科","曲霉属","无危（常见）","—",["全球"],"丝状真菌，分生孢子头球形，可产黄曲霉毒素。",["球形孢子头","可产毒素","腐生"],"土壤、谷物、有机物","腐生","全年",["黄曲霉毒素强致癌","也用于发酵制酱"],["microscopic"],None),
    ("plant-fungi-lichen","地衣","Lichen","—","plant","fungus","真菌界","子囊菌门/担子菌门","—","—","—","—","—","—",["全球"],"真菌与藻类或蓝藻的共生体，可生于岩石、树皮、土壤。",["共生体","耐干旱","先锋物种"],"岩石、树皮、土壤","光合共生","全年缓慢生长",["对空气质量敏感","是生态系统先锋物种"],[],None),
    ("plant-angiosperm-cocos-nucifera","椰子","Coconut","Cocos nucifera","plant","tree","植物界","被子植物门","单子叶植物纲","棕榈目","棕榈科","椰子属","无危（栽培）","—",["热带海岸"],"热带高大棕榈，羽状叶；果实大，外果皮纤维质，内果皮硬。",["羽状叶","大型核果","耐盐海风"],"热带海岸","光合自养","全年结果",["椰汁可饮，椰肉可食","果皮纤维可制绳"],[],None),
    ("plant-angiosperm-coffea-arabica","阿拉比卡咖啡","Arabica Coffee","Coffea arabica","plant","tree","植物界","被子植物门","双子叶植物纲","龙胆目","茜草科","咖啡属","无危（栽培）","—",["埃塞俄比亚高原"],"常绿灌木或小乔木，叶对生；花白，果实红色浆果，种子烘焙为咖啡豆。",["对生叶","红色浆果","咖啡因"],"热带高原山地","光合自养","秋冬结果",["全球最重要咖啡品种之一","咖啡因有兴奋作用"],[],None),
    ("plant-angiosperm-theobroma-cacao","可可","Cacao","Theobroma cacao","plant","tree","植物界","被子植物门","双子叶植物纲","锦葵目","锦葵科","可可属","无危（栽培）","—",["中美洲与南美洲热带"],"热带常绿乔木，花果实直接生于主干；种子可制巧克力。",["老茎生花","种子制巧克力","喜阴"],"热带雨林下层","光合自养","全年结果",["可可脂是巧克力主要成分","中美洲原住民早先饮用"],[],None),
    ("plant-gymnosperm-pinus","马尾松","Masson Pine","Pinus massoniana","plant","tree","植物界","裸子植物门","松柏纲","松柏目","松科","松属","无危 (LC)","—",["中国南方广泛分布"],"常绿针叶乔木，树皮红褐色鳞状；针叶两针一束，球果卵圆形。",["两针一束","鳞状红褐树皮","球果"],"山地、丘陵","光合自养","常绿",["中国南方主要造林树种之一","松脂可制松香"],["chinaEndemic"],None),
    ("plant-gymnosperm-cedrus","雪松","Cedar","Cedrus deodara","plant","tree","植物界","裸子植物门","松柏纲","松柏目","松科","雪松属","无危（栽培）","—",["喜马拉雅山区"],"常绿针叶大乔木，树冠塔形，枝平展；针叶短而密。",["塔形树冠","短针叶","芳香木材"],"园林、山地","光合自养","常绿",["木材芳香耐腐","常用作庭园观赏树"],[],None),
    ("plant-angiosperm-quercus","橡树","Oak","Quercus spp.","plant","tree","植物界","被子植物门","双子叶植物纲","壳斗目","壳斗科","栎属","无危 (LC)","—",["北半球温带"],"落叶或常绿乔木，叶常具裂；坚果即橡子，壳斗杯状。",["叶常裂","橡子坚果","壳斗杯"],"温带森林","光合自养","秋季结果",["橡子为许多野生动物食物","木材坚硬耐久"],["season"],"autumn"),
    ("plant-angiosperm-acer","槭树","Maple","Acer spp.","plant","tree","植物界","被子植物门","双子叶植物纲","无患子目","无患子科","槭属","无危 (LC)","—",["北半球温带"],"落叶乔木，叶常掌状裂；翅果成对。",["掌状裂叶","翅果成对","秋季红叶"],"温带森林、园林","光合自养","秋季落叶",["秋季叶色艳丽","加拿大国旗为糖槭叶"],["season"],"autumn"),
    ("plant-angiosperm-salix","柳树","Willow","Salix spp.","plant","tree","植物界","被子植物门","双子叶植物纲","金虎尾目","杨柳科","柳属","无危 (LC)","—",["北半球温带"],"落叶乔木或灌木，枝条柔韧下垂；叶披针形。",["柔韧下垂枝","披针形叶","早春飞絮"],"河岸、湿地、园林","光合自养","春季展叶",["枝条可用于编织","柳絮为种子带绒毛"],["season"],"spring"),
    ("plant-angiosperm-betula","白桦","Birch","Betula platyphylla","plant","tree","植物界","被子植物门","双子叶植物纲","壳斗目","桦木科","桦木属","无危 (LC)","—",["欧亚大陆北部"],"落叶乔木，树皮白色纸质，可分层剥落；叶三角状卵形。",["白色纸质树皮","三角状叶","早春开花"],"温带针阔混交林","光合自养","春季展叶",["树皮可用于书写","俄罗斯常见景观树"],["season"],"spring"),
    ("plant-angiosperm-ficus-microcarpa","榕树","Chinese Banyan","Ficus microcarpa","plant","tree","植物界","被子植物门","双子叶植物纲","荨麻目","桑科","榕属","无危（栽培）","—",["中国南方及东南亚"],"常绿大乔木，具气生根，独木成林；隐头花序。",["气生根","独木成林","隐头花序"],"热带亚热带园林","光合自养","全年",["气生根落地后增粗成支柱根","是福州、赣州等市树"],["chinaEndemic"],None),
    ("plant-angiosperm-cinnamomum-camphora","樟树","Camphor Tree","Cinnamomum camphora","plant","tree","植物界","被子植物门","双子叶植物纲","樟目","樟科","樟属","无危（栽培）","—",["中国南方"],"常绿大乔木，叶革质三出脉，全体芳香；木材可提取樟脑。",["三出脉革质叶","全体芳香","常绿"],"亚热带山地、园林","光合自养","常绿",["樟脑的传统来源","抗污染，常用行道树"],["chinaEndemic"],None),
    ("plant-angiosperm-populus","杨树","Poplar","Populus spp.","plant","tree","植物界","被子植物门","双子叶植物纲","金虎尾目","杨柳科","杨属","无危 (LC)","—",["北半球温带"],"落叶乔木，树干通直，叶多为三角状卵形；葇荑花序。",["通直树干","三角状叶","葇荑花序"],"河岸、平原、人工林","光合自养","春季展叶",["生长快，常用造纸与防护林","春季杨絮为种子"],["season"],"spring"),
    ("plant-angiosperm-hibiscus-syriacus","木槿","Rose of Sharon","Hibiscus syriacus","plant","flower","植物界","被子植物门","双子叶植物纲","锦葵目","锦葵科","木槿属","无危（栽培）","—",["中国原产"],"落叶灌木，夏秋开花，花大，花色多样，朝开暮落。",["夏秋开花","朝开暮落","花色多样"],"园林、庭院","光合自养","夏季至秋季",["韩国国花","一朵花只开一天"],["season"],"summer"),

    # 微生物界（20）
    ("microbe-bacteria-escherichia-coli","大肠杆菌","Escherichia coli","Escherichia coli","microbe","bacterium","细菌界","变形菌门","γ-变形菌","肠杆菌目","肠杆菌科","大肠杆菌属","微生物一般不评 IUCN","—",["全球","温血动物肠道及环境"],"革兰氏阴性杆菌，具鞭毛与菌毛；多数无害，是分子生物学模式生物。",["杆状细胞","鞭毛","菌毛","拟核与质粒"],"肠道及环境","兼性厌氧，发酵/呼吸兼能","多数无害，部分致病",["长约 1–2 μm","少数致病如 O157:H7","常用作基因工程宿主"],["microscopic"],None),
    ("microbe-fungi-saccharomyces-cerevisiae","酿酒酵母","Baker's Yeast","Saccharomyces cerevisiae","microbe","bacterium","真菌界","子囊菌门","酵母菌纲","酵母目","酵母科","酵母菌属","无危（模式生物）","—",["全球（栽培环境）","水果表皮、发酵基质"],"单细胞真菌，卵圆形；以出芽方式无性繁殖。",["卵圆形单细胞","出芽生殖","真核模式种"],"含糖基质","发酵糖类产乙醇与 CO₂","兼性厌氧",["面包发酵与酿酒关键微生物","分子生物学与遗传学重要模式生物"],["microscopic"],None),
    ("microbe-bacteria-mycobacterium-tuberculosis","结核分枝杆菌","Mycobacterium tuberculosis","Mycobacterium tuberculosis","microbe","bacterium","细菌界","放线菌门","放线菌纲","放线菌目","分枝杆菌科","分枝杆菌属","微生物一般不评 IUCN","—",["全球","人及其他哺乳动物呼吸道"],"细长、略弯曲的杆菌，细胞壁富含脂质，抗酸染色阳性。",["细长略弯杆菌","抗酸染色阳性","细胞壁富脂质"],"宿主细胞内","需氧","引起结核病，经飞沫传播",["人类结核病主要病原体","耐药株是重大公共卫生挑战"],["microscopic"],None),
    ("microbe-cyanobacteria-nostoc","念珠藻","Nostoc","Nostoc commune","microbe","cyanobacteria","细菌界","蓝菌门","蓝菌纲","念珠藻目","念珠藻科","念珠藻属","无危","—",["全球","土壤、苔藓、淡水"],"由球形细胞串成念珠状群体，外被胶质鞘；可行光合作用并固氮。",["念珠状细胞链","胶质鞘","固氮能力"],"土壤/水体","光合自养 + 固氮","耐干旱，遇水恢复",["部分种类可食用如地木耳","能固定大气氮，改善土壤肥力"],["microscopic"],None),
    ("microbe-virus-t4-phage","T4 噬菌体","T4 Bacteriophage","Escherichia virus T4","microbe","virus","病毒界","有尾噬菌体目","有尾噬菌体科","肌尾噬菌体科","肌尾噬菌体科","T4 样噬菌体","微生物一般不评 IUCN","—",["全球","含大肠杆菌等宿主的环境"],"感染细菌的病毒；具蛋白质衣壳组成的多面体头部与可收缩的尾鞘。",["多面体头部","可收缩尾鞘","尾丝吸附"],"宿主细菌内","—","裂解或溶原感染细菌",["专性寄生于细菌","噬菌体疗法用于耐药菌感染探索"],["microscopic"],None),
    ("microbe-bacteria-salmonella-enterica","肠道沙门氏菌","Salmonella enterica","Salmonella enterica","microbe","bacterium","细菌界","变形菌门","γ-变形菌","肠杆菌目","肠杆菌科","沙门氏菌属","微生物一般不评 IUCN","—",["全球","动物肠道及污染食物"],"革兰氏阴性杆菌，常引起食物中毒与肠炎；血清型众多。",["革兰氏阴性杆菌","运动性鞭毛","多种血清型"],"动物肠道、污染食品","兼性厌氧","常见食源性病原体",["常见由未熟蛋肉传播","伤寒沙门氏菌引起肠热症"],["microscopic"],None),
    ("microbe-bacteria-lactobacillus","乳杆菌","Lactobacillus","Lactobacillus spp.","microbe","bacterium","细菌界","厚壁菌门","芽孢杆菌纲","乳杆菌目","乳杆菌科","乳杆菌属","微生物一般不评 IUCN","—",["全球","乳制品、发酵食品、动物肠道"],"革兰氏阳性杆菌，发酵糖类产乳酸，广泛用于酸奶、泡菜等发酵。",["革兰氏阳性","产乳酸","益生菌"],"乳制品、肠道","发酵糖类产乳酸","兼性厌氧",["酸奶发酵核心菌种之一","部分菌株为益生菌"],["microscopic"],None),
    ("microbe-bacteria-staphylococcus-aureus","金黄色葡萄球菌","Staphylococcus aureus","Staphylococcus aureus","microbe","coccus","细菌界","厚壁菌门","芽孢杆菌纲","芽孢杆菌目","葡萄球菌科","葡萄球菌属","微生物一般不评 IUCN","—",["全球","人皮肤、鼻腔及环境"],"革兰氏阳性球菌，常成簇如葡萄；可致皮肤感染、食物中毒。",["成簇球菌","革兰氏阳性","产生凝固酶"],"皮肤、黏膜、食品","需氧或兼性厌氧","常见条件致病菌",["部分菌株耐甲氧西林（MRSA）","肠毒素可致食物中毒"],["microscopic"],None),
    ("microbe-bacteria-streptococcus-pneumoniae","肺炎链球菌","Streptococcus pneumoniae","Streptococcus pneumoniae","microbe","coccus","细菌界","厚壁菌门","芽孢杆菌纲","乳杆菌目","链球菌科","链球菌属","微生物一般不评 IUCN","—",["全球","人上呼吸道"],"革兰氏阳性双球菌或短链，常共栖但可致肺炎、脑膜炎。",["成双或短链","荚膜抗原分型","革兰氏阳性"],"人上呼吸道","需氧","共栖/致病菌",["疫苗可预防常见血清型","老年人与儿童易感"],["microscopic"],None),
    ("microbe-bacteria-bacillus-subtilis","枯草芽孢杆菌","Bacillus subtilis","Bacillus subtilis","microbe","bacterium","细菌界","厚壁菌门","芽孢杆菌纲","芽孢杆菌目","芽孢杆菌科","芽孢杆菌属","微生物一般不评 IUCN","—",["全球土壤、植物表面"],"革兰氏阳性杆菌，能形成耐热芽孢；常用作益生菌与科研模式。",["产芽孢","革兰氏阳性","模式生物"],"土壤","腐生/兼性","可形成生物膜",["芽孢对热与干燥极强抵抗力","用于生产酶与益生菌"],["microscopic"],None),
    ("microbe-bacteria-rhizobium-leguminosarum","根瘤菌","Rhizobium leguminosarum","Rhizobium leguminosarum","microbe","bacterium","细菌界","变形菌门","α-变形菌","根瘤菌目","根瘤菌科","根瘤菌属","微生物一般不评 IUCN","—",["全球土壤，豆科植物根瘤"],"革兰氏阴性杆菌，与豆科植物共生形成根瘤，固定大气氮为氨。",["根瘤共生","固氮作用","革兰氏阴性杆菌"],"豆科植物根瘤","从植物获取碳源，固氮供植物","共生",["每年为全球农田提供大量生物氮","是生态农业的重要微生物"],["microscopic"],None),
    ("microbe-bacteria-helicobacter-pylori","幽门螺杆菌","Helicobacter pylori","Helicobacter pylori","microbe","bacterium","细菌界","变形菌门","ε-变形菌","弯曲菌目","螺杆菌科","螺杆菌属","微生物一般不评 IUCN","—",["全球","约半数人口胃内"],"螺旋形革兰氏阴性菌，具鞭毛，可定植胃黏膜，与胃溃疡相关。",["螺旋形","多鞭毛","脲酶阳性"],"人胃黏膜","微需氧","慢性定植",["诺贝尔奖发现其与胃炎、溃疡及胃癌关系","可通过唾液或粪口传播"],["microscopic"],None),
    ("microbe-fungi-candida-albicans","白色念珠菌","Candida albicans","Candida albicans","microbe","bacterium","真菌界","子囊菌门","酵母菌纲","酵母目","酵母科","念珠菌属","微生物一般不评 IUCN","—",["全球","人皮肤、口腔、肠道黏膜"]," opportunistic 酵母样真菌，可形成假菌丝；常见口腔与阴道念珠菌病。",["酵母样","假菌丝","条件致病"],"人体黏膜","—","条件致病",["正常菌群但免疫低下时致病","可形成生物膜"],["microscopic"],None),
    ("microbe-virus-influenza-a","甲型流感病毒","Influenza A virus","Influenza A virus","microbe","virus","病毒界","—","—","—","正黏病毒科","甲型流感病毒属","微生物一般不评 IUCN","—",["全球","人与动物呼吸道"],"分节段 RNA 病毒，表面有血凝素（H）与神经氨酸酶（N），易发生变异。",["包膜病毒","分节段 RNA","H/N 表面蛋白"],"人/动物呼吸道","—","季节性流行/大流行",["1918 年西班牙流感大流行致数千万人死亡","每年需更新疫苗"],["microscopic"],None),
    ("microbe-virus-coronavirus","冠状病毒","Coronavirus","Severe acute respiratory syndrome coronavirus 2","microbe","virus","病毒界","—","—","—","冠状病毒科","冠状病毒属","微生物一般不评 IUCN","—",["全球"],"单股正链 RNA 病毒，表面有冠状突起；可致感冒至严重肺炎。",["冠状突起","单链 RNA","包膜病毒"],"人/动物呼吸道","—","经飞沫传播",["COVID-19 病原体","病毒易发生基因重组"],["microscopic"],None),
    ("microbe-virus-tmv","烟草花叶病毒","Tobacco Mosaic Virus","Tobacco mosaic virus","microbe","virus","病毒界","—","—","—","烟草花叶病毒科","烟草花叶病毒属","微生物一般不评 IUCN","—",["全球","烟草及茄科植物"],"杆状 RNA 病毒，是第一个被发现的病毒；可感染烟草等植物。",["杆状病毒","单链 RNA","植物病毒"],"植物细胞","—","通过接触与机械传播",["历史上首个被结晶的病毒","是植物病毒学经典模式"],["microscopic"],None),
    ("microbe-protista-amoeba","阿米巴","Amoeba","Amoeba proteus","microbe","protist","原生生物界","肉鞭毛亚门","—","—","—","—","微生物一般不评 IUCN","—",["全球淡水"],"单细胞真核生物，以伪足运动与摄食，形态可变。",["伪足","形态可变","二分裂繁殖"],"淡水池塘、湖泊","吞噬细菌、藻类","独居",["无固定形态，靠伪足运动","是单细胞生物经典观察材料"],["microscopic"],None),
    ("microbe-protista-paramecium","草履虫","Paramecium","Paramecium caudatum","microbe","protist","原生生物界","纤毛亚门","—","—","—","—","微生物一般不评 IUCN","—",["全球淡水"],"单细胞纤毛虫，体形似草鞋，全身覆纤毛，具大核与小核。",["纤毛运动","草鞋形","大核与小核"],"淡水池塘、溪流","细菌、藻类等","独居",["通过纤毛协调运动","大核管营养，小核管遗传"],["microscopic"],None),
    ("microbe-bacteria-methanogen","产甲烷古菌","Methanogen","Methanobacteriales","microbe","bacteria","古菌界","广古菌门","—","甲烷杆菌目","甲烷杆菌科","—","微生物一般不评 IUCN","—",["厌氧环境：湿地、反刍动物胃、污水处理"],"严格厌氧古菌，通过产甲烷作用生成甲烷（CH₄）。",["严格厌氧","产甲烷","古菌"],"厌氧湿地、肠道、反应器","以 H₂/CO₂ 或乙酸等产甲烷","厌氧",["反刍动物胃内重要菌群","湿地甲烷排放主要贡献者"],["microscopic"],None),
    ("microbe-bacteria-archaea","古菌","Archaea","Archaea","microbe","bacterium","古菌界","—","—","—","—","—","微生物一般不评 IUCN","—",["极端环境及普通环境"],"与细菌和真核生物并列的第三大域，常生存于极端环境。",["无核膜","细胞膜脂特殊","极端环境"],"热泉、盐湖、深海、土壤","化能自养或异养","多样",["生活在高温、高盐、强酸环境","16S rRNA 测序揭示其独立域"],["microscopic"],None),
]

def build_image(entry):
    """根据物种 id 和类群决定图像"""
    id = entry[0]
    zh = entry[1]
    group = entry[5]
    if id in AI_IMAGES:
        return AI_IMAGES[id]
    if id in KEEP_SVGS:
        return KEEP_SVGS[id]
    # 占位 SVG
    svg_key = group
    if svg_key not in SVGS:
        svg_key = "leaf" if entry[4] == "plant" else "bacterium"
    return {
        "type": "overview",
        "caption": f"{zh}形态示意（形态占位示意图，非实拍）",
        "illustration": True,
        "svg": SVGS[svg_key](zh),
    }

def build_entry(row):
    (id, zh, en, sci, domain, group, kingdom, phylum, klass, order, family, genus,
     iucn, cn_status, distribution, summary, features, habitat, diet, behavior, facts, topics, season) = row
    domain_label = {"animal":"动物界","plant":"植物界","microbe":"微生物"}.get(domain, domain)
    return {
        "id": id,
        "domain": domain,
        "domainLabel": domain_label,
        "taxon": {
            "kingdom": kingdom, "phylum": phylum, "class": klass,
            "order": order, "family": family, "genus": genus, "species": sci,
        },
        "names": {"zh": zh, "en": en, "common": []},
        "conservation": {"iucn": iucn, "cites": "—", "cn": cn_status},
        "distribution": distribution,
        "morphology": {"summary": summary, "key_features": features},
        "ecology": {"habitat": habitat, "diet": diet, "behavior": behavior},
        "facts": facts,
        "topics": topics,
        "season": season,
        "images": [build_image(row)],
        "references": [],
        "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。",
    }

# 为精确匹配 MVP 目标 50/50/20，跳过部分动物条目（共 14 个）
SKIP_IDS = {
    "animal-mammal-panthera-pardus",
    "animal-mammal-hippopotamus-amphibius",
    "animal-mammal-suricata-suricatta",
    "animal-mammal-orycteropus-afer",
    "animal-bird-trochilidae-archilochus",
    "animal-reptile-gekko-gecko",
    "animal-amphibian-rana-temporaria",
    "animal-amphibian-bufo-bufo",
    "animal-insect-formica-rufa",
    "animal-invertebrate-scyphozoa",
    "animal-invertebrate-asterias-rubens",
    "animal-invertebrate-achatina-fulica",
    "animal-invertebrate-scorpiones",
}

SPECIES = [build_entry(row) for row in MASTER if row[0] not in SKIP_IDS]

TOPICS = [
    {"id": "chinaEndemic", "name": "中国特有种", "desc": "模式产地在中国或主要分布于中国的物种。"},
    {"id": "endangered", "name": "IUCN 濒危红录", "desc": "IUCN 评级为易危(VU)及以上的受威胁物种。"},
    {"id": "microscopic", "name": "微观世界", "desc": "微生物（细菌 / 真菌 / 病毒 / 原生生物）。"},
    {"id": "season", "name": "季节物候", "desc": "与春 / 夏 / 秋 / 冬物候（开花、结实、活动）相关的物种。"},
]

HEADER = '''// 物种数据（MVP 数据集 · 120 物种：动物 50 / 植物 50 / 微生物 20）
// 数据模型对齐《策划方案》第一部分 §6 Schema，并扩展 topics / season 字段用于专题图鉴。
// 说明：内容为示意性，正式上线前须以权威源（Catalogue of Life / IUCN / 中国生物志库）核对；
//       不确定项标〔待核实〕。images 同时支持 svg（占位示意图）与 src（AI 生成图/真实照片路径）。
'''

OUT.write_text(
    HEADER + "window.TOPICS = " + json.dumps(TOPICS, ensure_ascii=False, indent=2) + ";\n\n" +
    "window.SPECIES = " + json.dumps(SPECIES, ensure_ascii=False, indent=2) + ";\n",
    encoding="utf-8",
)
print("✅ 已生成", OUT, "（", len(SPECIES), " 物种）")
