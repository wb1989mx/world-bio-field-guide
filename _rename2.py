import os, shutil

src = r"D:\.workbuddy1\可视化工具\生物阅读平台策划\MVP原型\生物图鉴\assets\img\microbe"
base = r"D:\.workbuddy1\可视化工具\生物阅读平台策划\MVP原型\生物图鉴\assets\img"

renames = {
    "An_educational_illustration_of_2026-10-16T10-37-12.png": "microbe-bacteria-mycobacterium-tuberculosis.png",
    "An_educational_illustration_of_2026-10-16T10-37-13.png": "microbe-fungi-saccharomyces-cerevisiae.png",
}

for old, new in renames.items():
    old_path = os.path.join(src, old)
    new_path = os.path.join(base, "microbe", new)
    if os.path.exists(old_path):
        shutil.move(old_path, new_path)
        print("Moved", old, "->", new)
    else:
        print("Missing", old)
