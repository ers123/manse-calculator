# 🚀 GitHub로 Push하기

## 상황
이 프로젝트는 이미 Git으로 초기화되어 있습니다.
당신의 로컬 컴퓨터에서 다운로드받은 후, 다음 명령어를 실행하면 됩니다.

## 단계별 가이드

### 1단계: 터미널에서 폴더로 이동
```bash
cd /path/to/mansae-calculator
```

### 2단계: Git 사용자 설정 (선택사항 - 이미 설정되었을 수 있음)
```bash
git config user.name "ers123"
git config user.email "your-email@example.com"
```

### 3단계: 원격 저장소 설정
```bash
git remote add origin https://github.com/ers123/manse-calculator.git
```

### 4단계: main 브랜치로 이름 변경
```bash
git branch -M main
```

### 5단계: GitHub로 Push
```bash
git push -u origin main
```

**인증 입력:**
- Username: `ers123`
- Password: Personal Access Token 입력

### 6단계: GitHub Pages 활성화
1. https://github.com/ers123/manse-calculator 접속
2. Settings → Pages
3. "Deploy from a branch" 선택
4. Branch: `main` / Folder: `/ (root)` 선택
5. Save 클릭

---

## ✅ 완료 확인

1-2분 후 다음 주소에서 라이브 만세력 계산기 확인:
```
https://ers123.github.io/manse-calculator/
```

---

## 🔗 주요 링크

- GitHub 저장소: https://github.com/ers123/manse-calculator
- 라이브 사이트: https://ers123.github.io/manse-calculator
- README: 이 폴더의 README.md 참고

---

## 📝 포함된 파일 확인

Push 전에 다음 파일들이 있는지 확인:
```
✅ index.html
✅ mansae.js
✅ display.js
✅ dist/korean-lunar-calendar.min.js
✅ README.md
✅ QUICKSTART.md
✅ package.json
✅ .gitignore
✅ ... 기타 파일들
```

---

## ❓ 문제 해결

### "fatal: not a git repository" 에러
```bash
# 폴더 내에 .git이 없는 경우:
git init
git add .
git commit -m "Initial commit: 사주 만세력 계산기 v1.0"
```

### "Permission denied" 에러
Personal Access Token을 사용했는지 확인:
- Username: `ers123`
- Password: Personal Access Token (NOT your regular password)

### GitHub Pages가 안 나타남
Settings → Pages에서 Branch가 `main`이고 Folder가 `/ (root)`인지 확인

---

**준비 완료! 이제 Push하세요! 🚀**
