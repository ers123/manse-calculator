# 🚀 GitHub 업로드 가이드

이미 모든 파일이 준비되어 있습니다. 당신의 GitHub 계정에서 몇 가지만 하면 됩니다!

## 방법 1: GitHub 웹 인터페이스로 업로드 (가장 간단)

### 1단계: GitHub에서 새 저장소 생성
1. https://github.com/new 접속
2. Repository name: `manse-calculator`
3. Description: `사주 만세력 계산기 - 웹 기반 정확한 음양력 변환 및 사주 분석`
4. Public 선택
5. ✅ Create repository

### 2단계: 파일 업로드
1. 새로 만든 저장소의 "Add file" 클릭
2. "Upload files" 선택
3. 다음 파일들을 끌어다 놓기:
   ```
   - index.html
   - mansae.js
   - display.js
   - package.json
   - package-lock.json
   - .gitignore
   - README.md
   - QUICKSTART.md
   - DOWNLOAD.md
   - FILES.md
   - setup.sh
   - dist/korean-lunar-calendar.min.js
   ```
4. Commit message: "Initial commit: 사주 만세력 계산기 v1.0"
5. "Commit changes" 클릭

### 3단계: GitHub Pages 활성화 (무료 호스팅)
1. 저장소의 Settings 클릭
2. 왼쪽에서 "Pages" 선택
3. "Deploy from a branch" 선택
4. Branch: main / folder: / (root)
5. Save 클릭

→ 완료! 이제 https://ers123.github.io/manse-calculator/ 에서 접속 가능

---

## 방법 2: 터미널/Git으로 업로드 (권장)

### 1단계: GitHub에서 새 저장소 생성
1. https://github.com/new 접속
2. Repository name: `manse-calculator`
3. Public 선택
4. ✅ Create repository

### 2단계: 로컬에서 푸시
```bash
# 현재 디렉토리로 이동
cd /path/to/mansae-calculator

# GitHub 원격 저장소 추가
git remote add origin https://github.com/ers123/manse-calculator.git

# main 브랜치로 변경
git branch -M main

# 푸시
git push -u origin main
```

### 3단계: GitHub Pages 활성화
1. 저장소의 Settings 클릭
2. 왼쪽에서 "Pages" 선택
3. "Deploy from a branch" 선택
4. Branch: main / folder: / (root)
5. Save 클릭

---

## 방법 3: GitHub Desktop 앱으로 업로드

1. [GitHub Desktop](https://desktop.github.com/) 다운로드 및 설치
2. "Add" → "Create New Repository"
3. Name: `manse-calculator`
4. Local Path: 파일이 있는 폴더 선택
5. "Create Repository"
6. "Publish repository" 클릭
7. "Push" 클릭

---

## ✅ 확인 사항

업로드 후 다음을 확인하세요:

```
https://github.com/ers123/manse-calculator/
├── ✅ index.html
├── ✅ mansae.js
├── ✅ display.js
├── ✅ dist/
├── ✅ README.md
├── ✅ QUICKSTART.md
└── ... 기타 파일들
```

---

## 🌐 GitHub Pages 접속

활성화 후 약 1-2분 후에:

```
https://ers123.github.io/manse-calculator/
```

에서 라이브 만세력 계산기 접속 가능!

---

## 💡 Personal Access Token 사용 (Git 푸시 시)

만약 터미널에서 git push가 실패하면:

1. GitHub 프로필 → Settings → Developer settings → Personal access tokens
2. "Generate new token" 클릭
3. Scope: repo 선택
4. Generate token
5. 토큰 복사

그 다음:
```bash
git push -u origin main
# Username: your-github-username
# Password: 위에서 복사한 token
```

---

## 📞 문제 해결

**Q: Push가 안 됩니다**
A: Personal Access Token을 사용하세요 (위의 "💡 Personal Access Token" 참고)

**Q: GitHub Pages가 작동 안 합니다**
A: Settings → Pages에서 "Branch: main / folder: / (root)" 확인

**Q: 파일이 보이지 않습니다**
A: GitHub 페이지를 새로고침하세요 (Cmd+Shift+R 또는 Ctrl+Shift+R)

---

**완료되면 이 링크로 확인:**
https://github.com/ers123/manse-calculator

**라이브 사이트:**
https://ers123.github.io/manse-calculator
