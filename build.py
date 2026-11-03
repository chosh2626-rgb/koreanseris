"""src/template.html 에 src/engine.js 를 끼워 넣어 index.html 을 만듭니다."""
from pathlib import Path

root = Path(__file__).parent
tpl = (root / "src" / "template.html").read_text(encoding="utf-8")
eng = (root / "src" / "engine.js").read_text(encoding="utf-8")
(root / "index.html").write_text(tpl.replace("/*__ENGINE__*/", eng), encoding="utf-8")
print("index.html 생성 완료")
