import os, shutil

src = r"D:\.workbuddy1\可视化工具\生物阅读平台策划\MVP原型\生物图鉴\assets\img\microbe"
base = r"D:\.workbuddy1\可视化工具\生物阅读平台策划\MVP原型\生物图鉴\assets\img"

map = {
    "scientifically_accurate_educ": "animal/animal-mammal-ailuropoda-melanoleuca.png",
    "Single_ginkgo": "plant/plant-ginkgophyta-ginkgo-biloba.png",
    "educational_scientific_illu": "microbe/microbe-bacteria-escherichia-coli.png",
    "scientifically_accurate_illu": "animal/animal-mammal-panthera-tigris-altaica.png",
    "blue_whale": "animal/animal-mammal-balaenoptera-musculus.png",
    "crested_i": "animal/animal-bird-nipponia-nippon.png",
    "tree_peon": "plant/plant-angiosperm-paeonia-suffruticosa.png",
    "sacred_lo": "plant/plant-angiosperm-nelumbo-nucifera.png",
    "dawn_redw": "plant/plant-ginkgophyta-metasequoia-glyptostroboides.png",
    "Saccharomyces": "microbe/microbe-fungi-saccharomyces-cerevisiae.png",
    "Mycobacterium": "microbe/microbe-bacteria-mycobacterium-tuberculosis.png",
    "bacteriophage": "microbe/microbe-virus-t4-phage.png",
}

for f in sorted(os.listdir(src)):
    if not f.lower().endswith(".png"):
        continue
    for k, target in map.items():
        if k.lower() in f.lower():
            dest = os.path.join(base, target)
            shutil.move(os.path.join(src, f), dest)
            print("Moved", f, "->", target)
            break
