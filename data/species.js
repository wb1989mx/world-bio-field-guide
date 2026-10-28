// 物种数据（MVP 数据集 · 120 物种：动物 50 / 植物 50 / 微生物 20）
// 数据模型对齐《策划方案》第一部分 §6 Schema，并扩展 topics / season 字段用于专题图鉴。
// 说明：内容为示意性，正式上线前须以权威源（Catalogue of Life / IUCN / 中国生物志库）核对；
//       不确定项标〔待核实〕。images 同时支持 svg（占位示意图）与 src（AI 生成图/真实照片路径）。
window.TOPICS = [
  {
    "id": "chinaEndemic",
    "name": "中国特有种",
    "desc": "模式产地在中国或主要分布于中国的物种。"
  },
  {
    "id": "endangered",
    "name": "IUCN 濒危红录",
    "desc": "IUCN 评级为易危(VU)及以上的受威胁物种。"
  },
  {
    "id": "microscopic",
    "name": "微观世界",
    "desc": "微生物（细菌 / 真菌 / 病毒 / 原生生物）。"
  },
  {
    "id": "season",
    "name": "季节物候",
    "desc": "与春 / 夏 / 秋 / 冬物候（开花、结实、活动）相关的物种。"
  }
];

window.SPECIES = [
  {
    "id": "animal-mammal-ailuropoda-melanoleuca",
    "domain": "animal",
    "domainLabel": "动物界",
    "taxon": {
      "kingdom": "动物界",
      "phylum": "脊索动物门",
      "class": "哺乳纲",
      "order": "食肉目",
      "family": "熊科",
      "genus": "大熊猫属",
      "species": "Ailuropoda melanoleuca"
    },
    "names": {
      "zh": "大熊猫",
      "en": "Giant Panda",
      "common": []
    },
    "conservation": {
      "iucn": "易危 (VU)",
      "cites": "—",
      "cn": "国家一级保护野生动物"
    },
    "distribution": [
      "中国·四川",
      "中国·陕西",
      "中国·甘肃"
    ],
    "morphology": {
      "summary": "体型肥硕似熊，头圆尾短；体色黑白两色，眼周、四肢、耳为黑色。",
      "key_features": [
        "黑眼圈（眼周黑色斑）",
        "伪拇指",
        "黑白体色"
      ]
    },
    "ecology": {
      "habitat": "高山竹林",
      "diet": "几乎全为竹类",
      "behavior": "独居，晨昏活动，善爬树"
    },
    "facts": [
      "成体一天可进食 12–38 kg 竹子",
      "伪拇指由腕部籽骨特化而来"
    ],
    "topics": [
      "chinaEndemic",
      "endangered"
    ],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "大熊猫整体形态（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/animal/animal-mammal-ailuropoda-melanoleuca.png",
        "hotspots": [
          {
            "x": 0.5,
            "y": 0.24,
            "label": "黑眼圈",
            "desc": "眼周黑色斑纹，是大熊猫最显著的鉴别特征。"
          },
          {
            "x": 0.42,
            "y": 0.56,
            "label": "伪拇指",
            "desc": "前掌增大的籽骨，用于抓握竹竿，并非真正的指。"
          },
          {
            "x": 0.5,
            "y": 0.7,
            "label": "黑白体色",
            "desc": "四肢、肩带、耳与眼周黑；躯干白，利于林下隐蔽。"
          }
        ]
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "animal-mammal-panthera-tigris-altaica",
    "domain": "animal",
    "domainLabel": "动物界",
    "taxon": {
      "kingdom": "动物界",
      "phylum": "脊索动物门",
      "class": "哺乳纲",
      "order": "食肉目",
      "family": "猫科",
      "genus": "豹属",
      "species": "Panthera tigris altaica"
    },
    "names": {
      "zh": "东北虎",
      "en": "Amur Tiger",
      "common": []
    },
    "conservation": {
      "iucn": "濒危 (EN)",
      "cites": "—",
      "cn": "国家一级保护野生动物"
    },
    "distribution": [
      "中俄边境",
      "中国·吉林·黑龙江东部山地"
    ],
    "morphology": {
      "summary": "体大而壮，毛色棕黄，全身具黑色横纹；前额『王』字纹明显。",
      "key_features": [
        "黑色横纹",
        "前额『王』字斑纹",
        "体型为现存最大猫科"
      ]
    },
    "ecology": {
      "habitat": "温带针阔混交林",
      "diet": "有蹄类（狍、鹿、野猪）",
      "behavior": "独居，夜行，领地性强"
    },
    "facts": [
      "冬季毛被增厚御寒",
      "条纹如同指纹，个体间不重复"
    ],
    "topics": [
      "chinaEndemic",
      "endangered"
    ],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "东北虎形态（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/animal/animal-mammal-panthera-tigris-altaica.png",
        "hotspots": [
          {
            "x": 0.5,
            "y": 0.45,
            "label": "黑色横纹",
            "desc": "全身黑色横纹，个体间图案不重复，可用于识别。"
          }
        ]
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "animal-mammal-rhinopithecus-roxellana",
    "domain": "animal",
    "domainLabel": "动物界",
    "taxon": {
      "kingdom": "动物界",
      "phylum": "脊索动物门",
      "class": "哺乳纲",
      "order": "灵长目",
      "family": "猴科",
      "genus": "仰鼻猴属",
      "species": "Rhinopithecus roxellana"
    },
    "names": {
      "zh": "川金丝猴",
      "en": "Golden Snub-nosed Monkey",
      "common": []
    },
    "conservation": {
      "iucn": "濒危 (EN)",
      "cites": "—",
      "cn": "国家一级保护野生动物"
    },
    "distribution": [
      "中国·四川",
      "中国·陕西",
      "中国·湖北·甘肃"
    ],
    "morphology": {
      "summary": "体被金黄色长毛，面部呈淡蓝色，鼻孔上仰；尾长。",
      "key_features": [
        "金黄色被毛",
        "淡蓝色面部",
        "上仰鼻孔"
      ]
    },
    "ecology": {
      "habitat": "亚高山针叶林",
      "diet": "树叶、果实、苔藓",
      "behavior": "群居，树栖"
    },
    "facts": [
      "适应高寒，冬季集群御寒",
      "仰鼻利于减少冷空气刺激"
    ],
    "topics": [
      "chinaEndemic",
      "endangered"
    ],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "川金丝猴（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/animal/animal-mammal-rhinopithecus-roxellana.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "animal-bird-nipponia-nippon",
    "domain": "animal",
    "domainLabel": "动物界",
    "taxon": {
      "kingdom": "动物界",
      "phylum": "脊索动物门",
      "class": "鸟纲",
      "order": "鹈形目",
      "family": "鹮科",
      "genus": "朱鹮属",
      "species": "Nipponia nippon"
    },
    "names": {
      "zh": "朱鹮",
      "en": "Crested Ibis",
      "common": []
    },
    "conservation": {
      "iucn": "濒危 (EN)",
      "cites": "—",
      "cn": "国家一级保护野生动物"
    },
    "distribution": [
      "中国·陕西·汉中",
      "历史广布东亚"
    ],
    "morphology": {
      "summary": "体羽白色，繁殖期头颈部呈铅灰色并具红色裸露皮肤；喙黑而长向下弯。",
      "key_features": [
        "白色体羽",
        "头颈部朱红色",
        "长而下弯的喙"
      ]
    },
    "ecology": {
      "habitat": "湿地、稻田、疏林",
      "diet": "小鱼、蛙、昆虫",
      "behavior": "筑巢于高树，晨昏觅食"
    },
    "facts": [
      "曾濒临灭绝，经人工繁育种群恢复",
      "名字源于头部繁殖期的朱红色"
    ],
    "topics": [
      "chinaEndemic",
      "endangered"
    ],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "朱鹮形态（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/animal/animal-bird-nipponia-nippon.png",
        "hotspots": [
          {
            "x": 0.5,
            "y": 0.33,
            "label": "朱红色头冠",
            "desc": "繁殖期头部与颈部皮肤呈朱红色，是得名由来。"
          }
        ]
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "animal-mammal-balaenoptera-musculus",
    "domain": "animal",
    "domainLabel": "动物界",
    "taxon": {
      "kingdom": "动物界",
      "phylum": "脊索动物门",
      "class": "哺乳纲",
      "order": "鲸偶蹄目",
      "family": "须鲸科",
      "genus": "须鲸属",
      "species": "Balaenoptera musculus"
    },
    "names": {
      "zh": "蓝鲸",
      "en": "Blue Whale",
      "common": []
    },
    "conservation": {
      "iucn": "濒危 (EN)",
      "cites": "—",
      "cn": "国家一级保护野生动物"
    },
    "distribution": [
      "全球大洋",
      "北大西洋、北太平洋、南大洋"
    ],
    "morphology": {
      "summary": "地球现存最大动物，流线型躯体呈蓝灰色带浅色斑；具鲸须板滤食。",
      "key_features": [
        "流线型巨大躯体",
        "蓝灰体色带斑",
        "鲸须滤食"
      ]
    },
    "ecology": {
      "habitat": "开阔大洋",
      "diet": "小型甲壳类（磷虾）",
      "behavior": "长距离洄游，深潜"
    },
    "facts": [
      "体长可达约 30 m，重逾 150 t",
      "历史捕鲸致种群锐减"
    ],
    "topics": [
      "endangered"
    ],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "蓝鲸形态（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/animal/animal-mammal-balaenoptera-musculus.png",
        "hotspots": [
          {
            "x": 0.5,
            "y": 0.5,
            "label": "流线型躯体",
            "desc": "体型巨大而流线，是地球上已知最大动物。"
          }
        ]
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "animal-insect-apis-mellifera",
    "domain": "animal",
    "domainLabel": "动物界",
    "taxon": {
      "kingdom": "动物界",
      "phylum": "节肢动物门",
      "class": "昆虫纲",
      "order": "膜翅目",
      "family": "蜜蜂科",
      "genus": "蜜蜂属",
      "species": "Apis mellifera"
    },
    "names": {
      "zh": "西方蜜蜂",
      "en": "Western Honey Bee",
      "common": []
    },
    "conservation": {
      "iucn": "无危 (LC)",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "全球（驯化引种）",
      "原产欧亚非"
    ],
    "morphology": {
      "summary": "体被黄褐色与黑色相间的斑纹；具膜质翅两对，后足为采粉足。",
      "key_features": [
        "黄黑相间斑纹",
        "膜质翅",
        "社会性采蜜"
      ]
    },
    "ecology": {
      "habitat": "蜂巢（人工/野生）",
      "diet": "花蜜、花粉",
      "behavior": "真社会性，分工明确"
    },
    "facts": [
      "授粉对农业至关重要",
      "以『舞蹈』传递蜜源方位信息"
    ],
    "topics": [
      "season"
    ],
    "season": "spring",
    "images": [
      {
        "type": "overview",
        "caption": "西方蜜蜂（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/animal/animal-insect-apis-mellifera.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "animal-mammal-panthera-leo",
    "domain": "animal",
    "domainLabel": "动物界",
    "taxon": {
      "kingdom": "动物界",
      "phylum": "脊索动物门",
      "class": "哺乳纲",
      "order": "食肉目",
      "family": "猫科",
      "genus": "豹属",
      "species": "Panthera leo"
    },
    "names": {
      "zh": "非洲狮",
      "en": "Lion",
      "common": []
    },
    "conservation": {
      "iucn": "易危 (VU)",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "非洲撒哈拉以南草原",
      "亚洲吉尔森林残存"
    ],
    "morphology": {
      "summary": "雌雄两态显著，雄狮具鬃毛；群居性大型猫科动物。",
      "key_features": [
        "雄狮具鬃毛",
        "群居（狮群）",
        "黄褐色短毛"
      ]
    },
    "ecology": {
      "habitat": "热带草原",
      "diet": "有蹄类（斑马、角马等）",
      "behavior": "群居，雌狮主猎"
    },
    "facts": [
      "雌狮承担主要狩猎",
      "吼声可传 8 km"
    ],
    "topics": [
      "endangered"
    ],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "非洲狮（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/animal/animal-mammal-panthera-leo.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "animal-mammal-panthera-uncia",
    "domain": "animal",
    "domainLabel": "动物界",
    "taxon": {
      "kingdom": "动物界",
      "phylum": "脊索动物门",
      "class": "哺乳纲",
      "order": "食肉目",
      "family": "猫科",
      "genus": "豹属",
      "species": "Panthera uncia"
    },
    "names": {
      "zh": "雪豹",
      "en": "Snow Leopard",
      "common": []
    },
    "conservation": {
      "iucn": "易危 (VU)",
      "cites": "—",
      "cn": "国家一级保护野生动物"
    },
    "distribution": [
      "中亚高山",
      "中国·青藏高原及周边"
    ],
    "morphology": {
      "summary": "灰白毛皮具深色斑点，尾粗长；适应高寒裸岩环境。",
      "key_features": [
        "灰白底深色斑点",
        "粗长尾平衡",
        "大脚掌似雪鞋"
      ]
    },
    "ecology": {
      "habitat": "高山裸岩与草甸",
      "diet": "岩羊、北山羊等",
      "behavior": "独居，晨昏活动"
    },
    "facts": [
      "尾毛厚，休息时盖住口鼻保暖",
      "常被称为『雪山之王』"
    ],
    "topics": [
      "chinaEndemic",
      "endangered"
    ],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "雪豹（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/animal/animal-mammal-panthera-uncia.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "animal-mammal-acinonyx-jubatus",
    "domain": "animal",
    "domainLabel": "动物界",
    "taxon": {
      "kingdom": "动物界",
      "phylum": "脊索动物门",
      "class": "哺乳纲",
      "order": "食肉目",
      "family": "猫科",
      "genus": "猎豹属",
      "species": "Acinonyx jubatus"
    },
    "names": {
      "zh": "猎豹",
      "en": "Cheetah",
      "common": []
    },
    "conservation": {
      "iucn": "易危 (VU)",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "非洲东部、南部",
      "伊朗极少量"
    ],
    "morphology": {
      "summary": "陆地上最快动物，躯干纤细，泪沟明显，爪不能缩回。",
      "key_features": [
        "泪沟纹",
        "不能缩回的爪",
        "流线型躯干"
      ]
    },
    "ecology": {
      "habitat": "开阔稀树草原",
      "diet": "小型羚羊",
      "behavior": "独居或小群，昼行"
    },
    "facts": [
      "冲刺时速可达约 110 km",
      "转弯时需甩尾保持平衡"
    ],
    "topics": [
      "endangered"
    ],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "猎豹（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/animal/animal-mammal-acinonyx-jubatus.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "animal-mammal-loxodonta-africana",
    "domain": "animal",
    "domainLabel": "动物界",
    "taxon": {
      "kingdom": "动物界",
      "phylum": "脊索动物门",
      "class": "哺乳纲",
      "order": "长鼻目",
      "family": "象科",
      "genus": "非洲象属",
      "species": "Loxodonta africana"
    },
    "names": {
      "zh": "非洲草原象",
      "en": "African Bush Elephant",
      "common": []
    },
    "conservation": {
      "iucn": "濒危 (EN)",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "非洲撒哈拉以南"
    ],
    "morphology": {
      "summary": "现存最大陆生动物，耳大，鼻与上唇愈合为长鼻，雌雄均具象牙。",
      "key_features": [
        "大而散的耳朵",
        "可抓握的长鼻",
        "弯曲象牙"
      ]
    },
    "ecology": {
      "habitat": "稀树草原、森林边缘",
      "diet": "草、树叶、果实",
      "behavior": "母系群居，长距离迁徙"
    },
    "facts": [
      "象群由母象统领",
      "可通过低频声波远距离沟通"
    ],
    "topics": [
      "endangered"
    ],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "非洲草原象（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/animal/animal-mammal-loxodonta-africana.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "animal-mammal-elephas-maximus",
    "domain": "animal",
    "domainLabel": "动物界",
    "taxon": {
      "kingdom": "动物界",
      "phylum": "脊索动物门",
      "class": "哺乳纲",
      "order": "长鼻目",
      "family": "象科",
      "genus": "亚洲象属",
      "species": "Elephas maximus"
    },
    "names": {
      "zh": "亚洲象",
      "en": "Asian Elephant",
      "common": []
    },
    "conservation": {
      "iucn": "濒危 (EN)",
      "cites": "—",
      "cn": "国家一级保护野生动物"
    },
    "distribution": [
      "南亚、东南亚",
      "中国·云南南部"
    ],
    "morphology": {
      "summary": "体型较非洲象小，耳小，前额有两隆起，雌性多无象牙。",
      "key_features": [
        "小耳朵",
        "前额隆起",
        "雄性具象牙"
      ]
    },
    "ecology": {
      "habitat": "热带森林、季雨林",
      "diet": "草、竹叶、芭蕉等",
      "behavior": "母系群居"
    },
    "facts": [
      "亚洲象能发出人类听不到的次声波",
      "泥浴可防晒防虫"
    ],
    "topics": [
      "chinaEndemic",
      "endangered"
    ],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "亚洲象（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/animal/animal-mammal-elephas-maximus.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "animal-mammal-giraffa-camelopardalis",
    "domain": "animal",
    "domainLabel": "动物界",
    "taxon": {
      "kingdom": "动物界",
      "phylum": "脊索动物门",
      "class": "哺乳纲",
      "order": "偶蹄目",
      "family": "长颈鹿科",
      "genus": "长颈鹿属",
      "species": "Giraffa camelopardalis"
    },
    "names": {
      "zh": "长颈鹿",
      "en": "Giraffe",
      "common": []
    },
    "conservation": {
      "iucn": "易危 (VU)",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "非洲稀树草原"
    ],
    "morphology": {
      "summary": "现存最高陆生动物，颈与四肢极长，体表具不规则网纹状斑。",
      "key_features": [
        "极长颈与四肢",
        "网纹状斑",
        "长舌可达 45 cm"
      ]
    },
    "ecology": {
      "habitat": "稀树草原",
      "diet": "金合欢等高处树叶",
      "behavior": "小群活动"
    },
    "facts": [
      "心脏强大以把血液泵上脑部",
      "幼仔站立出生"
    ],
    "topics": [
      "endangered"
    ],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "长颈鹿（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/animal/animal-mammal-giraffa-camelopardalis.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "animal-mammal-equus-quagga",
    "domain": "animal",
    "domainLabel": "动物界",
    "taxon": {
      "kingdom": "动物界",
      "phylum": "脊索动物门",
      "class": "哺乳纲",
      "order": "奇蹄目",
      "family": "马科",
      "genus": "马属",
      "species": "Equus quagga"
    },
    "names": {
      "zh": "平原斑马",
      "en": "Plains Zebra",
      "common": []
    },
    "conservation": {
      "iucn": "近危 (NT)",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "非洲东部与南部草原"
    ],
    "morphology": {
      "summary": "体黑白色条纹相间，条纹延伸至腹部；群居有蹄类。",
      "key_features": [
        "黑白条纹",
        "群居",
        "善奔跑"
      ]
    },
    "ecology": {
      "habitat": "草原",
      "diet": "禾草",
      "behavior": "群居，与角马混群迁徙"
    },
    "facts": [
      "条纹可能干扰蝇类着陆",
      "每匹斑马条纹独一无二"
    ],
    "topics": [],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "平原斑马（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/animal/animal-mammal-equus-quagga.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "animal-mammal-diceros-bicornis",
    "domain": "animal",
    "domainLabel": "动物界",
    "taxon": {
      "kingdom": "动物界",
      "phylum": "脊索动物门",
      "class": "哺乳纲",
      "order": "奇蹄目",
      "family": "犀科",
      "genus": "黑犀属",
      "species": "Diceros bicornis"
    },
    "names": {
      "zh": "黑犀牛",
      "en": "Black Rhinoceros",
      "common": []
    },
    "conservation": {
      "iucn": "极危 (CR)",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "非洲东部与南部"
    ],
    "morphology": {
      "summary": "体型粗壮，皮厚，上唇具钩状突起；具两只角。",
      "key_features": [
        "钩状上唇",
        "双角",
        "厚皮"
      ]
    },
    "ecology": {
      "habitat": "灌丛、稀树草原",
      "diet": "枝叶、嫩芽",
      "behavior": "独居或母子群"
    },
    "facts": [
      "视力差但听觉嗅觉敏锐",
      "是受盗猎威胁最严重的犀牛之一"
    ],
    "topics": [
      "endangered"
    ],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "黑犀牛（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/animal/animal-mammal-diceros-bicornis.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "animal-mammal-ursus-maritimus",
    "domain": "animal",
    "domainLabel": "动物界",
    "taxon": {
      "kingdom": "动物界",
      "phylum": "脊索动物门",
      "class": "哺乳纲",
      "order": "食肉目",
      "family": "熊科",
      "genus": "熊属",
      "species": "Ursus maritimus"
    },
    "names": {
      "zh": "北极熊",
      "en": "Polar Bear",
      "common": []
    },
    "conservation": {
      "iucn": "易危 (VU)",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "北极圈海冰区"
    ],
    "morphology": {
      "summary": "最大陆生食肉动物之一，毛色乳白，皮下脂肪厚，善游泳。",
      "key_features": [
        "白色厚毛皮",
        "厚脂肪层",
        "大脚掌善游泳"
      ]
    },
    "ecology": {
      "habitat": "海冰、海岸",
      "diet": "环斑海豹等",
      "behavior": "独居，冬春季交配"
    },
    "facts": [
      "毛皮实际为透明中空毛",
      "依赖海冰捕食，受气候变化威胁"
    ],
    "topics": [
      "endangered"
    ],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "北极熊（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/animal/animal-mammal-ursus-maritimus.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "animal-mammal-ursus-arctos",
    "domain": "animal",
    "domainLabel": "动物界",
    "taxon": {
      "kingdom": "动物界",
      "phylum": "脊索动物门",
      "class": "哺乳纲",
      "order": "食肉目",
      "family": "熊科",
      "genus": "熊属",
      "species": "Ursus arctos"
    },
    "names": {
      "zh": "棕熊",
      "en": "Brown Bear",
      "common": []
    },
    "conservation": {
      "iucn": "无危 (LC)",
      "cites": "—",
      "cn": "国家二级保护野生动物"
    },
    "distribution": [
      "欧亚大陆、北美",
      "中国·西北、东北山地"
    ],
    "morphology": {
      "summary": "体型粗壮，毛色从浅黄到深褐不等，肩背隆起。",
      "key_features": [
        "肩背隆起",
        "长爪",
        " omnivorous 适应强"
      ]
    },
    "ecology": {
      "habitat": "森林、山地",
      "diet": "植物、浆果、鱼类、小型哺乳动物",
      "behavior": "独居，冬眠"
    },
    "facts": [
      "冬眠前大量进食储存脂肪",
      "母熊育幼期极具攻击性"
    ],
    "topics": [],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "棕熊（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/animal/animal-mammal-ursus-arctos.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "animal-mammal-canis-lupus",
    "domain": "animal",
    "domainLabel": "动物界",
    "taxon": {
      "kingdom": "动物界",
      "phylum": "脊索动物门",
      "class": "哺乳纲",
      "order": "食肉目",
      "family": "犬科",
      "genus": "犬属",
      "species": "Canis lupus"
    },
    "names": {
      "zh": "灰狼",
      "en": "Gray Wolf",
      "common": []
    },
    "conservation": {
      "iucn": "无危 (LC)",
      "cites": "—",
      "cn": "国家二级保护野生动物"
    },
    "distribution": [
      "北半球广泛分布",
      "中国·东北、西北、青藏高原"
    ],
    "morphology": {
      "summary": "体型中等偏大，毛色灰褐，耳尖直立，尾下垂。",
      "key_features": [
        "灰褐色毛",
        "直立三角耳",
        "群居嚎叫"
      ]
    },
    "ecology": {
      "habitat": "森林、草原、苔原",
      "diet": "有蹄类、啮齿类",
      "behavior": "群居，家族领地"
    },
    "facts": [
      "狼群由优势配偶领导",
      "嚎叫用于宣示领地"
    ],
    "topics": [],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "灰狼（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/animal/animal-mammal-canis-lupus.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "animal-mammal-vulpes-vulpes",
    "domain": "animal",
    "domainLabel": "动物界",
    "taxon": {
      "kingdom": "动物界",
      "phylum": "脊索动物门",
      "class": "哺乳纲",
      "order": "食肉目",
      "family": "犬科",
      "genus": "狐属",
      "species": "Vulpes vulpes"
    },
    "names": {
      "zh": "赤狐",
      "en": "Red Fox",
      "common": []
    },
    "conservation": {
      "iucn": "无危 (LC)",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "北半球广泛分布",
      "中国多地"
    ],
    "morphology": {
      "summary": "体型 slender，毛色红棕，尾长而蓬松，尾尖白色。",
      "key_features": [
        "红棕毛色",
        "蓬松长尾",
        "尖耳"
      ]
    },
    "ecology": {
      "habitat": "森林、农田、城市边缘",
      "diet": "小型哺乳类、鸟类、果实",
      "behavior": "独居夜行"
    },
    "facts": [
      "听觉敏锐，可定位雪下猎物",
      "适应性强，已入侵澳洲造成生态问题"
    ],
    "topics": [],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "赤狐（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/animal/animal-mammal-vulpes-vulpes.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "animal-mammal-macropus-rufus",
    "domain": "animal",
    "domainLabel": "动物界",
    "taxon": {
      "kingdom": "动物界",
      "phylum": "脊索动物门",
      "class": "哺乳纲",
      "order": "双门齿目",
      "family": "袋鼠科",
      "genus": "大袋鼠属",
      "species": "Macropus rufus"
    },
    "names": {
      "zh": "红大袋鼠",
      "en": "Red Kangaroo",
      "common": []
    },
    "conservation": {
      "iucn": "无危 (LC)",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "澳大利亚内陆干旱区"
    ],
    "morphology": {
      "summary": "体型最大的袋鼠，雄性红棕色，雌性蓝灰色；后肢极长，尾粗。",
      "key_features": [
        "强壮后肢跳跃",
        "育儿袋育幼",
        "雄性红棕毛色"
      ]
    },
    "ecology": {
      "habitat": "干旱草原、荒漠",
      "diet": "草、嫩芽",
      "behavior": "夜行群居"
    },
    "facts": [
      "跳跃时速可达 65 km",
      "幼崽在育儿袋中发育约 8 个月"
    ],
    "topics": [],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "红大袋鼠（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/animal/animal-mammal-macropus-rufus.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "animal-mammal-phascolarctos-cinereus",
    "domain": "animal",
    "domainLabel": "动物界",
    "taxon": {
      "kingdom": "动物界",
      "phylum": "脊索动物门",
      "class": "哺乳纲",
      "order": "双门齿目",
      "family": "树袋熊科",
      "genus": "树袋熊属",
      "species": "Phascolarctos cinereus"
    },
    "names": {
      "zh": "考拉",
      "en": "Koala",
      "common": []
    },
    "conservation": {
      "iucn": "易危 (VU)",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "澳大利亚东部桉树林"
    ],
    "morphology": {
      "summary": "树栖有袋类，圆耳、无尾（短尾），爪锐利，主要食桉树叶。",
      "key_features": [
        "圆耳无尾",
        "利爪攀树",
        "以桉树叶为食"
      ]
    },
    "ecology": {
      "habitat": "桉树林",
      "diet": "桉树叶",
      "behavior": "独居树栖，日睡 18 小时"
    },
    "facts": [
      "桉树叶低热量故活动少",
      "幼崽在育儿袋中吃母兽粪便启蒙菌群"
    ],
    "topics": [
      "endangered"
    ],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "考拉（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/animal/animal-mammal-phascolarctos-cinereus.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "animal-mammal-pan-troglodytes",
    "domain": "animal",
    "domainLabel": "动物界",
    "taxon": {
      "kingdom": "动物界",
      "phylum": "脊索动物门",
      "class": "哺乳纲",
      "order": "灵长目",
      "family": "人科",
      "genus": "黑猩猩属",
      "species": "Pan troglodytes"
    },
    "names": {
      "zh": "黑猩猩",
      "en": "Chimpanzee",
      "common": []
    },
    "conservation": {
      "iucn": "濒危 (EN)",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "非洲中部与西部热带森林"
    ],
    "morphology": {
      "summary": "最接近人类的现存近亲之一，黑色被毛，面部裸露，能制造工具。",
      "key_features": [
        "黑色被毛",
        "高智商与工具使用",
        "社群复杂"
      ]
    },
    "ecology": {
      "habitat": "热带雨林",
      "diet": "果实、昆虫、小型兽",
      "behavior": "社群，母系为主"
    },
    "facts": [
      "能使用树枝钓白蚁",
      "基因与人类相似度极高"
    ],
    "topics": [
      "endangered"
    ],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "黑猩猩（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/animal/animal-mammal-pan-troglodytes.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "animal-mammal-gorilla-gorilla",
    "domain": "animal",
    "domainLabel": "动物界",
    "taxon": {
      "kingdom": "动物界",
      "phylum": "脊索动物门",
      "class": "哺乳纲",
      "order": "灵长目",
      "family": "人科",
      "genus": "大猩猩属",
      "species": "Gorilla gorilla"
    },
    "names": {
      "zh": "西部大猩猩",
      "en": "Western Gorilla",
      "common": []
    },
    "conservation": {
      "iucn": "极危 (CR)",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "非洲中西部热带雨林"
    ],
    "morphology": {
      "summary": "体型最大的灵长类，雄性背毛银白色称为『银背』。",
      "key_features": [
        "银背雄性",
        "强壮上肢",
        "地面与树栖"
      ]
    },
    "ecology": {
      "habitat": "热带雨林",
      "diet": "叶、果实、竹笋",
      "behavior": "群居，银背领导"
    },
    "facts": [
      "与人类基因相似约 98%",
      "埃博拉与栖息地丧失致种群锐减"
    ],
    "topics": [
      "endangered"
    ],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "西部大猩猩（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/animal/animal-mammal-gorilla-gorilla.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "animal-mammal-pongo-abelii",
    "domain": "animal",
    "domainLabel": "动物界",
    "taxon": {
      "kingdom": "动物界",
      "phylum": "脊索动物门",
      "class": "哺乳纲",
      "order": "灵长目",
      "family": "人科",
      "genus": "猩猩属",
      "species": "Pongo abelii"
    },
    "names": {
      "zh": "苏门答腊猩猩",
      "en": "Sumatran Orangutan",
      "common": []
    },
    "conservation": {
      "iucn": "极危 (CR)",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "印度尼西亚·苏门答腊岛"
    ],
    "morphology": {
      "summary": "树栖大型猿类，红棕色长毛，双臂极长，独居为主。",
      "key_features": [
        "红棕色长毛",
        "极长双臂",
        "独居树栖"
      ]
    },
    "ecology": {
      "habitat": "热带雨林",
      "diet": "果实、树皮、昆虫",
      "behavior": "独居或母子"
    },
    "facts": [
      "世界上最珍稀的猩猩",
      "雨林砍伐与油棕种植威胁严重"
    ],
    "topics": [
      "endangered"
    ],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "苏门答腊猩猩（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/animal/animal-mammal-pongo-abelii.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "animal-bird-pavo-cristatus",
    "domain": "animal",
    "domainLabel": "动物界",
    "taxon": {
      "kingdom": "动物界",
      "phylum": "脊索动物门",
      "class": "鸟纲",
      "order": "鸡形目",
      "family": "雉科",
      "genus": "孔雀属",
      "species": "Pavo cristatus"
    },
    "names": {
      "zh": "蓝孔雀",
      "en": "Indian Peafowl",
      "common": []
    },
    "conservation": {
      "iucn": "无危 (LC)",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "印度、斯里兰卡、东南亚",
      "中国南方引种"
    ],
    "morphology": {
      "summary": "雄鸟具华丽延长尾上覆羽，眼状斑醒目；雌鸟灰褐色。",
      "key_features": [
        "雄鸟长尾屏",
        "眼状斑",
        "冠羽"
      ]
    },
    "ecology": {
      "habitat": "森林、灌丛、农田",
      "diet": "种子、昆虫、小型动物",
      "behavior": "地栖兼树栖"
    },
    "facts": [
      "雄鸟开屏求偶",
      "尾屏实际由尾上覆羽构成"
    ],
    "topics": [
      "season"
    ],
    "season": "spring",
    "images": [
      {
        "type": "overview",
        "caption": "蓝孔雀（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/animal/animal-bird-pavo-cristatus.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "animal-bird-phoenicopterus-roseus",
    "domain": "animal",
    "domainLabel": "动物界",
    "taxon": {
      "kingdom": "动物界",
      "phylum": "脊索动物门",
      "class": "鸟纲",
      "order": "红鹳目",
      "family": "红鹳科",
      "genus": "红鹳属",
      "species": "Phoenicopterus roseus"
    },
    "names": {
      "zh": "大红鹳",
      "en": "Greater Flamingo",
      "common": []
    },
    "conservation": {
      "iucn": "无危 (LC)",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "非洲、南欧、南亚、西亚湿地"
    ],
    "morphology": {
      "summary": "涉禽，体羽粉红，颈与腿极长，喙向下弯曲滤食。",
      "key_features": [
        "粉红羽色",
        "极长颈腿",
        "倒弯喙滤食"
      ]
    },
    "ecology": {
      "habitat": "咸水湖、潟湖",
      "diet": "藻类、甲壳类",
      "behavior": "大群集居"
    },
    "facts": [
      "粉红来自食物中的类胡萝卜素",
      "常单脚站立"
    ],
    "topics": [],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "大红鹳（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/animal/animal-bird-phoenicopterus-roseus.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "animal-bird-aquila-chrysaetos",
    "domain": "animal",
    "domainLabel": "动物界",
    "taxon": {
      "kingdom": "动物界",
      "phylum": "脊索动物门",
      "class": "鸟纲",
      "order": "鹰形目",
      "family": "鹰科",
      "genus": "雕属",
      "species": "Aquila chrysaetos"
    },
    "names": {
      "zh": "金雕",
      "en": "Golden Eagle",
      "common": []
    },
    "conservation": {
      "iucn": "无危 (LC)",
      "cites": "—",
      "cn": "国家一级保护野生动物"
    },
    "distribution": [
      "北半球山地",
      "中国·西部、北部、青藏高原"
    ],
    "morphology": {
      "summary": "大型猛禽，头颈金色，喙钩曲，爪锐利，翼宽而长。",
      "key_features": [
        "金色头颈",
        "钩曲喙",
        "锐利爪"
      ]
    },
    "ecology": {
      "habitat": "高山、草原、荒漠",
      "diet": "野兔、旱獭、鸟类",
      "behavior": "独居或成对，高空盘旋"
    },
    "facts": [
      "飞行时速可达 240 km",
      "常借助上升气流盘旋"
    ],
    "topics": [
      "chinaEndemic",
      "endangered"
    ],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "金雕（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/animal/animal-bird-aquila-chrysaetos.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "animal-bird-strigiformes-tyto-alba",
    "domain": "animal",
    "domainLabel": "动物界",
    "taxon": {
      "kingdom": "动物界",
      "phylum": "脊索动物门",
      "class": "鸟纲",
      "order": "鸮形目",
      "family": "草鸮科",
      "genus": "草鸮属",
      "species": "Tyto alba"
    },
    "names": {
      "zh": "仓鸮",
      "en": "Barn Owl",
      "common": []
    },
    "conservation": {
      "iucn": "无危 (LC)",
      "cites": "—",
      "cn": "国家二级保护野生动物"
    },
    "distribution": [
      "全球除极地外",
      "中国·华南、西南"
    ],
    "morphology": {
      "summary": "面盘心形，羽色浅黄褐带灰斑，无声飞行。",
      "key_features": [
        "心形面盘",
        "无声飞羽",
        "夜行"
      ]
    },
    "ecology": {
      "habitat": "农田、林地、谷仓",
      "diet": "鼠类、小型鸟类",
      "behavior": "夜行独居"
    },
    "facts": [
      "听觉极敏锐可定位地下猎物",
      "一只仓鸮一年可捕食数千只鼠"
    ],
    "topics": [],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "仓鸮（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/animal/animal-bird-strigiformes-tyto-alba.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "animal-bird-spheniscidae-adeliae",
    "domain": "animal",
    "domainLabel": "动物界",
    "taxon": {
      "kingdom": "动物界",
      "phylum": "脊索动物门",
      "class": "鸟纲",
      "order": "企鹅目",
      "family": "企鹅科",
      "genus": "阿德利企鹅属",
      "species": "Pygoscelis adeliae"
    },
    "names": {
      "zh": "阿德利企鹅",
      "en": "Adélie Penguin",
      "common": []
    },
    "conservation": {
      "iucn": "近危 (NT)",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "南极大陆及岛屿海岸"
    ],
    "morphology": {
      "summary": "中小型企鹅，头背黑，腹白，眼周白色。",
      "key_features": [
        "黑白配色",
        "眼周白环",
        "南极分布"
      ]
    },
    "ecology": {
      "habitat": "南极海岸、海冰",
      "diet": "磷虾、鱼类",
      "behavior": "群居繁殖"
    },
    "facts": [
      "用卵石筑巢，卵石常被盗",
      "游泳时速可达 75 km"
    ],
    "topics": [],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "阿德利企鹅（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/animal/animal-bird-spheniscidae-adeliae.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "animal-bird-cygnus-olor",
    "domain": "animal",
    "domainLabel": "动物界",
    "taxon": {
      "kingdom": "动物界",
      "phylum": "脊索动物门",
      "class": "鸟纲",
      "order": "雁形目",
      "family": "鸭科",
      "genus": "天鹅属",
      "species": "Cygnus olor"
    },
    "names": {
      "zh": "疣鼻天鹅",
      "en": "Mute Swan",
      "common": []
    },
    "conservation": {
      "iucn": "无危 (LC)",
      "cites": "—",
      "cn": "国家二级保护野生动物"
    },
    "distribution": [
      "欧洲、中亚",
      "中国·新疆、华北等地"
    ],
    "morphology": {
      "summary": "大型游禽，纯白羽，喙橙红具黑色疣状突起，颈呈 S 形。",
      "key_features": [
        "纯白羽",
        "橙红喙带黑疣",
        "优雅长颈"
      ]
    },
    "ecology": {
      "habitat": "湖泊、河流、沼泽",
      "diet": "水生植物、藻类",
      "behavior": "成对或小群"
    },
    "facts": [
      "雄鸟护巢时极具攻击性",
      "颈部可摆出独特心形"
    ],
    "topics": [],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "疣鼻天鹅（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/animal/animal-bird-cygnus-olor.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "animal-bird-grus-japonensis",
    "domain": "animal",
    "domainLabel": "动物界",
    "taxon": {
      "kingdom": "动物界",
      "phylum": "脊索动物门",
      "class": "鸟纲",
      "order": "鹤形目",
      "family": "鹤科",
      "genus": "鹤属",
      "species": "Grus japonensis"
    },
    "names": {
      "zh": "丹顶鹤",
      "en": "Red-crowned Crane",
      "common": []
    },
    "conservation": {
      "iucn": "濒危 (EN)",
      "cites": "—",
      "cn": "国家一级保护野生动物"
    },
    "distribution": [
      "中国东北、日本北海道、朝鲜半岛"
    ],
    "morphology": {
      "summary": "大型涉禽，通体白，次级飞羽黑，头顶皮肤裸露呈朱红色。",
      "key_features": [
        "头顶朱红",
        "黑次级飞羽",
        "优雅站姿"
      ]
    },
    "ecology": {
      "habitat": "湿地、沼泽",
      "diet": "鱼、虾、昆虫、植物",
      "behavior": "成对或家族群"
    },
    "facts": [
      "长寿与忠贞象征",
      "舞姿复杂用于求偶"
    ],
    "topics": [
      "chinaEndemic",
      "endangered"
    ],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "丹顶鹤（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/animal/animal-bird-grus-japonensis.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "animal-bird-psittacidae-ara-macao",
    "domain": "animal",
    "domainLabel": "动物界",
    "taxon": {
      "kingdom": "动物界",
      "phylum": "脊索动物门",
      "class": "鸟纲",
      "order": "鹦形目",
      "family": "鹦鹉科",
      "genus": "金刚鹦鹉属",
      "species": "Ara macao"
    },
    "names": {
      "zh": "绯红金刚鹦鹉",
      "en": "Scarlet Macaw",
      "common": []
    },
    "conservation": {
      "iucn": "无危 (LC)",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "中美与南美热带雨林"
    ],
    "morphology": {
      "summary": "色彩艳丽的大型鹦鹉，红、黄、蓝羽相间，尾长。",
      "key_features": [
        "红黄斑蓝羽",
        "强劲钩喙",
        "长尾"
      ]
    },
    "ecology": {
      "habitat": "热带雨林",
      "diet": "果实、坚果、种子",
      "behavior": "成对或小群，长寿"
    },
    "facts": [
      "可活 50 年以上",
      "用喙攀援与破壳硬坚果"
    ],
    "topics": [],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "绯红金刚鹦鹉（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/animal/animal-bird-psittacidae-ara-macao.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "animal-bird-struthio-camelus",
    "domain": "animal",
    "domainLabel": "动物界",
    "taxon": {
      "kingdom": "动物界",
      "phylum": "脊索动物门",
      "class": "鸟纲",
      "order": "鸵形目",
      "family": "鸵鸟科",
      "genus": "鸵鸟属",
      "species": "Struthio camelus"
    },
    "names": {
      "zh": "非洲鸵鸟",
      "en": "Common Ostrich",
      "common": []
    },
    "conservation": {
      "iucn": "无危 (LC)",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "非洲稀树草原与荒漠"
    ],
    "morphology": {
      "summary": "现存最大鸟类，不能飞，双腿强壮善奔跑，颈长。",
      "key_features": [
        "最大鸟类",
        "不能飞行",
        "强壮长腿"
      ]
    },
    "ecology": {
      "habitat": "干旱草原、荒漠",
      "diet": "草、种子、昆虫",
      "behavior": "群居"
    },
    "facts": [
      "奔跑时速可达 70 km",
      "每只眼几乎与脑一样大"
    ],
    "topics": [],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "非洲鸵鸟（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/animal/animal-bird-struthio-camelus.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "animal-reptile-crocodylus-niloticus",
    "domain": "animal",
    "domainLabel": "动物界",
    "taxon": {
      "kingdom": "动物界",
      "phylum": "脊索动物门",
      "class": "爬行纲",
      "order": "鳄目",
      "family": "鳄科",
      "genus": "鳄属",
      "species": "Crocodylus niloticus"
    },
    "names": {
      "zh": "尼罗鳄",
      "en": "Nile Crocodile",
      "common": []
    },
    "conservation": {
      "iucn": "无危 (LC)",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "非洲淡水河流湖泊"
    ],
    "morphology": {
      "summary": "非洲最大淡水鳄，体长可达 5 m，吻部略呈 V 形。",
      "key_features": [
        "V 形吻",
        "装甲鳞片",
        "强大利齿"
      ]
    },
    "ecology": {
      "habitat": "河流、湖泊、湿地",
      "diet": "鱼类、哺乳动物、鸟类",
      "behavior": "伏击型捕食者"
    },
    "facts": [
      "咬合力极强",
      "可在水下憋气数小时"
    ],
    "topics": [],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "尼罗鳄（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/animal/animal-reptile-crocodylus-niloticus.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "animal-reptile-chelonia-mydas",
    "domain": "animal",
    "domainLabel": "动物界",
    "taxon": {
      "kingdom": "动物界",
      "phylum": "脊索动物门",
      "class": "爬行纲",
      "order": "龟鳖目",
      "family": "海龟科",
      "genus": "海龟属",
      "species": "Chelonia mydas"
    },
    "names": {
      "zh": "绿海龟",
      "en": "Green Sea Turtle",
      "common": []
    },
    "conservation": {
      "iucn": "濒危 (EN)",
      "cites": "—",
      "cn": "国家一级保护野生动物"
    },
    "distribution": [
      "热带亚热带海域",
      "中国·南海"
    ],
    "morphology": {
      "summary": "大型海龟，成体背甲心形，主食海草，脂肪呈绿色。",
      "key_features": [
        "心形背甲",
        "以海草为食",
        "四肢特化为鳍"
      ]
    },
    "ecology": {
      "habitat": "浅海海草床、珊瑚礁",
      "diet": "海草、藻类",
      "behavior": "长距离洄游"
    },
    "facts": [
      "洄游数千公里返回出生地产卵",
      "幼龟成活率极低"
    ],
    "topics": [
      "endangered"
    ],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "绿海龟（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/animal/animal-reptile-chelonia-mydas.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "animal-reptile-python-bivittatus",
    "domain": "animal",
    "domainLabel": "动物界",
    "taxon": {
      "kingdom": "动物界",
      "phylum": "脊索动物门",
      "class": "爬行纲",
      "order": "有鳞目",
      "family": "蟒科",
      "genus": "蟒属",
      "species": "Python bivittatus"
    },
    "names": {
      "zh": "缅甸蟒",
      "en": "Burmese Python",
      "common": []
    },
    "conservation": {
      "iucn": "易危 (VU)",
      "cites": "—",
      "cn": "国家二级保护野生动物"
    },
    "distribution": [
      "东南亚",
      "中国·华南、云南"
    ],
    "morphology": {
      "summary": "世界最大蛇类之一，体色棕褐具斑纹，无毒，绞杀猎物。",
      "key_features": [
        "体型巨大",
        "无毒绞杀",
        "热窝感温"
      ]
    },
    "ecology": {
      "habitat": "森林、草地、湿地",
      "diet": "哺乳动物、鸟类",
      "behavior": "夜行独居"
    },
    "facts": [
      "可长达 5–6 m",
      "入侵佛罗里达造成生态问题"
    ],
    "topics": [],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "缅甸蟒（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/animal/animal-reptile-python-bivittatus.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "animal-reptile-varanus-komodoensis",
    "domain": "animal",
    "domainLabel": "动物界",
    "taxon": {
      "kingdom": "动物界",
      "phylum": "脊索动物门",
      "class": "爬行纲",
      "order": "有鳞目",
      "family": "巨蜥科",
      "genus": "巨蜥属",
      "species": "Varanus komodoensis"
    },
    "names": {
      "zh": "科莫多巨蜥",
      "en": "Komodo Dragon",
      "common": []
    },
    "conservation": {
      "iucn": "濒危 (EN)",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "印度尼西亚·科莫多岛等"
    ],
    "morphology": {
      "summary": "现存最大蜥蜴，体长可达 3 m，唾液含多种细菌。",
      "key_features": [
        "最大蜥蜴",
        "强锯齿状牙齿",
        "毒液与细菌"
      ]
    },
    "ecology": {
      "habitat": "热带稀树草原、森林",
      "diet": "鹿、猪、腐肉",
      "behavior": "独居，嗅觉敏锐"
    },
    "facts": [
      "幼体常栖树避成体",
      "奔跑短时可达 20 km/h"
    ],
    "topics": [
      "endangered"
    ],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "科莫多巨蜥（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/animal/animal-reptile-varanus-komodoensis.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "animal-amphibian-ambystoma-mexicanum",
    "domain": "animal",
    "domainLabel": "动物界",
    "taxon": {
      "kingdom": "动物界",
      "phylum": "脊索动物门",
      "class": "两栖纲",
      "order": "有尾目",
      "family": "钝口螈科",
      "genus": "钝口螈属",
      "species": "Ambystoma mexicanum"
    },
    "names": {
      "zh": "美西螈",
      "en": "Axolotl",
      "common": []
    },
    "conservation": {
      "iucn": "极危 (CR)",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "墨西哥·霍奇米尔科湖"
    ],
    "morphology": {
      "summary": "幼体性熟的两栖动物，具外鳃、鳍状尾，再生能力极强。",
      "key_features": [
        "外鳃",
        "幼态持续",
        "极强再生"
      ]
    },
    "ecology": {
      "habitat": "淡水湖泊、运河",
      "diet": "小鱼、昆虫、蠕虫",
      "behavior": "独居夜行"
    },
    "facts": [
      "可再生四肢、心脏与部分大脑",
      "野生种群因污染极危"
    ],
    "topics": [
      "endangered"
    ],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "美西螈（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/animal/animal-amphibian-ambystoma-mexicanum.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "animal-fish-carcharodon-carcharias",
    "domain": "animal",
    "domainLabel": "动物界",
    "taxon": {
      "kingdom": "动物界",
      "phylum": "脊索动物门",
      "class": "软骨鱼纲",
      "order": "鼠鲨目",
      "family": "鼠鲨科",
      "genus": "噬人鲨属",
      "species": "Carcharodon carcharias"
    },
    "names": {
      "zh": "大白鲨",
      "en": "Great White Shark",
      "common": []
    },
    "conservation": {
      "iucn": "易危 (VU)",
      "cites": "—",
      "cn": "国家二级保护野生动物"
    },
    "distribution": [
      "全球温带沿海"
    ],
    "morphology": {
      "summary": "大型掠食性鲨鱼，体呈纺锤形，背鳍大，牙齿三角形锯齿状。",
      "key_features": [
        "三角形锯齿齿",
        "大背鳍",
        "体型可达 6 m"
      ]
    },
    "ecology": {
      "habitat": "近海、外海",
      "diet": "海豹、鱼类、鲸尸",
      "behavior": "独居巡游"
    },
    "facts": [
      "通过试探性咬击判断猎物",
      "体温高于周围海水"
    ],
    "topics": [
      "endangered"
    ],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "大白鲨（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/animal/animal-fish-carcharodon-carcharias.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "animal-fish-salmo-salar",
    "domain": "animal",
    "domainLabel": "动物界",
    "taxon": {
      "kingdom": "动物界",
      "phylum": "脊索动物门",
      "class": "辐鳍鱼纲",
      "order": "鲑形目",
      "family": "鲑科",
      "genus": "鲑属",
      "species": "Salmo salar"
    },
    "names": {
      "zh": "大西洋鲑",
      "en": "Atlantic Salmon",
      "common": []
    },
    "conservation": {
      "iucn": "近危 (NT)",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "北大西洋及河流"
    ],
    "morphology": {
      "summary": "著名的溯河洄游鱼类，银蓝色成鱼，繁殖期体色变深。",
      "key_features": [
        "溯河洄游",
        "银蓝色流线体",
        "繁殖期色变"
      ]
    },
    "ecology": {
      "habitat": "海洋、淡水河流",
      "diet": "小鱼、甲壳类",
      "behavior": "洄游"
    },
    "facts": [
      "产卵后多数死亡",
      "能跃过瀑布上溯"
    ],
    "topics": [],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "大西洋鲑（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/animal/animal-fish-salmo-salar.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "animal-fish-carassius-auratus",
    "domain": "animal",
    "domainLabel": "动物界",
    "taxon": {
      "kingdom": "动物界",
      "phylum": "脊索动物门",
      "class": "辐鳍鱼纲",
      "order": "鲤形目",
      "family": "鲤科",
      "genus": "鲫属",
      "species": "Carassius auratus"
    },
    "names": {
      "zh": "金鱼",
      "en": "Goldfish",
      "common": []
    },
    "conservation": {
      "iucn": "无危（驯化）",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "中国起源，全球观赏"
    ],
    "morphology": {
      "summary": "鲫鱼的驯化变种，体色金黄或多样，鳍形多变。",
      "key_features": [
        "金黄体色",
        "人工选育品种繁多",
        "鲤科鱼类"
      ]
    },
    "ecology": {
      "habitat": "池塘、水族箱",
      "diet": "藻类、小型无脊椎动物",
      "behavior": "群居"
    },
    "facts": [
      "由中国鲫鱼驯化而来",
      "对颜色有较好识别"
    ],
    "topics": [],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "金鱼（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/animal/animal-fish-carassius-auratus.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "animal-fish-amphiprion-ocellaris",
    "domain": "animal",
    "domainLabel": "动物界",
    "taxon": {
      "kingdom": "动物界",
      "phylum": "脊索动物门",
      "class": "辐鳍鱼纲",
      "order": "鲈形目",
      "family": "雀鲷科",
      "genus": "双锯鱼属",
      "species": "Amphiprion ocellaris"
    },
    "names": {
      "zh": "眼斑双锯鱼",
      "en": "Ocellaris Clownfish",
      "common": []
    },
    "conservation": {
      "iucn": "无危 (LC)",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "印度洋-太平洋珊瑚礁"
    ],
    "morphology": {
      "summary": "橙白相间的小型海水鱼，与海葵互利共生。",
      "key_features": [
        "橙白条纹",
        "与海葵共生",
        "雌大雄小"
      ]
    },
    "ecology": {
      "habitat": "珊瑚礁",
      "diet": "浮游动物、藻类",
      "behavior": "小群栖息海葵"
    },
    "facts": [
      "体表黏液使其免被海葵刺伤",
      "群体中最大者为雌鱼"
    ],
    "topics": [],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "眼斑双锯鱼（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/animal/animal-fish-amphiprion-ocellaris.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "animal-fish-thunnus-thynnus",
    "domain": "animal",
    "domainLabel": "动物界",
    "taxon": {
      "kingdom": "动物界",
      "phylum": "脊索动物门",
      "class": "辐鳍鱼纲",
      "order": "鲈形目",
      "family": "鲭科",
      "genus": "金枪鱼属",
      "species": "Thunnus thynnus"
    },
    "names": {
      "zh": "大西洋蓝鳍金枪鱼",
      "en": "Atlantic Bluefin Tuna",
      "common": []
    },
    "conservation": {
      "iucn": "近危 (NT)",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "大西洋、地中海"
    ],
    "morphology": {
      "summary": "大型远洋洄游鱼，纺锤形，体温调节能力强，游速极快。",
      "key_features": [
        "恒温能力",
        "极高游速",
        "深红色肉"
      ]
    },
    "ecology": {
      "habitat": "开阔大洋",
      "diet": "小鱼、头足类",
      "behavior": "集群洄游"
    },
    "facts": [
      "售价高昂致过度捕捞",
      "可持续渔业管理后种群恢复"
    ],
    "topics": [
      "endangered"
    ],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "大西洋蓝鳍金枪鱼（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/animal/animal-fish-thunnus-thynnus.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "animal-fish-hippocampus",
    "domain": "animal",
    "domainLabel": "动物界",
    "taxon": {
      "kingdom": "动物界",
      "phylum": "脊索动物门",
      "class": "辐鳍鱼纲",
      "order": "海龙目",
      "family": "海龙科",
      "genus": "海马属",
      "species": "Hippocampus spp."
    },
    "names": {
      "zh": "海马",
      "en": "Seahorse",
      "common": []
    },
    "conservation": {
      "iucn": "易危 (VU)〔多数种〕",
      "cites": "—",
      "cn": "国家二级保护野生动物"
    },
    "distribution": [
      "全球温带热带浅海"
    ],
    "morphology": {
      "summary": "头部似马，尾可卷曲抓握，雄鱼具育儿袋。",
      "key_features": [
        "马头状",
        "卷曲尾抓握",
        "雄鱼育幼"
      ]
    },
    "ecology": {
      "habitat": "海草床、珊瑚礁、红树林",
      "diet": "小型甲壳类",
      "behavior": "独居"
    },
    "facts": [
      "海马由雄鱼怀孕",
      "游泳能力弱"
    ],
    "topics": [
      "endangered"
    ],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "海马（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/animal/animal-fish-hippocampus.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "animal-insect-danaus-plexippus",
    "domain": "animal",
    "domainLabel": "动物界",
    "taxon": {
      "kingdom": "动物界",
      "phylum": "节肢动物门",
      "class": "昆虫纲",
      "order": "鳞翅目",
      "family": "蛱蝶科",
      "genus": "斑蝶属",
      "species": "Danaus plexippus"
    },
    "names": {
      "zh": "君主斑蝶",
      "en": "Monarch Butterfly",
      "common": []
    },
    "conservation": {
      "iucn": "濒危 (EN)",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "北美洲"
    ],
    "morphology": {
      "summary": "橙黑相间的大型蝴蝶，幼虫食马利筋，进行长距离迁徙。",
      "key_features": [
        "橙黑警戒色",
        "长距离迁徙",
        "幼虫食马利筋"
      ]
    },
    "ecology": {
      "habitat": "草地、花园、森林",
      "diet": "花蜜",
      "behavior": "迁徙"
    },
    "facts": [
      "迁徙距离可达数千公里",
      "马利筋毒素使其不可口"
    ],
    "topics": [
      "endangered"
    ],
    "season": "summer",
    "images": [
      {
        "type": "overview",
        "caption": "君主斑蝶（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/animal/animal-insect-danaus-plexippus.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "animal-insect-anisoptera",
    "domain": "animal",
    "domainLabel": "动物界",
    "taxon": {
      "kingdom": "动物界",
      "phylum": "节肢动物门",
      "class": "昆虫纲",
      "order": "蜻蜓目",
      "family": "差翅亚目",
      "genus": "—",
      "species": "Anisoptera"
    },
    "names": {
      "zh": "蜻蜓",
      "en": "Dragonfly",
      "common": []
    },
    "conservation": {
      "iucn": "无危 (LC)",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "全球淡水环境"
    ],
    "morphology": {
      "summary": "大型捕食性昆虫，复眼大，翅透明具翅痣，飞行敏捷。",
      "key_features": [
        "大复眼",
        "透明翅",
        "捕食性飞行"
      ]
    },
    "ecology": {
      "habitat": "湖泊、河流、湿地",
      "diet": "蚊、蝇、小型昆虫",
      "behavior": "独居"
    },
    "facts": [
      "幼虫水生，捕食蚊虫幼体",
      "复眼几乎覆盖头部"
    ],
    "topics": [],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "蜻蜓（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/animal/animal-insect-anisoptera.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "animal-insect-coccinella-septempunctata",
    "domain": "animal",
    "domainLabel": "动物界",
    "taxon": {
      "kingdom": "动物界",
      "phylum": "节肢动物门",
      "class": "昆虫纲",
      "order": "鞘翅目",
      "family": "瓢虫科",
      "genus": "瓢虫属",
      "species": "Coccinella septempunctata"
    },
    "names": {
      "zh": "七星瓢虫",
      "en": "Seven-spot Ladybug",
      "common": []
    },
    "conservation": {
      "iucn": "无危 (LC)",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "欧亚大陆",
      "中国广泛分布"
    ],
    "morphology": {
      "summary": "红色鞘翅具七个黑色斑点，半球形，捕食蚜虫。",
      "key_features": [
        "红底黑斑",
        "半球形",
        "捕食蚜虫"
      ]
    },
    "ecology": {
      "habitat": "农田、花园、林地",
      "diet": "蚜虫、介壳虫",
      "behavior": "独居或聚集越冬"
    },
    "facts": [
      "一生产卵数百枚",
      "是农业重要天敌"
    ],
    "topics": [],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "七星瓢虫（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/animal/animal-insect-coccinella-septempunctata.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "animal-insect-scarabaeidae",
    "domain": "animal",
    "domainLabel": "动物界",
    "taxon": {
      "kingdom": "动物界",
      "phylum": "节肢动物门",
      "class": "昆虫纲",
      "order": "鞘翅目",
      "family": "金龟子科",
      "genus": "—",
      "species": "Scarabaeidae"
    },
    "names": {
      "zh": "蜣螂",
      "en": "Dung Beetle",
      "common": []
    },
    "conservation": {
      "iucn": "无危 (LC)",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "全球（除南极）"
    ],
    "morphology": {
      "summary": "以动物粪便为食，有推粪球、掘洞等习性，对土壤有重要生态作用。",
      "key_features": [
        "推粪球",
        "强壮足",
        "粪食性"
      ]
    },
    "ecology": {
      "habitat": "草原、森林、农田",
      "diet": "粪便",
      "behavior": "独居或交配期成对"
    },
    "facts": [
      "古埃及象征重生",
      "一坨粪可埋入地下减少蝇类"
    ],
    "topics": [],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "蜣螂（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/animal/animal-insect-scarabaeidae.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "animal-invertebrate-araneae",
    "domain": "animal",
    "domainLabel": "动物界",
    "taxon": {
      "kingdom": "动物界",
      "phylum": "节肢动物门",
      "class": "蛛形纲",
      "order": "蜘蛛目",
      "family": "—",
      "genus": "—",
      "species": "Araneae"
    },
    "names": {
      "zh": "蜘蛛",
      "en": "Spider",
      "common": []
    },
    "conservation": {
      "iucn": "无危 (LC)",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "全球（除南极）"
    ],
    "morphology": {
      "summary": "八足节肢动物，身体分头胸部与腹部，多数能纺丝结网。",
      "key_features": [
        "八足",
        "纺丝结网",
        "两体段"
      ]
    },
    "ecology": {
      "habitat": "多样生境",
      "diet": "昆虫",
      "behavior": "独居"
    },
    "facts": [
      "蜘蛛丝强度高于同等粗细钢铁",
      "毒液多用于液化猎物"
    ],
    "topics": [],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "蜘蛛（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/animal/animal-invertebrate-araneae.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "animal-invertebrate-octopus-vulgaris",
    "domain": "animal",
    "domainLabel": "动物界",
    "taxon": {
      "kingdom": "动物界",
      "phylum": "软体动物门",
      "class": "头足纲",
      "order": "八腕目",
      "family": "章鱼科",
      "genus": "章鱼属",
      "species": "Octopus vulgaris"
    },
    "names": {
      "zh": "普通章鱼",
      "en": "Common Octopus",
      "common": []
    },
    "conservation": {
      "iucn": "无危 (LC)",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "全球温带热带海域"
    ],
    "morphology": {
      "summary": "八腕头足类，具高度发达眼睛与色素细胞，能改变体色。",
      "key_features": [
        "八腕",
        "变色拟态",
        "三心脏"
      ]
    },
    "ecology": {
      "habitat": "浅海岩礁、海草床",
      "diet": "蟹、贝类、鱼类",
      "behavior": "独居，夜行"
    },
    "facts": [
      "具有短期记忆与问题解决能力",
      "喷墨逃生"
    ],
    "topics": [],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "普通章鱼（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/animal/animal-invertebrate-octopus-vulgaris.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "animal-invertebrate-brachyura",
    "domain": "animal",
    "domainLabel": "动物界",
    "taxon": {
      "kingdom": "动物界",
      "phylum": "节肢动物门",
      "class": "甲壳纲",
      "order": "十足目",
      "family": "短尾下目",
      "genus": "—",
      "species": "Brachyura"
    },
    "names": {
      "zh": "螃蟹",
      "en": "Crab",
      "common": []
    },
    "conservation": {
      "iucn": "无危 (LC)",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "全球水域与海岸"
    ],
    "morphology": {
      "summary": "十足目甲壳类，身体宽扁，五对步足，第一对常特化为螯。",
      "key_features": [
        "五对步足",
        "一对螯",
        "横走"
      ]
    },
    "ecology": {
      "habitat": "海洋、淡水、潮间带",
      "diet": "杂食性",
      "behavior": "独居或集群"
    },
    "facts": [
      "螃蟹横着走",
      "蜕壳成长"
    ],
    "topics": [],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "螃蟹（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/animal/animal-invertebrate-brachyura.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "plant-ginkgophyta-ginkgo-biloba",
    "domain": "plant",
    "domainLabel": "植物界",
    "taxon": {
      "kingdom": "植物界",
      "phylum": "裸子植物门",
      "class": "银杏纲",
      "order": "银杏目",
      "family": "银杏科",
      "genus": "银杏属",
      "species": "Ginkgo biloba"
    },
    "names": {
      "zh": "银杏",
      "en": "Ginkgo",
      "common": []
    },
    "conservation": {
      "iucn": "濒危 (EN)",
      "cites": "—",
      "cn": "国家一级保护野生植物"
    },
    "distribution": [
      "原生中国（浙江天目山等）",
      "现全球广泛栽培"
    ],
    "morphology": {
      "summary": "落叶乔木；叶扇形，具长叶柄，顶端常二裂，叶脉二叉状分叉。",
      "key_features": [
        "扇形叶",
        "二叉脉",
        "长叶柄"
      ]
    },
    "ecology": {
      "habitat": "温带湿润山地",
      "diet": "光合自养",
      "behavior": "雌雄异株，种子称白果"
    },
    "facts": [
      "被誉为活化石",
      "野生种群极稀少，栽培个体遍布全球"
    ],
    "topics": [
      "chinaEndemic",
      "endangered"
    ],
    "season": "autumn",
    "images": [
      {
        "type": "leaf",
        "caption": "银杏叶形态（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/plant/plant-ginkgophyta-ginkgo-biloba.png",
        "hotspots": [
          {
            "x": 0.5,
            "y": 0.35,
            "label": "扇形叶",
            "desc": "叶呈扇状，顶端常二裂，是银杏最易识别的形态特征。"
          },
          {
            "x": 0.5,
            "y": 0.5,
            "label": "二叉脉",
            "desc": "叶脉自基部呈二叉状反复分叉，裸子植物中罕见。"
          },
          {
            "x": 0.5,
            "y": 0.82,
            "label": "长叶柄",
            "desc": "具细长叶柄，连接叶片与枝条。"
          }
        ]
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "plant-ginkgophyta-metasequoia-glyptostroboides",
    "domain": "plant",
    "domainLabel": "植物界",
    "taxon": {
      "kingdom": "植物界",
      "phylum": "裸子植物门",
      "class": "松柏纲",
      "order": "松柏目",
      "family": "杉科",
      "genus": "水杉属",
      "species": "Metasequoia glyptostroboides"
    },
    "names": {
      "zh": "水杉",
      "en": "Dawn Redwood",
      "common": []
    },
    "conservation": {
      "iucn": "濒危 (EN)",
      "cites": "—",
      "cn": "国家一级保护野生植物"
    },
    "distribution": [
      "中国·湖北·利川",
      "现全球引种栽培"
    ],
    "morphology": {
      "summary": "落叶针叶乔木，树冠塔形；叶线形、对生，秋季变红褐色后脱落。",
      "key_features": [
        "塔形树冠",
        "对生线形叶",
        "落叶针叶树"
      ]
    },
    "ecology": {
      "habitat": "山谷湿地、河岸",
      "diet": "光合自养",
      "behavior": "速生，喜湿润"
    },
    "facts": [
      "曾被认为已灭绝，1940s 在中国重新发现",
      "与恐龙同代的活化石"
    ],
    "topics": [
      "chinaEndemic",
      "endangered"
    ],
    "season": "autumn",
    "images": [
      {
        "type": "tree",
        "caption": "水杉形态（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/plant/plant-ginkgophyta-metasequoia-glyptostroboides.png",
        "hotspots": [
          {
            "x": 0.5,
            "y": 0.42,
            "label": "塔形树冠",
            "desc": "树冠呈尖塔形，是对生线形叶与落叶习性共同形成的轮廓。"
          }
        ]
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "plant-angiosperm-paeonia-suffruticosa",
    "domain": "plant",
    "domainLabel": "植物界",
    "taxon": {
      "kingdom": "植物界",
      "phylum": "被子植物门",
      "class": "双子叶植物纲",
      "order": "虎耳草目",
      "family": "芍药科",
      "genus": "芍药属",
      "species": "Paeonia suffruticosa"
    },
    "names": {
      "zh": "牡丹",
      "en": "Tree Peony",
      "common": []
    },
    "conservation": {
      "iucn": "无危（广泛栽培）",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "中国中原、西北",
      "现全球园林栽培"
    ],
    "morphology": {
      "summary": "灌木；花大，重瓣，花色丰富；叶互生二回三出复叶。",
      "key_features": [
        "重瓣大花",
        "花径可达 20 cm",
        "木质茎"
      ]
    },
    "ecology": {
      "habitat": "庭院、园林",
      "diet": "光合自养",
      "behavior": "春季开花"
    },
    "facts": [
      "素有花中之王、国色天香之称",
      "为中国传统名花，栽培史逾千年"
    ],
    "topics": [
      "season"
    ],
    "season": "spring",
    "images": [
      {
        "type": "flower",
        "caption": "牡丹形态（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/plant/plant-angiosperm-paeonia-suffruticosa.png",
        "hotspots": [
          {
            "x": 0.5,
            "y": 0.5,
            "label": "重瓣大花",
            "desc": "花大色艳、重瓣层叠，春季盛开，素有花王之誉。"
          }
        ]
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "plant-angiosperm-nelumbo-nucifera",
    "domain": "plant",
    "domainLabel": "植物界",
    "taxon": {
      "kingdom": "植物界",
      "phylum": "被子植物门",
      "class": "双子叶植物纲",
      "order": "山龙眼目",
      "family": "莲科",
      "genus": "莲属",
      "species": "Nelumbo nucifera"
    },
    "names": {
      "zh": "荷花",
      "en": "Sacred Lotus",
      "common": []
    },
    "conservation": {
      "iucn": "无危（广布栽培）",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "亚洲热带至温带水池",
      "中国南北广泛栽培"
    ],
    "morphology": {
      "summary": "水生草本；叶圆盾状、挺出水面；花大、粉或白色，中央为莲蓬。",
      "key_features": [
        "圆盾状叶",
        "挺水开花",
        "莲蓬"
      ]
    },
    "ecology": {
      "habitat": "池塘、湖沼",
      "diet": "光合自养",
      "behavior": "夏季开花"
    },
    "facts": [
      "根状茎即藕，种子为莲子",
      "叶面的蜡质使其出淤泥而不染"
    ],
    "topics": [
      "season"
    ],
    "season": "summer",
    "images": [
      {
        "type": "flower",
        "caption": "荷花形态（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/plant/plant-angiosperm-nelumbo-nucifera.png",
        "hotspots": [
          {
            "x": 0.5,
            "y": 0.55,
            "label": "叶与花",
            "desc": "叶圆盾状浮/挺水，夏季开粉花，中央膨大为莲蓬。"
          }
        ]
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "plant-angiosperm-cymbidium-goeringii",
    "domain": "plant",
    "domainLabel": "植物界",
    "taxon": {
      "kingdom": "植物界",
      "phylum": "被子植物门",
      "class": "单子叶植物纲",
      "order": "天门冬目",
      "family": "兰科",
      "genus": "兰属",
      "species": "Cymbidium goeringii"
    },
    "names": {
      "zh": "春兰",
      "en": "Goering's Cymbidium",
      "common": []
    },
    "conservation": {
      "iucn": "近危",
      "cites": "—",
      "cn": "国家二级保护野生植物"
    },
    "distribution": [
      "中国·华东·华中·西南"
    ],
    "morphology": {
      "summary": "地生兰；叶带状、丛生；花单生，淡绿至浅紫，清香。",
      "key_features": [
        "丛生带状叶",
        "花单生清香",
        "中国特有兰属"
      ]
    },
    "ecology": {
      "habitat": "林下阴湿处",
      "diet": "光合自养",
      "behavior": "春季开花"
    },
    "facts": [
      "中国传统名花，赏叶亦赏花",
      "因采挖压力，野生资源需保护"
    ],
    "topics": [
      "chinaEndemic",
      "endangered"
    ],
    "season": "spring",
    "images": [
      {
        "type": "overview",
        "caption": "春兰（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/plant/plant-angiosperm-cymbidium-goeringii.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "plant-angiosperm-rosa-chinensis",
    "domain": "plant",
    "domainLabel": "植物界",
    "taxon": {
      "kingdom": "植物界",
      "phylum": "被子植物门",
      "class": "双子叶植物纲",
      "order": "蔷薇目",
      "family": "蔷薇科",
      "genus": "蔷薇属",
      "species": "Rosa chinensis"
    },
    "names": {
      "zh": "月季",
      "en": "Chinese Rose",
      "common": []
    },
    "conservation": {
      "iucn": "无危（广布栽培）",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "中国原产，全球栽培"
    ],
    "morphology": {
      "summary": "常绿或半常绿灌木，茎具皮刺；花常簇生，重瓣，花色多样。",
      "key_features": [
        "皮刺茎",
        "重瓣花",
        "多季开花"
      ]
    },
    "ecology": {
      "habitat": "园林、庭院",
      "diet": "光合自养",
      "behavior": "夏季为主，多季开花"
    },
    "facts": [
      "现代月季重要亲本之一",
      "花语常与爱情相关"
    ],
    "topics": [
      "season"
    ],
    "season": "summer",
    "images": [
      {
        "type": "overview",
        "caption": "月季（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/plant/plant-angiosperm-rosa-chinensis.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "plant-angiosperm-tulipa",
    "domain": "plant",
    "domainLabel": "植物界",
    "taxon": {
      "kingdom": "植物界",
      "phylum": "被子植物门",
      "class": "单子叶植物纲",
      "order": "百合目",
      "family": "百合科",
      "genus": "郁金香属",
      "species": "Tulipa spp."
    },
    "names": {
      "zh": "郁金香",
      "en": "Tulip",
      "common": []
    },
    "conservation": {
      "iucn": "无危（栽培）",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "中亚起源，全球栽培"
    ],
    "morphology": {
      "summary": "球根花卉，花杯状，茎叶光滑；花色丰富，春季开花。",
      "key_features": [
        "杯状花",
        "球根",
        "春季开花"
      ]
    },
    "ecology": {
      "habitat": "园林、花田",
      "diet": "光合自养",
      "behavior": "春季开花"
    },
    "facts": [
      "荷兰国花",
      "郁金香狂热是早期经济泡沫案例"
    ],
    "topics": [
      "season"
    ],
    "season": "spring",
    "images": [
      {
        "type": "overview",
        "caption": "郁金香（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/plant/plant-angiosperm-tulipa.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "plant-angiosperm-orchidaceae",
    "domain": "plant",
    "domainLabel": "植物界",
    "taxon": {
      "kingdom": "植物界",
      "phylum": "被子植物门",
      "class": "单子叶植物纲",
      "order": "天门冬目",
      "family": "兰科",
      "genus": "蝴蝶兰属",
      "species": "Phalaenopsis spp."
    },
    "names": {
      "zh": "蝴蝶兰",
      "en": "Moth Orchid",
      "common": []
    },
    "conservation": {
      "iucn": "无危（栽培）",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "东南亚热带森林"
    ],
    "morphology": {
      "summary": "附生兰，花形似蝶，唇瓣发达，花期长，常见盆栽观赏。",
      "key_features": [
        "蝶形花",
        "附生",
        "长花期"
      ]
    },
    "ecology": {
      "habitat": "热带森林、温室",
      "diet": "光合自养",
      "behavior": "冬春开花"
    },
    "facts": [
      "附生于树干，气生根吸收水分",
      "是重要年宵花卉"
    ],
    "topics": [
      "season"
    ],
    "season": "winter",
    "images": [
      {
        "type": "overview",
        "caption": "蝴蝶兰（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/plant/plant-angiosperm-orchidaceae.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "plant-angiosperm-lilium",
    "domain": "plant",
    "domainLabel": "植物界",
    "taxon": {
      "kingdom": "植物界",
      "phylum": "被子植物门",
      "class": "单子叶植物纲",
      "order": "百合目",
      "family": "百合科",
      "genus": "百合属",
      "species": "Lilium spp."
    },
    "names": {
      "zh": "百合",
      "en": "Lily",
      "common": []
    },
    "conservation": {
      "iucn": "无危（栽培）",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "北半球温带"
    ],
    "morphology": {
      "summary": "球根花卉，花大喇叭状，常具香气；鳞茎可食或药用。",
      "key_features": [
        "喇叭状花",
        "鳞茎",
        "香气"
      ]
    },
    "ecology": {
      "habitat": "山地、园林",
      "diet": "光合自养",
      "behavior": "夏季开花"
    },
    "facts": [
      "部分种类鳞茎可食用",
      "在西方象征纯洁"
    ],
    "topics": [
      "season"
    ],
    "season": "summer",
    "images": [
      {
        "type": "overview",
        "caption": "百合（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/plant/plant-angiosperm-lilium.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "plant-angiosperm-helianthus-annuus",
    "domain": "plant",
    "domainLabel": "植物界",
    "taxon": {
      "kingdom": "植物界",
      "phylum": "被子植物门",
      "class": "双子叶植物纲",
      "order": "菊目",
      "family": "菊科",
      "genus": "向日葵属",
      "species": "Helianthus annuus"
    },
    "names": {
      "zh": "向日葵",
      "en": "Sunflower",
      "common": []
    },
    "conservation": {
      "iucn": "无危（栽培）",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "北美洲原产，全球栽培"
    ],
    "morphology": {
      "summary": "一年生草本，茎直立高大；花序盘状，花盘随太阳转向。",
      "key_features": [
        "大花盘",
        "向光性",
        "种子可食"
      ]
    },
    "ecology": {
      "habitat": "农田、园林",
      "diet": "光合自养",
      "behavior": "夏季开花"
    },
    "facts": [
      "花盘由多数小花组成",
      "种子榨油为重要食用油"
    ],
    "topics": [
      "season"
    ],
    "season": "summer",
    "images": [
      {
        "type": "overview",
        "caption": "向日葵（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/plant/plant-angiosperm-helianthus-annuus.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "plant-angiosperm-chrysanthemum",
    "domain": "plant",
    "domainLabel": "植物界",
    "taxon": {
      "kingdom": "植物界",
      "phylum": "被子植物门",
      "class": "双子叶植物纲",
      "order": "菊目",
      "family": "菊科",
      "genus": "菊属",
      "species": "Chrysanthemum × morifolium"
    },
    "names": {
      "zh": "菊花",
      "en": "Chrysanthemum",
      "common": []
    },
    "conservation": {
      "iucn": "无危（栽培）",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "中国原产，世界栽培"
    ],
    "morphology": {
      "summary": "多年生草本，头状花序，舌状花与管状花兼备，品种繁多。",
      "key_features": [
        "头状花序",
        "品种繁多",
        "秋季开花"
      ]
    },
    "ecology": {
      "habitat": "园林、庭院",
      "diet": "光合自养",
      "behavior": "秋季开花"
    },
    "facts": [
      "中国十大名花之一",
      "日本皇室象征"
    ],
    "topics": [
      "season"
    ],
    "season": "autumn",
    "images": [
      {
        "type": "overview",
        "caption": "菊花（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/plant/plant-angiosperm-chrysanthemum.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "plant-angiosperm-bellis-perennis",
    "domain": "plant",
    "domainLabel": "植物界",
    "taxon": {
      "kingdom": "植物界",
      "phylum": "被子植物门",
      "class": "双子叶植物纲",
      "order": "菊目",
      "family": "菊科",
      "genus": "雏菊属",
      "species": "Bellis perennis"
    },
    "names": {
      "zh": "雏菊",
      "en": "Daisy",
      "common": []
    },
    "conservation": {
      "iucn": "无危 (LC)",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "欧亚大陆"
    ],
    "morphology": {
      "summary": "小型多年生草本，基生叶莲座状；头状花序，舌状花白色、盘花黄色。",
      "key_features": [
        "莲座叶",
        "白舌状花黄心",
        "早春开花"
      ]
    },
    "ecology": {
      "habitat": "草地、路边、园林",
      "diet": "光合自养",
      "behavior": "春季开花"
    },
    "facts": [
      "菊科典型头状花序",
      "在欧美象征天真"
    ],
    "topics": [
      "season"
    ],
    "season": "spring",
    "images": [
      {
        "type": "overview",
        "caption": "雏菊（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/plant/plant-angiosperm-bellis-perennis.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "plant-angiosperm-lavandula",
    "domain": "plant",
    "domainLabel": "植物界",
    "taxon": {
      "kingdom": "植物界",
      "phylum": "被子植物门",
      "class": "双子叶植物纲",
      "order": "唇形目",
      "family": "唇形科",
      "genus": "薰衣草属",
      "species": "Lavandula angustifolia"
    },
    "names": {
      "zh": "薰衣草",
      "en": "Lavender",
      "common": []
    },
    "conservation": {
      "iucn": "无危（栽培）",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "地中海地区"
    ],
    "morphology": {
      "summary": "常绿芳香灌木，花穗紫色，叶披针形灰绿，具芳香油。",
      "key_features": [
        "紫色花穗",
        "灰绿色叶",
        "芳香精油"
      ]
    },
    "ecology": {
      "habitat": "干旱坡地、园林",
      "diet": "光合自养",
      "behavior": "夏季开花"
    },
    "facts": [
      "精油用于香氛与助眠",
      "耐旱，忌积水"
    ],
    "topics": [
      "season"
    ],
    "season": "summer",
    "images": [
      {
        "type": "overview",
        "caption": "薰衣草（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/plant/plant-angiosperm-lavandula.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "plant-angiosperm-prunus-serrulata",
    "domain": "plant",
    "domainLabel": "植物界",
    "taxon": {
      "kingdom": "植物界",
      "phylum": "被子植物门",
      "class": "双子叶植物纲",
      "order": "蔷薇目",
      "family": "蔷薇科",
      "genus": "李属",
      "species": "Prunus serrulata"
    },
    "names": {
      "zh": "樱花",
      "en": "Japanese Cherry",
      "common": []
    },
    "conservation": {
      "iucn": "无危（栽培）",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "东亚广泛栽培"
    ],
    "morphology": {
      "summary": "落叶乔木，春季先花后叶，花白色或淡粉，花瓣 5。",
      "key_features": [
        "先花后叶",
        "淡粉色花",
        "春季盛放"
      ]
    },
    "ecology": {
      "habitat": "园林、山野",
      "diet": "光合自养",
      "behavior": "春季开花"
    },
    "facts": [
      "花期短暂，常被视为无常之美",
      "园艺品种极多"
    ],
    "topics": [
      "season"
    ],
    "season": "spring",
    "images": [
      {
        "type": "overview",
        "caption": "樱花（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/plant/plant-angiosperm-prunus-serrulata.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "plant-angiosperm-prunus-mume",
    "domain": "plant",
    "domainLabel": "植物界",
    "taxon": {
      "kingdom": "植物界",
      "phylum": "被子植物门",
      "class": "双子叶植物纲",
      "order": "蔷薇目",
      "family": "蔷薇科",
      "genus": "李属",
      "species": "Prunus mume"
    },
    "names": {
      "zh": "梅花",
      "en": "Chinese Plum",
      "common": []
    },
    "conservation": {
      "iucn": "无危（栽培）",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "中国原产"
    ],
    "morphology": {
      "summary": "落叶小乔木，冬末春初开花，花香清幽，耐寒。",
      "key_features": [
        "冬春开花",
        "花香",
        "耐寒"
      ]
    },
    "ecology": {
      "habitat": "园林、庭院",
      "diet": "光合自养",
      "behavior": "冬末春初"
    },
    "facts": [
      "中国十大名花之首",
      "与兰竹菊并称四君子"
    ],
    "topics": [
      "season"
    ],
    "season": "winter",
    "images": [
      {
        "type": "overview",
        "caption": "梅花（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/plant/plant-angiosperm-prunus-mume.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "plant-angiosperm-magnolia-denudata",
    "domain": "plant",
    "domainLabel": "植物界",
    "taxon": {
      "kingdom": "植物界",
      "phylum": "被子植物门",
      "class": "双子叶植物纲",
      "order": "木兰目",
      "family": "木兰科",
      "genus": "木兰属",
      "species": "Magnolia denudata"
    },
    "names": {
      "zh": "玉兰",
      "en": "Yulan Magnolia",
      "common": []
    },
    "conservation": {
      "iucn": "无危（栽培）",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "中国原产"
    ],
    "morphology": {
      "summary": "落叶乔木，早春开大花，白色，花被片 9，先花后叶。",
      "key_features": [
        "大白色花",
        "先花后叶",
        "花被片 9"
      ]
    },
    "ecology": {
      "habitat": "园林、庭院",
      "diet": "光合自养",
      "behavior": "早春开花"
    },
    "facts": [
      "上海市市花",
      "花形秀美，芳香"
    ],
    "topics": [
      "season"
    ],
    "season": "spring",
    "images": [
      {
        "type": "overview",
        "caption": "玉兰（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/plant/plant-angiosperm-magnolia-denudata.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "plant-angiosperm-hibiscus-rosa-sinensis",
    "domain": "plant",
    "domainLabel": "植物界",
    "taxon": {
      "kingdom": "植物界",
      "phylum": "被子植物门",
      "class": "双子叶植物纲",
      "order": "锦葵目",
      "family": "锦葵科",
      "genus": "木槿属",
      "species": "Hibiscus rosa-sinensis"
    },
    "names": {
      "zh": "朱槿",
      "en": "Chinese Hibiscus",
      "common": []
    },
    "conservation": {
      "iucn": "无危（栽培）",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "中国南部及热带亚洲"
    ],
    "morphology": {
      "summary": "常绿灌木，花大红色，单生，雄蕊柱长，四季开花。",
      "key_features": [
        "大红花",
        "雄蕊柱",
        "四季开花"
      ]
    },
    "ecology": {
      "habitat": "热带园林",
      "diet": "光合自养",
      "behavior": "全年开花"
    },
    "facts": [
      "南宁市市花",
      "单朵花仅开放一日"
    ],
    "topics": [
      "season"
    ],
    "season": "summer",
    "images": [
      {
        "type": "overview",
        "caption": "朱槿（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/plant/plant-angiosperm-hibiscus-rosa-sinensis.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "plant-angiosperm-narcissus",
    "domain": "plant",
    "domainLabel": "植物界",
    "taxon": {
      "kingdom": "植物界",
      "phylum": "被子植物门",
      "class": "单子叶植物纲",
      "order": "天门冬目",
      "family": "石蒜科",
      "genus": "水仙属",
      "species": "Narcissus tazetta var. chinensis"
    },
    "names": {
      "zh": "水仙",
      "en": "Narcissus",
      "common": []
    },
    "conservation": {
      "iucn": "无危（栽培）",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "中国福建、浙江沿海"
    ],
    "morphology": {
      "summary": "球根花卉，叶带状；花白色具黄色副冠，清香，冬季开花。",
      "key_features": [
        "白色花黄色副冠",
        "球根",
        "冬季开花"
      ]
    },
    "ecology": {
      "habitat": "水边、盆栽",
      "diet": "光合自养",
      "behavior": "冬季开花"
    },
    "facts": [
      "漳州水仙著名",
      "花香浓郁"
    ],
    "topics": [
      "season"
    ],
    "season": "winter",
    "images": [
      {
        "type": "overview",
        "caption": "水仙（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/plant/plant-angiosperm-narcissus.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "plant-angiosperm-oryza-sativa",
    "domain": "plant",
    "domainLabel": "植物界",
    "taxon": {
      "kingdom": "植物界",
      "phylum": "被子植物门",
      "class": "单子叶植物纲",
      "order": "禾本目",
      "family": "禾本科",
      "genus": "稻属",
      "species": "Oryza sativa"
    },
    "names": {
      "zh": "水稻",
      "en": "Asian Rice",
      "common": []
    },
    "conservation": {
      "iucn": "无危（栽培）",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "亚洲季风区广泛种植"
    ],
    "morphology": {
      "summary": "一年生草本，茎秆中空，穗下垂；颖果即稻谷，去壳为大米。",
      "key_features": [
        "穗状花序",
        "中空茎秆",
        "颖果"
      ]
    },
    "ecology": {
      "habitat": "水田、湿地",
      "diet": "光合自养",
      "behavior": "夏秋成熟"
    },
    "facts": [
      "全球约半数人口主食",
      "中国最早驯化水稻地区之一"
    ],
    "topics": [
      "season"
    ],
    "season": "autumn",
    "images": [
      {
        "type": "overview",
        "caption": "水稻（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/plant/plant-angiosperm-oryza-sativa.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "plant-angiosperm-triticum-aestivum",
    "domain": "plant",
    "domainLabel": "植物界",
    "taxon": {
      "kingdom": "植物界",
      "phylum": "被子植物门",
      "class": "单子叶植物纲",
      "order": "禾本目",
      "family": "禾本科",
      "genus": "小麦属",
      "species": "Triticum aestivum"
    },
    "names": {
      "zh": "普通小麦",
      "en": "Common Wheat",
      "common": []
    },
    "conservation": {
      "iucn": "无危（栽培）",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "全球温带广泛种植"
    ],
    "morphology": {
      "summary": "一年生或二年生草本，穗状花序，小穗具芒；颖果磨粉。",
      "key_features": [
        "穗状花序",
        "颖果磨粉",
        "六倍体"
      ]
    },
    "ecology": {
      "habitat": "旱地、农田",
      "diet": "光合自养",
      "behavior": "夏季成熟"
    },
    "facts": [
      "全球三大谷物之一",
      "面粉主要来源"
    ],
    "topics": [
      "season"
    ],
    "season": "summer",
    "images": [
      {
        "type": "overview",
        "caption": "普通小麦（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/plant/plant-angiosperm-triticum-aestivum.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "plant-angiosperm-zea-mays",
    "domain": "plant",
    "domainLabel": "植物界",
    "taxon": {
      "kingdom": "植物界",
      "phylum": "被子植物门",
      "class": "单子叶植物纲",
      "order": "禾本目",
      "family": "禾本科",
      "genus": "玉蜀黍属",
      "species": "Zea mays"
    },
    "names": {
      "zh": "玉米",
      "en": "Maize",
      "common": []
    },
    "conservation": {
      "iucn": "无危（栽培）",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "美洲原产，全球栽培"
    ],
    "morphology": {
      "summary": "一年生高大草本，茎直立，雌雄同株异花；颖果即玉米粒。",
      "key_features": [
        "雌雄同株",
        "颖果紧密排成穗",
        "高大茎秆"
      ]
    },
    "ecology": {
      "habitat": "农田",
      "diet": "光合自养",
      "behavior": "夏末秋初成熟"
    },
    "facts": [
      "用途极广：粮、饲、工业原料",
      "C4 作物光合效率高"
    ],
    "topics": [
      "season"
    ],
    "season": "autumn",
    "images": [
      {
        "type": "overview",
        "caption": "玉米（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/plant/plant-angiosperm-zea-mays.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "plant-angiosperm-camellia-sinensis",
    "domain": "plant",
    "domainLabel": "植物界",
    "taxon": {
      "kingdom": "植物界",
      "phylum": "被子植物门",
      "class": "双子叶植物纲",
      "order": "山茶目",
      "family": "山茶科",
      "genus": "山茶属",
      "species": "Camellia sinensis"
    },
    "names": {
      "zh": "茶树",
      "en": "Tea Plant",
      "common": []
    },
    "conservation": {
      "iucn": "无危（栽培）",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "中国西南起源，全球种植"
    ],
    "morphology": {
      "summary": "常绿灌木或小乔木，叶革质椭圆形；嫩芽制茶。",
      "key_features": [
        "革质椭圆叶",
        "嫩芽制茶",
        "常绿"
      ]
    },
    "ecology": {
      "habitat": "亚热带山地、茶园",
      "diet": "光合自养",
      "behavior": "春秋季采嫩芽"
    },
    "facts": [
      "绿茶、红茶、乌龙茶均源于同一种",
      "中国是茶原产地"
    ],
    "topics": [],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "茶树（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/plant/plant-angiosperm-camellia-sinensis.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "plant-angiosperm-malus-domestica",
    "domain": "plant",
    "domainLabel": "植物界",
    "taxon": {
      "kingdom": "植物界",
      "phylum": "被子植物门",
      "class": "双子叶植物纲",
      "order": "蔷薇目",
      "family": "蔷薇科",
      "genus": "苹果属",
      "species": "Malus domestica"
    },
    "names": {
      "zh": "苹果",
      "en": "Apple",
      "common": []
    },
    "conservation": {
      "iucn": "无危（栽培）",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "中亚起源，全球温带栽培"
    ],
    "morphology": {
      "summary": "落叶乔木，叶卵圆形；花白或淡粉；果实球形，肉质多汁。",
      "key_features": [
        "球形肉质果",
        "叶卵圆",
        "春季白花"
      ]
    },
    "ecology": {
      "habitat": "温带果园",
      "diet": "光合自养",
      "behavior": "秋季结果"
    },
    "facts": [
      "富含果胶与膳食纤维",
      "品种繁多，颜色各异"
    ],
    "topics": [
      "season"
    ],
    "season": "autumn",
    "images": [
      {
        "type": "overview",
        "caption": "苹果（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/plant/plant-angiosperm-malus-domestica.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "plant-angiosperm-musa-acuminata",
    "domain": "plant",
    "domainLabel": "植物界",
    "taxon": {
      "kingdom": "植物界",
      "phylum": "被子植物门",
      "class": "单子叶植物纲",
      "order": "姜目",
      "family": "芭蕉科",
      "genus": "芭蕉属",
      "species": "Musa acuminata"
    },
    "names": {
      "zh": "香蕉",
      "en": "Banana",
      "common": []
    },
    "conservation": {
      "iucn": "无危（野生）",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "东南亚热带"
    ],
    "morphology": {
      "summary": "大型草本，叶巨大长椭圆形；果串弯曲，浆果无籽。",
      "key_features": [
        "巨大叶片",
        "浆果无籽",
        "多年生草本"
      ]
    },
    "ecology": {
      "habitat": "热带果园",
      "diet": "光合自养",
      "behavior": "全年可采收"
    },
    "facts": [
      "常见无籽香蕉为三倍体",
      "富含钾"
    ],
    "topics": [],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "香蕉（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/plant/plant-angiosperm-musa-acuminata.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "plant-angiosperm-citrus-sinensis",
    "domain": "plant",
    "domainLabel": "植物界",
    "taxon": {
      "kingdom": "植物界",
      "phylum": "被子植物门",
      "class": "双子叶植物纲",
      "order": "芸香目",
      "family": "芸香科",
      "genus": "柑橘属",
      "species": "Citrus sinensis"
    },
    "names": {
      "zh": "甜橙",
      "en": "Sweet Orange",
      "common": []
    },
    "conservation": {
      "iucn": "无危（栽培）",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "原产东南亚，全球亚热带栽培"
    ],
    "morphology": {
      "summary": "常绿小乔木，叶椭圆形有翼叶；果实球形，果皮橙色，汁囊化。",
      "key_features": [
        "球形橙果",
        "翼叶",
        "芳香皮油"
      ]
    },
    "ecology": {
      "habitat": "亚热带果园",
      "diet": "光合自养",
      "behavior": "冬季成熟"
    },
    "facts": [
      "富含维生素 C",
      "果皮可提取精油"
    ],
    "topics": [
      "season"
    ],
    "season": "winter",
    "images": [
      {
        "type": "overview",
        "caption": "甜橙（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/plant/plant-angiosperm-citrus-sinensis.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "plant-angiosperm-vitis-vinifera",
    "domain": "plant",
    "domainLabel": "植物界",
    "taxon": {
      "kingdom": "植物界",
      "phylum": "被子植物门",
      "class": "双子叶植物纲",
      "order": "葡萄目",
      "family": "葡萄科",
      "genus": "葡萄属",
      "species": "Vitis vinifera"
    },
    "names": {
      "zh": "葡萄",
      "en": "Common Grape Vine",
      "common": []
    },
    "conservation": {
      "iucn": "无危（栽培）",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "西亚起源，全球栽培"
    ],
    "morphology": {
      "summary": "落叶木质藤本，卷须攀援；叶掌状分裂；果实成串。",
      "key_features": [
        "藤本卷须",
        "掌状叶",
        "成串浆果"
      ]
    },
    "ecology": {
      "habitat": "温带果园、干旱坡地",
      "diet": "光合自养",
      "behavior": "夏末秋初成熟"
    },
    "facts": [
      "可鲜食、制干、酿酒",
      "葡萄酒主要原料"
    ],
    "topics": [
      "season"
    ],
    "season": "autumn",
    "images": [
      {
        "type": "overview",
        "caption": "葡萄（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/plant/plant-angiosperm-vitis-vinifera.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "plant-angiosperm-brassica-oleracea",
    "domain": "plant",
    "domainLabel": "植物界",
    "taxon": {
      "kingdom": "植物界",
      "phylum": "被子植物门",
      "class": "双子叶植物纲",
      "order": "十字花目",
      "family": "十字花科",
      "genus": "芸薹属",
      "species": "Brassica oleracea var. capitata"
    },
    "names": {
      "zh": "甘蓝",
      "en": "Cabbage",
      "common": []
    },
    "conservation": {
      "iucn": "无危（栽培）",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "地中海起源，全球栽培"
    ],
    "morphology": {
      "summary": "二年生草本，叶球状紧密包叠；甘蓝、花椰菜等同属不同变种。",
      "key_features": [
        "叶球紧密",
        "十字花科",
        "品种多样"
      ]
    },
    "ecology": {
      "habitat": "农田、菜园",
      "diet": "光合自养",
      "behavior": "秋季收获"
    },
    "facts": [
      "花椰菜与西兰花为其变种",
      "富含维生素 C 与纤维"
    ],
    "topics": [],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "甘蓝（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/plant/plant-angiosperm-brassica-oleracea.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "plant-angiosperm-solanum-lycopersicum",
    "domain": "plant",
    "domainLabel": "植物界",
    "taxon": {
      "kingdom": "植物界",
      "phylum": "被子植物门",
      "class": "双子叶植物纲",
      "order": "茄目",
      "family": "茄科",
      "genus": "番茄属",
      "species": "Solanum lycopersicum"
    },
    "names": {
      "zh": "番茄",
      "en": "Tomato",
      "common": []
    },
    "conservation": {
      "iucn": "无危（栽培）",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "南美洲原产，全球栽培"
    ],
    "morphology": {
      "summary": "一年生草本，茎蔓性或直立；叶羽状；果实浆果，红或黄色。",
      "key_features": [
        "浆果蔬菜",
        "羽状复叶",
        "无限生长型"
      ]
    },
    "ecology": {
      "habitat": "农田、温室",
      "diet": "光合自养",
      "behavior": "夏秋结果"
    },
    "facts": [
      "果实富含番茄红素",
      "常作蔬菜食用"
    ],
    "topics": [
      "season"
    ],
    "season": "summer",
    "images": [
      {
        "type": "overview",
        "caption": "番茄（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/plant/plant-angiosperm-solanum-lycopersicum.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "plant-angiosperm-daucus-carota",
    "domain": "plant",
    "domainLabel": "植物界",
    "taxon": {
      "kingdom": "植物界",
      "phylum": "被子植物门",
      "class": "双子叶植物纲",
      "order": "伞形目",
      "family": "伞形科",
      "genus": "胡萝卜属",
      "species": "Daucus carota subsp. sativus"
    },
    "names": {
      "zh": "胡萝卜",
      "en": "Carrot",
      "common": []
    },
    "conservation": {
      "iucn": "无危（栽培）",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "中亚起源，全球栽培"
    ],
    "morphology": {
      "summary": "二年生草本，直根肥大肉质，橙红色；叶羽状分裂。",
      "key_features": [
        "肥大肉质根",
        "橙红色",
        "伞形花序"
      ]
    },
    "ecology": {
      "habitat": "农田、菜园",
      "diet": "光合自养",
      "behavior": "秋季收获"
    },
    "facts": [
      "富含 β-胡萝卜素",
      "可生食或熟食"
    ],
    "topics": [],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "胡萝卜（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/plant/plant-angiosperm-daucus-carota.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "plant-angiosperm-bambusoideae",
    "domain": "plant",
    "domainLabel": "植物界",
    "taxon": {
      "kingdom": "植物界",
      "phylum": "被子植物门",
      "class": "单子叶植物纲",
      "order": "禾本目",
      "family": "禾本科",
      "genus": "刚竹属",
      "species": "Phyllostachys edulis"
    },
    "names": {
      "zh": "毛竹",
      "en": "Moso Bamboo",
      "common": []
    },
    "conservation": {
      "iucn": "无危（栽培）",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "中国华东、华中、西南"
    ],
    "morphology": {
      "summary": "大型散生竹，竿高达 20 m，节间圆筒形；春笋可食。",
      "key_features": [
        "高大圆竹竿",
        "竹鞭扩展",
        "春笋可食"
      ]
    },
    "ecology": {
      "habitat": "亚热带山地、丘陵",
      "diet": "光合自养",
      "behavior": "春夏出笋"
    },
    "facts": [
      "中国竹资源最丰富的国家",
      "大熊猫主食竹种之一"
    ],
    "topics": [
      "season"
    ],
    "season": "spring",
    "images": [
      {
        "type": "overview",
        "caption": "毛竹（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/plant/plant-angiosperm-bambusoideae.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "plant-angiosperm-aloe-vera",
    "domain": "plant",
    "domainLabel": "植物界",
    "taxon": {
      "kingdom": "植物界",
      "phylum": "被子植物门",
      "class": "单子叶植物纲",
      "order": "天门冬目",
      "family": "阿福花科",
      "genus": "芦荟属",
      "species": "Aloe vera"
    },
    "names": {
      "zh": "芦荟",
      "en": "Aloe Vera",
      "common": []
    },
    "conservation": {
      "iucn": "无危（栽培）",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "阿拉伯半岛起源"
    ],
    "morphology": {
      "summary": "多年生肉质草本，叶厚多汁披针形，缘有刺状小齿。",
      "key_features": [
        "肉质厚叶",
        "缘具小刺",
        "叶汁药用"
      ]
    },
    "ecology": {
      "habitat": "干旱地区、盆栽",
      "diet": "光合自养",
      "behavior": "冬末春初开花"
    },
    "facts": [
      "叶汁常用于护肤与轻度烫伤",
      "耐旱多肉植物"
    ],
    "topics": [],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "芦荟（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/plant/plant-angiosperm-aloe-vera.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "plant-pteridophyta-pteridium",
    "domain": "plant",
    "domainLabel": "植物界",
    "taxon": {
      "kingdom": "植物界",
      "phylum": "蕨类植物门",
      "class": "真蕨纲",
      "order": "水龙骨目",
      "family": "碗蕨科",
      "genus": "蕨属",
      "species": "Pteridium aquilinum"
    },
    "names": {
      "zh": "蕨",
      "en": "Bracken",
      "common": []
    },
    "conservation": {
      "iucn": "无危 (LC)",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "全球温带广泛分布"
    ],
    "morphology": {
      "summary": "多年生蕨类，根状茎横走，叶大型羽状复叶，幼叶卷曲。",
      "key_features": [
        "大型羽状复叶",
        "幼叶拳卷",
        "孢子繁殖"
      ]
    },
    "ecology": {
      "habitat": "林下、山坡、草地",
      "diet": "光合自养",
      "behavior": "春季展叶"
    },
    "facts": [
      "幼叶称蕨菜可食用",
      "成熟植株含原蕨苷"
    ],
    "topics": [
      "season"
    ],
    "season": "spring",
    "images": [
      {
        "type": "overview",
        "caption": "蕨（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/plant/plant-pteridophyta-pteridium.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "plant-bryophyta-moss",
    "domain": "plant",
    "domainLabel": "植物界",
    "taxon": {
      "kingdom": "植物界",
      "phylum": "苔藓植物门",
      "class": "藓纲",
      "order": "—",
      "family": "—",
      "genus": "—",
      "species": "Bryophyta"
    },
    "names": {
      "zh": "苔藓",
      "en": "Moss",
      "common": []
    },
    "conservation": {
      "iucn": "无危 (LC)",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "全球潮湿环境"
    ],
    "morphology": {
      "summary": "小型非维管植物，无真根，具假根；叶片细小，靠孢子繁殖。",
      "key_features": [
        "无维管组织",
        "假根固定",
        "孢子繁殖"
      ]
    },
    "ecology": {
      "habitat": "阴湿岩面、树干、土壤",
      "diet": "光合自养",
      "behavior": "全年缓慢生长"
    },
    "facts": [
      "是陆地生态系统拓荒者",
      "对空气污染敏感，可作指示植物"
    ],
    "topics": [],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "苔藓（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/plant/plant-bryophyta-moss.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "plant-fungi-agaricus-bisporus",
    "domain": "plant",
    "domainLabel": "植物界",
    "taxon": {
      "kingdom": "真菌界",
      "phylum": "担子菌门",
      "class": "伞菌纲",
      "order": "伞菌目",
      "family": "蘑菇科",
      "genus": "蘑菇属",
      "species": "Agaricus bisporus"
    },
    "names": {
      "zh": "双孢蘑菇",
      "en": "Button Mushroom",
      "common": []
    },
    "conservation": {
      "iucn": "无危（栽培）",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "全球栽培"
    ],
    "morphology": {
      "summary": "最常见的食用蘑菇之一，菌盖白至褐色，菌褶幼时粉后变褐。",
      "key_features": [
        "菌盖菌褶",
        "担子菌",
        "腐生"
      ]
    },
    "ecology": {
      "habitat": "堆肥、土壤",
      "diet": "腐生（分解有机物）",
      "behavior": "子实体夏秋季"
    },
    "facts": [
      "世界产量最大的食用菌之一",
      "成熟菌褶变褐产孢子"
    ],
    "topics": [],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "双孢蘑菇（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/plant/plant-fungi-agaricus-bisporus.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "plant-fungi-penicillium",
    "domain": "plant",
    "domainLabel": "植物界",
    "taxon": {
      "kingdom": "真菌界",
      "phylum": "子囊菌门",
      "class": "散囊菌纲",
      "order": "散囊菌目",
      "family": "发菌科",
      "genus": "青霉属",
      "species": "Penicillium chrysogenum"
    },
    "names": {
      "zh": "青霉",
      "en": "Penicillium",
      "common": []
    },
    "conservation": {
      "iucn": "无危（常见）",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "全球"
    ],
    "morphology": {
      "summary": "丝状真菌，菌落青绿色，分生孢子梗呈扫帚状分支。",
      "key_features": [
        "扫帚状孢子梗",
        "青绿色菌落",
        "抗生素来源"
      ]
    },
    "ecology": {
      "habitat": "土壤、腐烂有机物",
      "diet": "腐生",
      "behavior": "全年"
    },
    "facts": [
      "青霉素即由青霉提取",
      " bread mold 常见种"
    ],
    "topics": [
      "microscopic"
    ],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "青霉（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/plant/plant-fungi-penicillium.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "plant-fungi-aspergillus",
    "domain": "plant",
    "domainLabel": "植物界",
    "taxon": {
      "kingdom": "真菌界",
      "phylum": "子囊菌门",
      "class": "散囊菌纲",
      "order": "散囊菌目",
      "family": "发菌科",
      "genus": "曲霉属",
      "species": "Aspergillus flavus"
    },
    "names": {
      "zh": "曲霉",
      "en": "Aspergillus",
      "common": []
    },
    "conservation": {
      "iucn": "无危（常见）",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "全球"
    ],
    "morphology": {
      "summary": "丝状真菌，分生孢子头球形，可产黄曲霉毒素。",
      "key_features": [
        "球形孢子头",
        "可产毒素",
        "腐生"
      ]
    },
    "ecology": {
      "habitat": "土壤、谷物、有机物",
      "diet": "腐生",
      "behavior": "全年"
    },
    "facts": [
      "黄曲霉毒素强致癌",
      "也用于发酵制酱"
    ],
    "topics": [
      "microscopic"
    ],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "曲霉（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/plant/plant-fungi-aspergillus.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "plant-fungi-lichen",
    "domain": "plant",
    "domainLabel": "植物界",
    "taxon": {
      "kingdom": "真菌界",
      "phylum": "子囊菌门/担子菌门",
      "class": "—",
      "order": "—",
      "family": "—",
      "genus": "—",
      "species": "—"
    },
    "names": {
      "zh": "地衣",
      "en": "Lichen",
      "common": []
    },
    "conservation": {
      "iucn": "—",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "全球"
    ],
    "morphology": {
      "summary": "真菌与藻类或蓝藻的共生体，可生于岩石、树皮、土壤。",
      "key_features": [
        "共生体",
        "耐干旱",
        "先锋物种"
      ]
    },
    "ecology": {
      "habitat": "岩石、树皮、土壤",
      "diet": "光合共生",
      "behavior": "全年缓慢生长"
    },
    "facts": [
      "对空气质量敏感",
      "是生态系统先锋物种"
    ],
    "topics": [],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "地衣（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/plant/plant-fungi-lichen.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "plant-angiosperm-cocos-nucifera",
    "domain": "plant",
    "domainLabel": "植物界",
    "taxon": {
      "kingdom": "植物界",
      "phylum": "被子植物门",
      "class": "单子叶植物纲",
      "order": "棕榈目",
      "family": "棕榈科",
      "genus": "椰子属",
      "species": "Cocos nucifera"
    },
    "names": {
      "zh": "椰子",
      "en": "Coconut",
      "common": []
    },
    "conservation": {
      "iucn": "无危（栽培）",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "热带海岸"
    ],
    "morphology": {
      "summary": "热带高大棕榈，羽状叶；果实大，外果皮纤维质，内果皮硬。",
      "key_features": [
        "羽状叶",
        "大型核果",
        "耐盐海风"
      ]
    },
    "ecology": {
      "habitat": "热带海岸",
      "diet": "光合自养",
      "behavior": "全年结果"
    },
    "facts": [
      "椰汁可饮，椰肉可食",
      "果皮纤维可制绳"
    ],
    "topics": [],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "椰子（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/plant/plant-angiosperm-cocos-nucifera.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "plant-angiosperm-coffea-arabica",
    "domain": "plant",
    "domainLabel": "植物界",
    "taxon": {
      "kingdom": "植物界",
      "phylum": "被子植物门",
      "class": "双子叶植物纲",
      "order": "龙胆目",
      "family": "茜草科",
      "genus": "咖啡属",
      "species": "Coffea arabica"
    },
    "names": {
      "zh": "阿拉比卡咖啡",
      "en": "Arabica Coffee",
      "common": []
    },
    "conservation": {
      "iucn": "无危（栽培）",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "埃塞俄比亚高原"
    ],
    "morphology": {
      "summary": "常绿灌木或小乔木，叶对生；花白，果实红色浆果，种子烘焙为咖啡豆。",
      "key_features": [
        "对生叶",
        "红色浆果",
        "咖啡因"
      ]
    },
    "ecology": {
      "habitat": "热带高原山地",
      "diet": "光合自养",
      "behavior": "秋冬结果"
    },
    "facts": [
      "全球最重要咖啡品种之一",
      "咖啡因有兴奋作用"
    ],
    "topics": [],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "阿拉比卡咖啡（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/plant/plant-angiosperm-coffea-arabica.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "plant-angiosperm-theobroma-cacao",
    "domain": "plant",
    "domainLabel": "植物界",
    "taxon": {
      "kingdom": "植物界",
      "phylum": "被子植物门",
      "class": "双子叶植物纲",
      "order": "锦葵目",
      "family": "锦葵科",
      "genus": "可可属",
      "species": "Theobroma cacao"
    },
    "names": {
      "zh": "可可",
      "en": "Cacao",
      "common": []
    },
    "conservation": {
      "iucn": "无危（栽培）",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "中美洲与南美洲热带"
    ],
    "morphology": {
      "summary": "热带常绿乔木，花果实直接生于主干；种子可制巧克力。",
      "key_features": [
        "老茎生花",
        "种子制巧克力",
        "喜阴"
      ]
    },
    "ecology": {
      "habitat": "热带雨林下层",
      "diet": "光合自养",
      "behavior": "全年结果"
    },
    "facts": [
      "可可脂是巧克力主要成分",
      "中美洲原住民早先饮用"
    ],
    "topics": [],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "可可（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/plant/plant-angiosperm-theobroma-cacao.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "plant-gymnosperm-pinus",
    "domain": "plant",
    "domainLabel": "植物界",
    "taxon": {
      "kingdom": "植物界",
      "phylum": "裸子植物门",
      "class": "松柏纲",
      "order": "松柏目",
      "family": "松科",
      "genus": "松属",
      "species": "Pinus massoniana"
    },
    "names": {
      "zh": "马尾松",
      "en": "Masson Pine",
      "common": []
    },
    "conservation": {
      "iucn": "无危 (LC)",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "中国南方广泛分布"
    ],
    "morphology": {
      "summary": "常绿针叶乔木，树皮红褐色鳞状；针叶两针一束，球果卵圆形。",
      "key_features": [
        "两针一束",
        "鳞状红褐树皮",
        "球果"
      ]
    },
    "ecology": {
      "habitat": "山地、丘陵",
      "diet": "光合自养",
      "behavior": "常绿"
    },
    "facts": [
      "中国南方主要造林树种之一",
      "松脂可制松香"
    ],
    "topics": [
      "chinaEndemic"
    ],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "马尾松（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/plant/plant-gymnosperm-pinus.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "plant-gymnosperm-cedrus",
    "domain": "plant",
    "domainLabel": "植物界",
    "taxon": {
      "kingdom": "植物界",
      "phylum": "裸子植物门",
      "class": "松柏纲",
      "order": "松柏目",
      "family": "松科",
      "genus": "雪松属",
      "species": "Cedrus deodara"
    },
    "names": {
      "zh": "雪松",
      "en": "Cedar",
      "common": []
    },
    "conservation": {
      "iucn": "无危（栽培）",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "喜马拉雅山区"
    ],
    "morphology": {
      "summary": "常绿针叶大乔木，树冠塔形，枝平展；针叶短而密。",
      "key_features": [
        "塔形树冠",
        "短针叶",
        "芳香木材"
      ]
    },
    "ecology": {
      "habitat": "园林、山地",
      "diet": "光合自养",
      "behavior": "常绿"
    },
    "facts": [
      "木材芳香耐腐",
      "常用作庭园观赏树"
    ],
    "topics": [],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "雪松（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/plant/plant-gymnosperm-cedrus.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "plant-angiosperm-quercus",
    "domain": "plant",
    "domainLabel": "植物界",
    "taxon": {
      "kingdom": "植物界",
      "phylum": "被子植物门",
      "class": "双子叶植物纲",
      "order": "壳斗目",
      "family": "壳斗科",
      "genus": "栎属",
      "species": "Quercus spp."
    },
    "names": {
      "zh": "橡树",
      "en": "Oak",
      "common": []
    },
    "conservation": {
      "iucn": "无危 (LC)",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "北半球温带"
    ],
    "morphology": {
      "summary": "落叶或常绿乔木，叶常具裂；坚果即橡子，壳斗杯状。",
      "key_features": [
        "叶常裂",
        "橡子坚果",
        "壳斗杯"
      ]
    },
    "ecology": {
      "habitat": "温带森林",
      "diet": "光合自养",
      "behavior": "秋季结果"
    },
    "facts": [
      "橡子为许多野生动物食物",
      "木材坚硬耐久"
    ],
    "topics": [
      "season"
    ],
    "season": "autumn",
    "images": [
      {
        "type": "overview",
        "caption": "橡树（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/plant/plant-angiosperm-quercus.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "plant-angiosperm-acer",
    "domain": "plant",
    "domainLabel": "植物界",
    "taxon": {
      "kingdom": "植物界",
      "phylum": "被子植物门",
      "class": "双子叶植物纲",
      "order": "无患子目",
      "family": "无患子科",
      "genus": "槭属",
      "species": "Acer spp."
    },
    "names": {
      "zh": "槭树",
      "en": "Maple",
      "common": []
    },
    "conservation": {
      "iucn": "无危 (LC)",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "北半球温带"
    ],
    "morphology": {
      "summary": "落叶乔木，叶常掌状裂；翅果成对。",
      "key_features": [
        "掌状裂叶",
        "翅果成对",
        "秋季红叶"
      ]
    },
    "ecology": {
      "habitat": "温带森林、园林",
      "diet": "光合自养",
      "behavior": "秋季落叶"
    },
    "facts": [
      "秋季叶色艳丽",
      "加拿大国旗为糖槭叶"
    ],
    "topics": [
      "season"
    ],
    "season": "autumn",
    "images": [
      {
        "type": "overview",
        "caption": "槭树（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/plant/plant-angiosperm-acer.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "plant-angiosperm-salix",
    "domain": "plant",
    "domainLabel": "植物界",
    "taxon": {
      "kingdom": "植物界",
      "phylum": "被子植物门",
      "class": "双子叶植物纲",
      "order": "金虎尾目",
      "family": "杨柳科",
      "genus": "柳属",
      "species": "Salix spp."
    },
    "names": {
      "zh": "柳树",
      "en": "Willow",
      "common": []
    },
    "conservation": {
      "iucn": "无危 (LC)",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "北半球温带"
    ],
    "morphology": {
      "summary": "落叶乔木或灌木，枝条柔韧下垂；叶披针形。",
      "key_features": [
        "柔韧下垂枝",
        "披针形叶",
        "早春飞絮"
      ]
    },
    "ecology": {
      "habitat": "河岸、湿地、园林",
      "diet": "光合自养",
      "behavior": "春季展叶"
    },
    "facts": [
      "枝条可用于编织",
      "柳絮为种子带绒毛"
    ],
    "topics": [
      "season"
    ],
    "season": "spring",
    "images": [
      {
        "type": "overview",
        "caption": "柳树（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/plant/plant-angiosperm-salix.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "plant-angiosperm-betula",
    "domain": "plant",
    "domainLabel": "植物界",
    "taxon": {
      "kingdom": "植物界",
      "phylum": "被子植物门",
      "class": "双子叶植物纲",
      "order": "壳斗目",
      "family": "桦木科",
      "genus": "桦木属",
      "species": "Betula platyphylla"
    },
    "names": {
      "zh": "白桦",
      "en": "Birch",
      "common": []
    },
    "conservation": {
      "iucn": "无危 (LC)",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "欧亚大陆北部"
    ],
    "morphology": {
      "summary": "落叶乔木，树皮白色纸质，可分层剥落；叶三角状卵形。",
      "key_features": [
        "白色纸质树皮",
        "三角状叶",
        "早春开花"
      ]
    },
    "ecology": {
      "habitat": "温带针阔混交林",
      "diet": "光合自养",
      "behavior": "春季展叶"
    },
    "facts": [
      "树皮可用于书写",
      "俄罗斯常见景观树"
    ],
    "topics": [
      "season"
    ],
    "season": "spring",
    "images": [
      {
        "type": "overview",
        "caption": "白桦（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/plant/plant-angiosperm-betula.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "plant-angiosperm-ficus-microcarpa",
    "domain": "plant",
    "domainLabel": "植物界",
    "taxon": {
      "kingdom": "植物界",
      "phylum": "被子植物门",
      "class": "双子叶植物纲",
      "order": "荨麻目",
      "family": "桑科",
      "genus": "榕属",
      "species": "Ficus microcarpa"
    },
    "names": {
      "zh": "榕树",
      "en": "Chinese Banyan",
      "common": []
    },
    "conservation": {
      "iucn": "无危（栽培）",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "中国南方及东南亚"
    ],
    "morphology": {
      "summary": "常绿大乔木，具气生根，独木成林；隐头花序。",
      "key_features": [
        "气生根",
        "独木成林",
        "隐头花序"
      ]
    },
    "ecology": {
      "habitat": "热带亚热带园林",
      "diet": "光合自养",
      "behavior": "全年"
    },
    "facts": [
      "气生根落地后增粗成支柱根",
      "是福州、赣州等市树"
    ],
    "topics": [
      "chinaEndemic"
    ],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "榕树（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/plant/plant-angiosperm-ficus-microcarpa.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "plant-angiosperm-cinnamomum-camphora",
    "domain": "plant",
    "domainLabel": "植物界",
    "taxon": {
      "kingdom": "植物界",
      "phylum": "被子植物门",
      "class": "双子叶植物纲",
      "order": "樟目",
      "family": "樟科",
      "genus": "樟属",
      "species": "Cinnamomum camphora"
    },
    "names": {
      "zh": "樟树",
      "en": "Camphor Tree",
      "common": []
    },
    "conservation": {
      "iucn": "无危（栽培）",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "中国南方"
    ],
    "morphology": {
      "summary": "常绿大乔木，叶革质三出脉，全体芳香；木材可提取樟脑。",
      "key_features": [
        "三出脉革质叶",
        "全体芳香",
        "常绿"
      ]
    },
    "ecology": {
      "habitat": "亚热带山地、园林",
      "diet": "光合自养",
      "behavior": "常绿"
    },
    "facts": [
      "樟脑的传统来源",
      "抗污染，常用行道树"
    ],
    "topics": [
      "chinaEndemic"
    ],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "樟树（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/plant/plant-angiosperm-cinnamomum-camphora.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "plant-angiosperm-populus",
    "domain": "plant",
    "domainLabel": "植物界",
    "taxon": {
      "kingdom": "植物界",
      "phylum": "被子植物门",
      "class": "双子叶植物纲",
      "order": "金虎尾目",
      "family": "杨柳科",
      "genus": "杨属",
      "species": "Populus spp."
    },
    "names": {
      "zh": "杨树",
      "en": "Poplar",
      "common": []
    },
    "conservation": {
      "iucn": "无危 (LC)",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "北半球温带"
    ],
    "morphology": {
      "summary": "落叶乔木，树干通直，叶多为三角状卵形；葇荑花序。",
      "key_features": [
        "通直树干",
        "三角状叶",
        "葇荑花序"
      ]
    },
    "ecology": {
      "habitat": "河岸、平原、人工林",
      "diet": "光合自养",
      "behavior": "春季展叶"
    },
    "facts": [
      "生长快，常用造纸与防护林",
      "春季杨絮为种子"
    ],
    "topics": [
      "season"
    ],
    "season": "spring",
    "images": [
      {
        "type": "overview",
        "caption": "杨树（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/plant/plant-angiosperm-populus.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "plant-angiosperm-hibiscus-syriacus",
    "domain": "plant",
    "domainLabel": "植物界",
    "taxon": {
      "kingdom": "植物界",
      "phylum": "被子植物门",
      "class": "双子叶植物纲",
      "order": "锦葵目",
      "family": "锦葵科",
      "genus": "木槿属",
      "species": "Hibiscus syriacus"
    },
    "names": {
      "zh": "木槿",
      "en": "Rose of Sharon",
      "common": []
    },
    "conservation": {
      "iucn": "无危（栽培）",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "中国原产"
    ],
    "morphology": {
      "summary": "落叶灌木，夏秋开花，花大，花色多样，朝开暮落。",
      "key_features": [
        "夏秋开花",
        "朝开暮落",
        "花色多样"
      ]
    },
    "ecology": {
      "habitat": "园林、庭院",
      "diet": "光合自养",
      "behavior": "夏季至秋季"
    },
    "facts": [
      "韩国国花",
      "一朵花只开一天"
    ],
    "topics": [
      "season"
    ],
    "season": "summer",
    "images": [
      {
        "type": "overview",
        "caption": "木槿（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/plant/plant-angiosperm-hibiscus-syriacus.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "microbe-bacteria-escherichia-coli",
    "domain": "microbe",
    "domainLabel": "微生物",
    "taxon": {
      "kingdom": "细菌界",
      "phylum": "变形菌门",
      "class": "γ-变形菌",
      "order": "肠杆菌目",
      "family": "肠杆菌科",
      "genus": "大肠杆菌属",
      "species": "Escherichia coli"
    },
    "names": {
      "zh": "大肠杆菌",
      "en": "Escherichia coli",
      "common": []
    },
    "conservation": {
      "iucn": "微生物一般不评 IUCN",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "全球",
      "温血动物肠道及环境"
    ],
    "morphology": {
      "summary": "革兰氏阴性杆菌，具鞭毛与菌毛；多数无害，是分子生物学模式生物。",
      "key_features": [
        "杆状细胞",
        "鞭毛",
        "菌毛",
        "拟核与质粒"
      ]
    },
    "ecology": {
      "habitat": "肠道及环境",
      "diet": "兼性厌氧，发酵/呼吸兼能",
      "behavior": "多数无害，部分致病"
    },
    "facts": [
      "长约 1–2 μm",
      "少数致病如 O157:H7",
      "常用作基因工程宿主"
    ],
    "topics": [
      "microscopic"
    ],
    "season": null,
    "images": [
      {
        "type": "cell",
        "caption": "大肠杆菌细胞结构（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/microbe/microbe-bacteria-escherichia-coli.png",
        "hotspots": [
          {
            "x": 0.1,
            "y": 0.5,
            "label": "鞭毛",
            "desc": "细胞一端多根鞭毛，用于游动。"
          },
          {
            "x": 0.5,
            "y": 0.32,
            "label": "菌毛",
            "desc": "菌体表面细毛，用于附着宿主表面。"
          },
          {
            "x": 0.5,
            "y": 0.65,
            "label": "细胞壁/膜",
            "desc": "外层细胞壁与内膜构成杆状细胞边界。"
          },
          {
            "x": 0.55,
            "y": 0.52,
            "label": "拟核/质粒",
            "desc": "内部环状染色体（拟核）与小型环状质粒。"
          }
        ]
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "microbe-fungi-saccharomyces-cerevisiae",
    "domain": "microbe",
    "domainLabel": "微生物",
    "taxon": {
      "kingdom": "真菌界",
      "phylum": "子囊菌门",
      "class": "酵母菌纲",
      "order": "酵母目",
      "family": "酵母科",
      "genus": "酵母菌属",
      "species": "Saccharomyces cerevisiae"
    },
    "names": {
      "zh": "酿酒酵母",
      "en": "Baker's Yeast",
      "common": []
    },
    "conservation": {
      "iucn": "无危（模式生物）",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "全球（栽培环境）",
      "水果表皮、发酵基质"
    ],
    "morphology": {
      "summary": "单细胞真菌，卵圆形；以出芽方式无性繁殖。",
      "key_features": [
        "卵圆形单细胞",
        "出芽生殖",
        "真核模式种"
      ]
    },
    "ecology": {
      "habitat": "含糖基质",
      "diet": "发酵糖类产乙醇与 CO₂",
      "behavior": "兼性厌氧"
    },
    "facts": [
      "面包发酵与酿酒关键微生物",
      "分子生物学与遗传学重要模式生物"
    ],
    "topics": [
      "microscopic"
    ],
    "season": null,
    "images": [
      {
        "type": "cell",
        "caption": "酿酒酵母形态（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/microbe/microbe-fungi-saccharomyces-cerevisiae.png",
        "hotspots": [
          {
            "x": 0.6,
            "y": 0.42,
            "label": "出芽生殖",
            "desc": "母体长出小芽体，成熟后脱落，为典型无性繁殖方式。"
          }
        ]
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "microbe-bacteria-mycobacterium-tuberculosis",
    "domain": "microbe",
    "domainLabel": "微生物",
    "taxon": {
      "kingdom": "细菌界",
      "phylum": "放线菌门",
      "class": "放线菌纲",
      "order": "放线菌目",
      "family": "分枝杆菌科",
      "genus": "分枝杆菌属",
      "species": "Mycobacterium tuberculosis"
    },
    "names": {
      "zh": "结核分枝杆菌",
      "en": "Mycobacterium tuberculosis",
      "common": []
    },
    "conservation": {
      "iucn": "微生物一般不评 IUCN",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "全球",
      "人及其他哺乳动物呼吸道"
    ],
    "morphology": {
      "summary": "细长、略弯曲的杆菌，细胞壁富含脂质，抗酸染色阳性。",
      "key_features": [
        "细长略弯杆菌",
        "抗酸染色阳性",
        "细胞壁富脂质"
      ]
    },
    "ecology": {
      "habitat": "宿主细胞内",
      "diet": "需氧",
      "behavior": "引起结核病，经飞沫传播"
    },
    "facts": [
      "人类结核病主要病原体",
      "耐药株是重大公共卫生挑战"
    ],
    "topics": [
      "microscopic"
    ],
    "season": null,
    "images": [
      {
        "type": "cell",
        "caption": "结核分枝杆菌形态（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/microbe/microbe-bacteria-mycobacterium-tuberculosis.png",
        "hotspots": [
          {
            "x": 0.5,
            "y": 0.5,
            "label": "抗酸杆菌",
            "desc": "细长略弯的杆菌，因细胞壁富脂质而抗酸染色阳性。"
          }
        ]
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "microbe-cyanobacteria-nostoc",
    "domain": "microbe",
    "domainLabel": "微生物",
    "taxon": {
      "kingdom": "细菌界",
      "phylum": "蓝菌门",
      "class": "蓝菌纲",
      "order": "念珠藻目",
      "family": "念珠藻科",
      "genus": "念珠藻属",
      "species": "Nostoc commune"
    },
    "names": {
      "zh": "念珠藻",
      "en": "Nostoc",
      "common": []
    },
    "conservation": {
      "iucn": "无危",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "全球",
      "土壤、苔藓、淡水"
    ],
    "morphology": {
      "summary": "由球形细胞串成念珠状群体，外被胶质鞘；可行光合作用并固氮。",
      "key_features": [
        "念珠状细胞链",
        "胶质鞘",
        "固氮能力"
      ]
    },
    "ecology": {
      "habitat": "土壤/水体",
      "diet": "光合自养 + 固氮",
      "behavior": "耐干旱，遇水恢复"
    },
    "facts": [
      "部分种类可食用如地木耳",
      "能固定大气氮，改善土壤肥力"
    ],
    "topics": [
      "microscopic"
    ],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "念珠藻（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/microbe/microbe-cyanobacteria-nostoc.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "microbe-virus-t4-phage",
    "domain": "microbe",
    "domainLabel": "微生物",
    "taxon": {
      "kingdom": "病毒界",
      "phylum": "有尾噬菌体目",
      "class": "有尾噬菌体科",
      "order": "肌尾噬菌体科",
      "family": "肌尾噬菌体科",
      "genus": "T4 样噬菌体",
      "species": "Escherichia virus T4"
    },
    "names": {
      "zh": "T4 噬菌体",
      "en": "T4 Bacteriophage",
      "common": []
    },
    "conservation": {
      "iucn": "微生物一般不评 IUCN",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "全球",
      "含大肠杆菌等宿主的环境"
    ],
    "morphology": {
      "summary": "感染细菌的病毒；具蛋白质衣壳组成的多面体头部与可收缩的尾鞘。",
      "key_features": [
        "多面体头部",
        "可收缩尾鞘",
        "尾丝吸附"
      ]
    },
    "ecology": {
      "habitat": "宿主细菌内",
      "diet": "—",
      "behavior": "裂解或溶原感染细菌"
    },
    "facts": [
      "专性寄生于细菌",
      "噬菌体疗法用于耐药菌感染探索"
    ],
    "topics": [
      "microscopic"
    ],
    "season": null,
    "images": [
      {
        "type": "virion",
        "caption": "T4 噬菌体结构（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/microbe/microbe-virus-t4-phage.png",
        "hotspots": [
          {
            "x": 0.5,
            "y": 0.4,
            "label": "头部与尾鞘",
            "desc": "蛋白质衣壳构成的头部储存遗传物质，尾鞘可收缩以注入核酸。"
          }
        ]
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "microbe-bacteria-salmonella-enterica",
    "domain": "microbe",
    "domainLabel": "微生物",
    "taxon": {
      "kingdom": "细菌界",
      "phylum": "变形菌门",
      "class": "γ-变形菌",
      "order": "肠杆菌目",
      "family": "肠杆菌科",
      "genus": "沙门氏菌属",
      "species": "Salmonella enterica"
    },
    "names": {
      "zh": "肠道沙门氏菌",
      "en": "Salmonella enterica",
      "common": []
    },
    "conservation": {
      "iucn": "微生物一般不评 IUCN",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "全球",
      "动物肠道及污染食物"
    ],
    "morphology": {
      "summary": "革兰氏阴性杆菌，常引起食物中毒与肠炎；血清型众多。",
      "key_features": [
        "革兰氏阴性杆菌",
        "运动性鞭毛",
        "多种血清型"
      ]
    },
    "ecology": {
      "habitat": "动物肠道、污染食品",
      "diet": "兼性厌氧",
      "behavior": "常见食源性病原体"
    },
    "facts": [
      "常见由未熟蛋肉传播",
      "伤寒沙门氏菌引起肠热症"
    ],
    "topics": [
      "microscopic"
    ],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "肠道沙门氏菌（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/microbe/microbe-bacteria-salmonella-enterica.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "microbe-bacteria-lactobacillus",
    "domain": "microbe",
    "domainLabel": "微生物",
    "taxon": {
      "kingdom": "细菌界",
      "phylum": "厚壁菌门",
      "class": "芽孢杆菌纲",
      "order": "乳杆菌目",
      "family": "乳杆菌科",
      "genus": "乳杆菌属",
      "species": "Lactobacillus spp."
    },
    "names": {
      "zh": "乳杆菌",
      "en": "Lactobacillus",
      "common": []
    },
    "conservation": {
      "iucn": "微生物一般不评 IUCN",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "全球",
      "乳制品、发酵食品、动物肠道"
    ],
    "morphology": {
      "summary": "革兰氏阳性杆菌，发酵糖类产乳酸，广泛用于酸奶、泡菜等发酵。",
      "key_features": [
        "革兰氏阳性",
        "产乳酸",
        "益生菌"
      ]
    },
    "ecology": {
      "habitat": "乳制品、肠道",
      "diet": "发酵糖类产乳酸",
      "behavior": "兼性厌氧"
    },
    "facts": [
      "酸奶发酵核心菌种之一",
      "部分菌株为益生菌"
    ],
    "topics": [
      "microscopic"
    ],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "乳杆菌（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/microbe/microbe-bacteria-lactobacillus.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "microbe-bacteria-staphylococcus-aureus",
    "domain": "microbe",
    "domainLabel": "微生物",
    "taxon": {
      "kingdom": "细菌界",
      "phylum": "厚壁菌门",
      "class": "芽孢杆菌纲",
      "order": "芽孢杆菌目",
      "family": "葡萄球菌科",
      "genus": "葡萄球菌属",
      "species": "Staphylococcus aureus"
    },
    "names": {
      "zh": "金黄色葡萄球菌",
      "en": "Staphylococcus aureus",
      "common": []
    },
    "conservation": {
      "iucn": "微生物一般不评 IUCN",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "全球",
      "人皮肤、鼻腔及环境"
    ],
    "morphology": {
      "summary": "革兰氏阳性球菌，常成簇如葡萄；可致皮肤感染、食物中毒。",
      "key_features": [
        "成簇球菌",
        "革兰氏阳性",
        "产生凝固酶"
      ]
    },
    "ecology": {
      "habitat": "皮肤、黏膜、食品",
      "diet": "需氧或兼性厌氧",
      "behavior": "常见条件致病菌"
    },
    "facts": [
      "部分菌株耐甲氧西林（MRSA）",
      "肠毒素可致食物中毒"
    ],
    "topics": [
      "microscopic"
    ],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "金黄色葡萄球菌（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/microbe/microbe-bacteria-staphylococcus-aureus.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "microbe-bacteria-streptococcus-pneumoniae",
    "domain": "microbe",
    "domainLabel": "微生物",
    "taxon": {
      "kingdom": "细菌界",
      "phylum": "厚壁菌门",
      "class": "芽孢杆菌纲",
      "order": "乳杆菌目",
      "family": "链球菌科",
      "genus": "链球菌属",
      "species": "Streptococcus pneumoniae"
    },
    "names": {
      "zh": "肺炎链球菌",
      "en": "Streptococcus pneumoniae",
      "common": []
    },
    "conservation": {
      "iucn": "微生物一般不评 IUCN",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "全球",
      "人上呼吸道"
    ],
    "morphology": {
      "summary": "革兰氏阳性双球菌或短链，常共栖但可致肺炎、脑膜炎。",
      "key_features": [
        "成双或短链",
        "荚膜抗原分型",
        "革兰氏阳性"
      ]
    },
    "ecology": {
      "habitat": "人上呼吸道",
      "diet": "需氧",
      "behavior": "共栖/致病菌"
    },
    "facts": [
      "疫苗可预防常见血清型",
      "老年人与儿童易感"
    ],
    "topics": [
      "microscopic"
    ],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "肺炎链球菌（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/microbe/microbe-bacteria-streptococcus-pneumoniae.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "microbe-bacteria-bacillus-subtilis",
    "domain": "microbe",
    "domainLabel": "微生物",
    "taxon": {
      "kingdom": "细菌界",
      "phylum": "厚壁菌门",
      "class": "芽孢杆菌纲",
      "order": "芽孢杆菌目",
      "family": "芽孢杆菌科",
      "genus": "芽孢杆菌属",
      "species": "Bacillus subtilis"
    },
    "names": {
      "zh": "枯草芽孢杆菌",
      "en": "Bacillus subtilis",
      "common": []
    },
    "conservation": {
      "iucn": "微生物一般不评 IUCN",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "全球土壤、植物表面"
    ],
    "morphology": {
      "summary": "革兰氏阳性杆菌，能形成耐热芽孢；常用作益生菌与科研模式。",
      "key_features": [
        "产芽孢",
        "革兰氏阳性",
        "模式生物"
      ]
    },
    "ecology": {
      "habitat": "土壤",
      "diet": "腐生/兼性",
      "behavior": "可形成生物膜"
    },
    "facts": [
      "芽孢对热与干燥极强抵抗力",
      "用于生产酶与益生菌"
    ],
    "topics": [
      "microscopic"
    ],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "枯草芽孢杆菌（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/microbe/microbe-bacteria-bacillus-subtilis.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "microbe-bacteria-rhizobium-leguminosarum",
    "domain": "microbe",
    "domainLabel": "微生物",
    "taxon": {
      "kingdom": "细菌界",
      "phylum": "变形菌门",
      "class": "α-变形菌",
      "order": "根瘤菌目",
      "family": "根瘤菌科",
      "genus": "根瘤菌属",
      "species": "Rhizobium leguminosarum"
    },
    "names": {
      "zh": "根瘤菌",
      "en": "Rhizobium leguminosarum",
      "common": []
    },
    "conservation": {
      "iucn": "微生物一般不评 IUCN",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "全球土壤，豆科植物根瘤"
    ],
    "morphology": {
      "summary": "革兰氏阴性杆菌，与豆科植物共生形成根瘤，固定大气氮为氨。",
      "key_features": [
        "根瘤共生",
        "固氮作用",
        "革兰氏阴性杆菌"
      ]
    },
    "ecology": {
      "habitat": "豆科植物根瘤",
      "diet": "从植物获取碳源，固氮供植物",
      "behavior": "共生"
    },
    "facts": [
      "每年为全球农田提供大量生物氮",
      "是生态农业的重要微生物"
    ],
    "topics": [
      "microscopic"
    ],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "根瘤菌（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/microbe/microbe-bacteria-rhizobium-leguminosarum.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "microbe-bacteria-helicobacter-pylori",
    "domain": "microbe",
    "domainLabel": "微生物",
    "taxon": {
      "kingdom": "细菌界",
      "phylum": "变形菌门",
      "class": "ε-变形菌",
      "order": "弯曲菌目",
      "family": "螺杆菌科",
      "genus": "螺杆菌属",
      "species": "Helicobacter pylori"
    },
    "names": {
      "zh": "幽门螺杆菌",
      "en": "Helicobacter pylori",
      "common": []
    },
    "conservation": {
      "iucn": "微生物一般不评 IUCN",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "全球",
      "约半数人口胃内"
    ],
    "morphology": {
      "summary": "螺旋形革兰氏阴性菌，具鞭毛，可定植胃黏膜，与胃溃疡相关。",
      "key_features": [
        "螺旋形",
        "多鞭毛",
        "脲酶阳性"
      ]
    },
    "ecology": {
      "habitat": "人胃黏膜",
      "diet": "微需氧",
      "behavior": "慢性定植"
    },
    "facts": [
      "诺贝尔奖发现其与胃炎、溃疡及胃癌关系",
      "可通过唾液或粪口传播"
    ],
    "topics": [
      "microscopic"
    ],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "幽门螺杆菌（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/microbe/microbe-bacteria-helicobacter-pylori.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "microbe-fungi-candida-albicans",
    "domain": "microbe",
    "domainLabel": "微生物",
    "taxon": {
      "kingdom": "真菌界",
      "phylum": "子囊菌门",
      "class": "酵母菌纲",
      "order": "酵母目",
      "family": "酵母科",
      "genus": "念珠菌属",
      "species": "Candida albicans"
    },
    "names": {
      "zh": "白色念珠菌",
      "en": "Candida albicans",
      "common": []
    },
    "conservation": {
      "iucn": "微生物一般不评 IUCN",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "全球",
      "人皮肤、口腔、肠道黏膜"
    ],
    "morphology": {
      "summary": " opportunistic 酵母样真菌，可形成假菌丝；常见口腔与阴道念珠菌病。",
      "key_features": [
        "酵母样",
        "假菌丝",
        "条件致病"
      ]
    },
    "ecology": {
      "habitat": "人体黏膜",
      "diet": "—",
      "behavior": "条件致病"
    },
    "facts": [
      "正常菌群但免疫低下时致病",
      "可形成生物膜"
    ],
    "topics": [
      "microscopic"
    ],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "白色念珠菌（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/microbe/microbe-fungi-candida-albicans.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "microbe-virus-influenza-a",
    "domain": "microbe",
    "domainLabel": "微生物",
    "taxon": {
      "kingdom": "病毒界",
      "phylum": "—",
      "class": "—",
      "order": "—",
      "family": "正黏病毒科",
      "genus": "甲型流感病毒属",
      "species": "Influenza A virus"
    },
    "names": {
      "zh": "甲型流感病毒",
      "en": "Influenza A virus",
      "common": []
    },
    "conservation": {
      "iucn": "微生物一般不评 IUCN",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "全球",
      "人与动物呼吸道"
    ],
    "morphology": {
      "summary": "分节段 RNA 病毒，表面有血凝素（H）与神经氨酸酶（N），易发生变异。",
      "key_features": [
        "包膜病毒",
        "分节段 RNA",
        "H/N 表面蛋白"
      ]
    },
    "ecology": {
      "habitat": "人/动物呼吸道",
      "diet": "—",
      "behavior": "季节性流行/大流行"
    },
    "facts": [
      "1918 年西班牙流感大流行致数千万人死亡",
      "每年需更新疫苗"
    ],
    "topics": [
      "microscopic"
    ],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "甲型流感病毒（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/microbe/microbe-virus-influenza-a.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "microbe-virus-coronavirus",
    "domain": "microbe",
    "domainLabel": "微生物",
    "taxon": {
      "kingdom": "病毒界",
      "phylum": "—",
      "class": "—",
      "order": "—",
      "family": "冠状病毒科",
      "genus": "冠状病毒属",
      "species": "Severe acute respiratory syndrome coronavirus 2"
    },
    "names": {
      "zh": "冠状病毒",
      "en": "Coronavirus",
      "common": []
    },
    "conservation": {
      "iucn": "微生物一般不评 IUCN",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "全球"
    ],
    "morphology": {
      "summary": "单股正链 RNA 病毒，表面有冠状突起；可致感冒至严重肺炎。",
      "key_features": [
        "冠状突起",
        "单链 RNA",
        "包膜病毒"
      ]
    },
    "ecology": {
      "habitat": "人/动物呼吸道",
      "diet": "—",
      "behavior": "经飞沫传播"
    },
    "facts": [
      "COVID-19 病原体",
      "病毒易发生基因重组"
    ],
    "topics": [
      "microscopic"
    ],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "冠状病毒（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/microbe/microbe-virus-coronavirus.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "microbe-virus-tmv",
    "domain": "microbe",
    "domainLabel": "微生物",
    "taxon": {
      "kingdom": "病毒界",
      "phylum": "—",
      "class": "—",
      "order": "—",
      "family": "烟草花叶病毒科",
      "genus": "烟草花叶病毒属",
      "species": "Tobacco mosaic virus"
    },
    "names": {
      "zh": "烟草花叶病毒",
      "en": "Tobacco Mosaic Virus",
      "common": []
    },
    "conservation": {
      "iucn": "微生物一般不评 IUCN",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "全球",
      "烟草及茄科植物"
    ],
    "morphology": {
      "summary": "杆状 RNA 病毒，是第一个被发现的病毒；可感染烟草等植物。",
      "key_features": [
        "杆状病毒",
        "单链 RNA",
        "植物病毒"
      ]
    },
    "ecology": {
      "habitat": "植物细胞",
      "diet": "—",
      "behavior": "通过接触与机械传播"
    },
    "facts": [
      "历史上首个被结晶的病毒",
      "是植物病毒学经典模式"
    ],
    "topics": [
      "microscopic"
    ],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "烟草花叶病毒（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/microbe/microbe-virus-tmv.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "microbe-protista-amoeba",
    "domain": "microbe",
    "domainLabel": "微生物",
    "taxon": {
      "kingdom": "原生生物界",
      "phylum": "肉鞭毛亚门",
      "class": "—",
      "order": "—",
      "family": "—",
      "genus": "—",
      "species": "Amoeba proteus"
    },
    "names": {
      "zh": "阿米巴",
      "en": "Amoeba",
      "common": []
    },
    "conservation": {
      "iucn": "微生物一般不评 IUCN",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "全球淡水"
    ],
    "morphology": {
      "summary": "单细胞真核生物，以伪足运动与摄食，形态可变。",
      "key_features": [
        "伪足",
        "形态可变",
        "二分裂繁殖"
      ]
    },
    "ecology": {
      "habitat": "淡水池塘、湖泊",
      "diet": "吞噬细菌、藻类",
      "behavior": "独居"
    },
    "facts": [
      "无固定形态，靠伪足运动",
      "是单细胞生物经典观察材料"
    ],
    "topics": [
      "microscopic"
    ],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "阿米巴（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/microbe/microbe-protista-amoeba.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "microbe-protista-paramecium",
    "domain": "microbe",
    "domainLabel": "微生物",
    "taxon": {
      "kingdom": "原生生物界",
      "phylum": "纤毛亚门",
      "class": "—",
      "order": "—",
      "family": "—",
      "genus": "—",
      "species": "Paramecium caudatum"
    },
    "names": {
      "zh": "草履虫",
      "en": "Paramecium",
      "common": []
    },
    "conservation": {
      "iucn": "微生物一般不评 IUCN",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "全球淡水"
    ],
    "morphology": {
      "summary": "单细胞纤毛虫，体形似草鞋，全身覆纤毛，具大核与小核。",
      "key_features": [
        "纤毛运动",
        "草鞋形",
        "大核与小核"
      ]
    },
    "ecology": {
      "habitat": "淡水池塘、溪流",
      "diet": "细菌、藻类等",
      "behavior": "独居"
    },
    "facts": [
      "通过纤毛协调运动",
      "大核管营养，小核管遗传"
    ],
    "topics": [
      "microscopic"
    ],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "草履虫（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/microbe/microbe-protista-paramecium.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "microbe-bacteria-methanogen",
    "domain": "microbe",
    "domainLabel": "微生物",
    "taxon": {
      "kingdom": "古菌界",
      "phylum": "广古菌门",
      "class": "—",
      "order": "甲烷杆菌目",
      "family": "甲烷杆菌科",
      "genus": "—",
      "species": "Methanobacteriales"
    },
    "names": {
      "zh": "产甲烷古菌",
      "en": "Methanogen",
      "common": []
    },
    "conservation": {
      "iucn": "微生物一般不评 IUCN",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "厌氧环境：湿地、反刍动物胃、污水处理"
    ],
    "morphology": {
      "summary": "严格厌氧古菌，通过产甲烷作用生成甲烷（CH₄）。",
      "key_features": [
        "严格厌氧",
        "产甲烷",
        "古菌"
      ]
    },
    "ecology": {
      "habitat": "厌氧湿地、肠道、反应器",
      "diet": "以 H₂/CO₂ 或乙酸等产甲烷",
      "behavior": "厌氧"
    },
    "facts": [
      "反刍动物胃内重要菌群",
      "湿地甲烷排放主要贡献者"
    ],
    "topics": [
      "microscopic"
    ],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "产甲烷古菌（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/microbe/microbe-bacteria-methanogen.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "microbe-bacteria-archaea",
    "domain": "microbe",
    "domainLabel": "微生物",
    "taxon": {
      "kingdom": "古菌界",
      "phylum": "—",
      "class": "—",
      "order": "—",
      "family": "—",
      "genus": "—",
      "species": "Archaea"
    },
    "names": {
      "zh": "古菌",
      "en": "Archaea",
      "common": []
    },
    "conservation": {
      "iucn": "微生物一般不评 IUCN",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "极端环境及普通环境"
    ],
    "morphology": {
      "summary": "与细菌和真核生物并列的第三大域，常生存于极端环境。",
      "key_features": [
        "无核膜",
        "细胞膜脂特殊",
        "极端环境"
      ]
    },
    "ecology": {
      "habitat": "热泉、盐湖、深海、土壤",
      "diet": "化能自养或异养",
      "behavior": "多样"
    },
    "facts": [
      "生活在高温、高盐、强酸环境",
      "16S rRNA 测序揭示其独立域"
    ],
    "topics": [
      "microscopic"
    ],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "古菌（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/microbe/microbe-bacteria-archaea.png",
        "hotspots": []
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "animal-reptile-dino-tyrannosaurus-rex",
    "domain": "animal",
    "domainLabel": "动物界",
    "taxon": {
      "kingdom": "动物界",
      "phylum": "脊索动物门",
      "class": "爬行纲",
      "order": "蜥臀目",
      "family": "暴龙科",
      "genus": "霸王龙属",
      "species": "Tyrannosaurus rex"
    },
    "names": {
      "zh": "霸王龙",
      "en": "Tyrannosaurus rex",
      "common": []
    },
    "conservation": {
      "iucn": "灭绝 (EX)",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "晚白垩世·北美洲"
    ],
    "morphology": {
      "summary": "巨型双足肉食恐龙，头颅巨大，前肢极短，后肢粗壮，长尾用于平衡。",
      "key_features": [
        "巨大头颅与利齿",
        "极短前肢",
        "粗壮后肢与长尾"
      ]
    },
    "ecology": {
      "habitat": "河流平原与森林",
      "diet": "其他恐龙（顶级掠食者）",
      "behavior": "独居或小规模群猎"
    },
    "facts": [
      "体长可达约 12 m，体重约 8 t",
      "前肢仅二指，功能至今存疑"
    ],
    "topics": [
      "endangered"
    ],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "霸王龙形态（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/animal/animal-reptile-dino-tyrannosaurus-rex.png"
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "animal-reptile-dino-triceratops-horridus",
    "domain": "animal",
    "domainLabel": "动物界",
    "taxon": {
      "kingdom": "动物界",
      "phylum": "脊索动物门",
      "class": "爬行纲",
      "order": "鸟臀目",
      "family": "角龙科",
      "genus": "三角龙属",
      "species": "Triceratops horridus"
    },
    "names": {
      "zh": "三角龙",
      "en": "Triceratops",
      "common": []
    },
    "conservation": {
      "iucn": "灭绝 (EX)",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "晚白垩世·北美洲"
    ],
    "morphology": {
      "summary": "四足角龙类，头部具巨大颈盾与三只角（鼻上一只、眼上两只），喙似鹦鹉。",
      "key_features": [
        "颈盾（头盾）",
        "三只角",
        "鹦鹉状喙"
      ]
    },
    "ecology": {
      "habitat": "开阔林地与平原",
      "diet": "低矮蕨类与苏铁",
      "behavior": "群居，以颈盾与角御敌"
    },
    "facts": [
      "颈盾可能用于求偶展示",
      "与霸王龙同期，常为其猎物"
    ],
    "topics": [
      "endangered"
    ],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "三角龙形态（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/animal/animal-reptile-dino-triceratops-horridus.png"
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "animal-reptile-dino-stegosaurus-stenops",
    "domain": "animal",
    "domainLabel": "动物界",
    "taxon": {
      "kingdom": "动物界",
      "phylum": "脊索动物门",
      "class": "爬行纲",
      "order": "鸟臀目",
      "family": "剑龙科",
      "genus": "剑龙属",
      "species": "Stegosaurus stenops"
    },
    "names": {
      "zh": "剑龙",
      "en": "Stegosaurus",
      "common": []
    },
    "conservation": {
      "iucn": "灭绝 (EX)",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "晚侏罗世·北美洲"
    ],
    "morphology": {
      "summary": "四足装甲恐龙，背部有两列大型骨板，尾端具四根尾刺（thagomizer）。",
      "key_features": [
        "背部骨板",
        "尾刺（尾槌）",
        "小巧头部与大脑"
      ]
    },
    "ecology": {
      "habitat": "半干旱平原",
      "diet": "低矮植物",
      "behavior": "群居，以尾刺御敌"
    },
    "facts": [
      "脑容量极小，约核桃大小",
      "骨板可能用于体温调节与展示"
    ],
    "topics": [
      "endangered"
    ],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "剑龙形态（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/animal/animal-reptile-dino-stegosaurus-stenops.png"
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "animal-reptile-dino-brachiosaurus-altithorax",
    "domain": "animal",
    "domainLabel": "动物界",
    "taxon": {
      "kingdom": "动物界",
      "phylum": "脊索动物门",
      "class": "爬行纲",
      "order": "蜥臀目",
      "family": "腕龙科",
      "genus": "腕龙属",
      "species": "Brachiosaurus altithorax"
    },
    "names": {
      "zh": "腕龙",
      "en": "Brachiosaurus",
      "common": []
    },
    "conservation": {
      "iucn": "灭绝 (EX)",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "晚侏罗世·北美洲"
    ],
    "morphology": {
      "summary": "巨型蜥脚类，前肢长于后肢，颈极长，头小，体形似长颈鹿。",
      "key_features": [
        "极长颈部",
        "前肢长于后肢",
        "小头与庞大躯干"
      ]
    },
    "ecology": {
      "habitat": "泛滥平原与疏林",
      "diet": "高大植物枝叶",
      "behavior": "群居，迁徙取食"
    },
    "facts": [
      "可够到约 9 m 高树冠",
      "体重可达 30 t 以上"
    ],
    "topics": [
      "endangered"
    ],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "腕龙形态（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/animal/animal-reptile-dino-brachiosaurus-altithorax.png"
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "animal-reptile-dino-velociraptor-mongoliensis",
    "domain": "animal",
    "domainLabel": "动物界",
    "taxon": {
      "kingdom": "动物界",
      "phylum": "脊索动物门",
      "class": "爬行纲",
      "order": "蜥臀目",
      "family": "驰龙科",
      "genus": "伶盗龙属",
      "species": "Velociraptor mongoliensis"
    },
    "names": {
      "zh": "伶盗龙",
      "en": "Velociraptor",
      "common": []
    },
    "conservation": {
      "iucn": "灭绝 (EX)",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "晚白垩世·蒙古与中亚"
    ],
    "morphology": {
      "summary": "小型驰龙类，全身覆羽，尾长僵硬，后足具抬起的镰刀状第二趾爪。",
      "key_features": [
        "全身羽毛覆盖",
        "镰刀状趾爪",
        "僵硬长尾（羽柄骨）"
      ]
    },
    "ecology": {
      "habitat": "沙漠与绿洲",
      "diet": "小型恐龙与爬行动物",
      "behavior": "可能小群协作狩猎"
    },
    "facts": [
      "化石证实其全身被羽",
      "镰刀爪用于固定猎物"
    ],
    "topics": [
      "endangered"
    ],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "伶盗龙形态（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/animal/animal-reptile-dino-velociraptor-mongoliensis.png"
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "animal-reptile-dino-spinosaurus-aegyptiacus",
    "domain": "animal",
    "domainLabel": "动物界",
    "taxon": {
      "kingdom": "动物界",
      "phylum": "脊索动物门",
      "class": "爬行纲",
      "order": "蜥臀目",
      "family": "棘龙科",
      "genus": "棘龙属",
      "species": "Spinosaurus aegyptiacus"
    },
    "names": {
      "zh": "棘龙",
      "en": "Spinosaurus",
      "common": []
    },
    "conservation": {
      "iucn": "灭绝 (EX)",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "白垩纪·北非"
    ],
    "morphology": {
      "summary": "大型掠食恐龙，背部具高大神经棘形成的帆状结构，吻长似鳄，半水生。",
      "key_features": [
        "背帆（神经棘）",
        "鳄状长吻",
        "半水生习性"
      ]
    },
    "ecology": {
      "habitat": "河流与三角洲",
      "diet": "鱼类与中小型恐龙",
      "behavior": "半水生，擅长游泳"
    },
    "facts": [
      "已知最大的肉食恐龙之一",
      "背帆可能用于散热与展示"
    ],
    "topics": [
      "endangered"
    ],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "棘龙形态（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/animal/animal-reptile-dino-spinosaurus-aegyptiacus.png"
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "animal-mammal-connochaetes-taurinus",
    "domain": "animal",
    "domainLabel": "动物界",
    "taxon": {
      "kingdom": "动物界",
      "phylum": "脊索动物门",
      "class": "哺乳纲",
      "order": "偶蹄目",
      "family": "牛科",
      "genus": "角马属",
      "species": "Connochaetes taurinus"
    },
    "names": {
      "zh": "角马",
      "en": "Blue Wildebeest",
      "common": []
    },
    "conservation": {
      "iucn": "无危 (LC)",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "非洲东部与南部草原"
    ],
    "morphology": {
      "summary": "牛科羚羊状有蹄类，具弯曲尖角与鬃毛，常大规模迁徙。",
      "key_features": [
        "弯曲尖角",
        "肩高臀低",
        "大规模迁徙"
      ]
    },
    "ecology": {
      "habitat": "热带草原",
      "diet": "禾草",
      "behavior": "集群迁徙（与斑马、瞪羚混群）"
    },
    "facts": [
      "塞伦盖蒂年迁徙超百万头",
      "幼崽出生后数分钟即能奔跑"
    ],
    "topics": [],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "角马形态（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/animal/animal-mammal-connochaetes-taurinus.png"
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "animal-mammal-pantholops-hodgsonii",
    "domain": "animal",
    "domainLabel": "动物界",
    "taxon": {
      "kingdom": "动物界",
      "phylum": "脊索动物门",
      "class": "哺乳纲",
      "order": "偶蹄目",
      "family": "牛科",
      "genus": "藏羚属",
      "species": "Pantholops hodgsonii"
    },
    "names": {
      "zh": "藏羚羊",
      "en": "Tibetan Antelope",
      "common": []
    },
    "conservation": {
      "iucn": "近危 (NT)",
      "cites": "—",
      "cn": "国家一级保护野生动物"
    },
    "distribution": [
      "中国·青藏高原",
      "印度·拉达克"
    ],
    "morphology": {
      "summary": "高原羚羊，雄羊具细长环状角，被毛浅棕；适应高寒缺氧。",
      "key_features": [
        "细长环状角",
        "浅棕被毛",
        "高原适应"
      ]
    },
    "ecology": {
      "habitat": "青藏高原高寒草甸",
      "diet": "禾草与苔草",
      "behavior": "季节性迁徙（产羔）"
    },
    "facts": [
      "迁徙至卓乃湖产羔",
      "羊绒（沙图什）曾致盗猎危机"
    ],
    "topics": [
      "chinaEndemic",
      "endangered"
    ],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "藏羚羊形态（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/animal/animal-mammal-pantholops-hodgsonii.png"
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "animal-mammal-bison-bison",
    "domain": "animal",
    "domainLabel": "动物界",
    "taxon": {
      "kingdom": "动物界",
      "phylum": "脊索动物门",
      "class": "哺乳纲",
      "order": "偶蹄目",
      "family": "牛科",
      "genus": "野牛属",
      "species": "Bison bison"
    },
    "names": {
      "zh": "美洲野牛",
      "en": "American Bison",
      "common": []
    },
    "conservation": {
      "iucn": "近危 (NT)",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "北美洲大平原"
    ],
    "morphology": {
      "summary": "大型牛科，肩背隆起，头胸被厚密深褐长毛，前额具短角。",
      "key_features": [
        "肩背隆起",
        "厚密长毛",
        "短而粗的角"
      ]
    },
    "ecology": {
      "habitat": "北美草原",
      "diet": "草",
      "behavior": "群居，迁徙"
    },
    "facts": [
      "曾近灭绝，经保护恢复",
      "是美国国兽"
    ],
    "topics": [],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "美洲野牛形态（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/animal/animal-mammal-bison-bison.png"
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "animal-mammal-phacochoerus-africanus",
    "domain": "animal",
    "domainLabel": "动物界",
    "taxon": {
      "kingdom": "动物界",
      "phylum": "脊索动物门",
      "class": "哺乳纲",
      "order": "偶蹄目",
      "family": "猪科",
      "genus": "疣猪属",
      "species": "Phacochoerus africanus"
    },
    "names": {
      "zh": "疣猪",
      "en": "Warthog",
      "common": []
    },
    "conservation": {
      "iucn": "无危 (LC)",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "撒哈拉以南非洲"
    ],
    "morphology": {
      "summary": "非洲野猪，面部具疣状突起，雄性上犬齿外翘成獠牙，体被稀毛。",
      "key_features": [
        "面部疣突",
        "上翘獠牙",
        "稀毛与背鬃"
      ]
    },
    "ecology": {
      "habitat": "草原与疏林",
      "diet": "草、根、块茎",
      "behavior": "掘食，遇险入洞"
    },
    "facts": [
      "常跪前肢啃草",
      "獠牙用于争斗与防御"
    ],
    "topics": [],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "疣猪形态（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/animal/animal-mammal-phacochoerus-africanus.png"
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "animal-mammal-crocuta-crocuta",
    "domain": "animal",
    "domainLabel": "动物界",
    "taxon": {
      "kingdom": "动物界",
      "phylum": "脊索动物门",
      "class": "哺乳纲",
      "order": "食肉目",
      "family": "鬣狗科",
      "genus": "斑鬣狗属",
      "species": "Crocuta crocuta"
    },
    "names": {
      "zh": "斑鬣狗",
      "en": "Spotted Hyena",
      "common": []
    },
    "conservation": {
      "iucn": "无危 (LC)",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "撒哈拉以南非洲"
    ],
    "morphology": {
      "summary": "大型鬣狗，体被斑点，背线前高后低，头大颌强，群居母系。",
      "key_features": [
        "斑点被毛",
        "倾斜背部",
        "强大颌骨"
      ]
    },
    "ecology": {
      "habitat": "草原与疏林",
      "diet": "腐肉与猎物",
      "behavior": "母系氏族群居"
    },
    "facts": [
      "咬合力极强，可碎骨",
      "雌性大于雄性，社会主导"
    ],
    "topics": [],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "斑鬣狗形态（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/animal/animal-mammal-crocuta-crocuta.png"
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "animal-mammal-gazella-subgutturosa",
    "domain": "animal",
    "domainLabel": "动物界",
    "taxon": {
      "kingdom": "动物界",
      "phylum": "脊索动物门",
      "class": "哺乳纲",
      "order": "偶蹄目",
      "family": "牛科",
      "genus": "羚羊属",
      "species": "Gazella subgutturosa"
    },
    "names": {
      "zh": "瞪羚",
      "en": "Gazelle",
      "common": []
    },
    "conservation": {
      "iucn": "易危 (VU)",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "非洲与亚洲草原、荒漠"
    ],
    "morphology": {
      "summary": "纤细敏捷的羚羊，具细长直角与面部深色条纹，善跳跃奔跑。",
      "key_features": [
        "细长直角",
        "面部条纹",
        "弹跳奔跑（Pronking）"
      ]
    },
    "ecology": {
      "habitat": "草原与半荒漠",
      "diet": "草与嫩叶",
      "behavior": "小群，高速逃逸"
    },
    "facts": [
      "受惊会垂直弹跳警示同伴",
      "是草原顶级掠食者的重要猎物"
    ],
    "topics": [],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "瞪羚形态（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/animal/animal-mammal-gazella-subgutturosa.png"
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "animal-mammal-tursiops-truncatus",
    "domain": "animal",
    "domainLabel": "动物界",
    "taxon": {
      "kingdom": "动物界",
      "phylum": "脊索动物门",
      "class": "哺乳纲",
      "order": "鲸偶蹄目",
      "family": "海豚科",
      "genus": "宽吻海豚属",
      "species": "Tursiops truncatus"
    },
    "names": {
      "zh": "宽吻海豚",
      "en": "Bottlenose Dolphin",
      "common": []
    },
    "conservation": {
      "iucn": "无危 (LC)",
      "cites": "—",
      "cn": "国家二级保护野生动物"
    },
    "distribution": [
      "全球温带热带海域"
    ],
    "morphology": {
      "summary": "流线型灰鲸类，腹部色浅，具短喙；高度智能，声呐发达。",
      "key_features": [
        "流线型躯体",
        "短喙与额隆",
        "回声定位"
      ]
    },
    "ecology": {
      "habitat": "近海与河口",
      "diet": "鱼类与乌贼",
      "behavior": "群居，活跃跃水"
    },
    "facts": [
      "用哨声与咔哒声交流",
      "具自我识别与学习能力"
    ],
    "topics": [],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "宽吻海豚形态（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/animal/animal-mammal-tursiops-truncatus.png"
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "animal-mammal-orcinus-orca",
    "domain": "animal",
    "domainLabel": "动物界",
    "taxon": {
      "kingdom": "动物界",
      "phylum": "脊索动物门",
      "class": "哺乳纲",
      "order": "鲸偶蹄目",
      "family": "海豚科",
      "genus": "虎鲸属",
      "species": "Orcinus orca"
    },
    "names": {
      "zh": "虎鲸",
      "en": "Orca",
      "common": []
    },
    "conservation": {
      "iucn": "无危 (LC)",
      "cites": "—",
      "cn": "国家二级保护野生动物"
    },
    "distribution": [
      "全球大洋"
    ],
    "morphology": {
      "summary": "黑白分明的大型齿鲸，眼后具白色眼斑，背鳍高耸；顶级掠食者。",
      "key_features": [
        "黑白体色",
        "高耸背鳍",
        "白色眼斑"
      ]
    },
    "ecology": {
      "habitat": "全球海域",
      "diet": "鱼类、海豹、鲸类",
      "behavior": "母系家族群居，协作狩猎"
    },
    "facts": [
      "不同种群有独特方言与猎食文化",
      "大脑体积居动物前列"
    ],
    "topics": [],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "虎鲸形态（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/animal/animal-mammal-orcinus-orca.png"
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "animal-mammal-phoca-vitulina",
    "domain": "animal",
    "domainLabel": "动物界",
    "taxon": {
      "kingdom": "动物界",
      "phylum": "脊索动物门",
      "class": "哺乳纲",
      "order": "食肉目",
      "family": "海豹科",
      "genus": "斑海豹属",
      "species": "Phoca vitulina"
    },
    "names": {
      "zh": "斑海豹",
      "en": "Harbor Seal",
      "common": []
    },
    "conservation": {
      "iucn": "无危 (LC)",
      "cites": "—",
      "cn": "国家二级保护野生动物"
    },
    "distribution": [
      "北半球温带沿海"
    ],
    "morphology": {
      "summary": "鳍足类海兽，被毛灰带深斑，头圆，前鳍短，后肢为尾状尾鳍。",
      "key_features": [
        "斑点被毛",
        "圆头短鳍",
        "水下可缩鼻"
      ]
    },
    "ecology": {
      "habitat": "海岸与河口",
      "diet": "鱼类、甲壳类",
      "behavior": "独居或小群，上岸休息"
    },
    "facts": [
      "潜水可达约 100 m",
      "幼崽出生即具白色绒毛"
    ],
    "topics": [],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "斑海豹形态（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/animal/animal-mammal-phoca-vitulina.png"
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "animal-mammal-enhydra-lutris",
    "domain": "animal",
    "domainLabel": "动物界",
    "taxon": {
      "kingdom": "动物界",
      "phylum": "脊索动物门",
      "class": "哺乳纲",
      "order": "食肉目",
      "family": "鼬科",
      "genus": "海獭属",
      "species": "Enhydra lutris"
    },
    "names": {
      "zh": "海獭",
      "en": "Sea Otter",
      "common": []
    },
    "conservation": {
      "iucn": "濒危 (EN)",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "北太平洋沿岸"
    ],
    "morphology": {
      "summary": "最小海洋哺乳类之一，密毛褐色，仰浮水面，以腹为砧用石砸贝。",
      "key_features": [
        "极密绒毛（不靠脂肪保暖）",
        "仰浮用工具",
        "扁平尾"
      ]
    },
    "ecology": {
      "habitat": "近岸海藻林",
      "diet": "海胆、贝类、蟹",
      "behavior": "仰泳，群聚（raft）"
    },
    "facts": [
      "毛发密度居哺乳动物之最",
      "用石块敲开贝类"
    ],
    "topics": [],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "海獭形态（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/animal/animal-mammal-enhydra-lutris.png"
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "animal-fish-rhincodon-typus",
    "domain": "animal",
    "domainLabel": "动物界",
    "taxon": {
      "kingdom": "动物界",
      "phylum": "脊索动物门",
      "class": "软骨鱼纲",
      "order": "须鲨目",
      "family": "鲸鲨科",
      "genus": "鲸鲨属",
      "species": "Rhincodon typus"
    },
    "names": {
      "zh": "鲸鲨",
      "en": "Whale Shark",
      "common": []
    },
    "conservation": {
      "iucn": "濒危 (EN)",
      "cites": "—",
      "cn": "国家二级保护野生动物"
    },
    "distribution": [
      "全球热带温带大洋"
    ],
    "morphology": {
      "summary": "现存最大鱼类，体具淡色斑点与脊线，口宽位于前端，滤食性。",
      "key_features": [
        "巨大体型（滤食）",
        "淡色斑点",
        "宽前端口"
      ]
    },
    "ecology": {
      "habitat": "开阔大洋",
      "diet": "浮游生物、小鱼",
      "behavior": "独游或聚食，迁徙"
    },
    "facts": [
      "可长达约 18 m",
      "虽大却以浮游生物为食"
    ],
    "topics": [],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "鲸鲨形态（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/animal/animal-fish-rhincodon-typus.png"
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "animal-invertebrate-anthozoa-scleractinia",
    "domain": "animal",
    "domainLabel": "动物界",
    "taxon": {
      "kingdom": "动物界",
      "phylum": "脊索动物门",
      "class": "刺胞动物门",
      "order": "珊瑚虫纲",
      "family": "石珊瑚目",
      "genus": "—",
      "species": "Anthozoa / Scleractinia"
    },
    "names": {
      "zh": "造礁珊瑚",
      "en": "Reef-building Coral",
      "common": []
    },
    "conservation": {
      "iucn": "易危 (VU)",
      "cites": "—",
      "cn": "—"
    },
    "distribution": [
      "全球热带浅海"
    ],
    "morphology": {
      "summary": "群居刺胞动物，由无数珊瑚虫分泌碳酸钙构成骨骼，堆积成礁。",
      "key_features": [
        "群体分泌钙质骨骼",
        "共生虫黄藻",
        "艳丽形态"
      ]
    },
    "ecology": {
      "habitat": "热带清澈浅海",
      "diet": "虫黄藻光合 + 浮游生物",
      "behavior": "固着，世代堆积成礁"
    },
    "facts": [
      "与虫黄藻共生获取能量",
      "全球珊瑚礁养活约 1/4 海洋物种"
    ],
    "topics": [],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "造礁珊瑚形态（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/animal/animal-invertebrate-anthozoa-scleractinia.png"
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  },
  {
    "id": "animal-mammal-cervus-nippon",
    "domain": "animal",
    "domainLabel": "动物界",
    "taxon": {
      "kingdom": "动物界",
      "phylum": "脊索动物门",
      "class": "哺乳纲",
      "order": "偶蹄目",
      "family": "鹿科",
      "genus": "鹿属",
      "species": "Cervus nippon"
    },
    "names": {
      "zh": "梅花鹿",
      "en": "Sika Deer",
      "common": []
    },
    "conservation": {
      "iucn": "无危 (LC)",
      "cites": "—",
      "cn": "国家一级保护野生动物"
    },
    "distribution": [
      "中国东部与中部",
      "日本",
      "朝鲜半岛",
      "俄罗斯远东"
    ],
    "morphology": {
      "summary": "中型鹿类，雄鹿具分叉实角，体棕黄色并密布白色梅花状斑点，四肢细长，尾短。",
      "key_features": [
        "雄鹿分叉实角（每年脱落重长）",
        "白色梅花状斑点",
        "棕黄被毛与细长四肢",
        "短尾"
      ]
    },
    "ecology": {
      "habitat": "针阔混交林、林缘与山地灌丛",
      "diet": "草、嫩叶、树皮、果实与菌类",
      "behavior": "独居或小群，晨昏活动，善奔跑跳跃，受惊鸣叫"
    },
    "facts": [
      "雄鹿角每年春季脱落、夏季重新生长并带茸（鹿茸），骨化后脱皮",
      "白色斑点形似梅花，故名；幼鹿斑点尤为明显",
      "发情期雄鹿以鸣叫与角斗争夺配偶"
    ],
    "topics": [],
    "season": null,
    "images": [
      {
        "type": "overview",
        "caption": "梅花鹿形态（AI 生成示意图，非实拍）",
        "illustration": true,
        "src": "assets/img/animal/animal-mammal-cervus-nippon.png"
      }
    ],
    "references": [],
    "license": "示意图由本平台绘制或 AI 生成（CC BY 4.0 / 标注 AI 生成）；文本待权威源核对。"
  }
];
