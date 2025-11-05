# 📥 다운로드 및 배포 가이드

## 방법 1: GitHub 클론 (권장)

```bash
git clone https://github.com/yourusername/mansae-calculator.git
cd mansae-calculator
npm run web
```

## 방법 2: ZIP 다운로드

1. GitHub에서 "Code" → "Download ZIP" 클릭
2. 압축 해제
3. `index.html`을 브라우저에서 열기

## 방법 3: GitHub Pages (무료 호스팅)

1. GitHub에서 새 저장소 생성 (`mansae-calculator`)
2. `git push`로 코드 푸시
3. Settings → Pages → "main" 선택
4. `https://yourusername.github.io/mansae-calculator/` 접속

## 파일 구성

```
mansae-calculator/
├── index.html                          # 🌐 웹 인터페이스 (메인)
├── mansae.js                           # 계산 로직
├── display.js                          # CLI 도구
├── dist/korean-lunar-calendar.min.js   # 라이브러리 (18KB)
├── package.json                        # npm 설정
├── README.md                           # 상세 설명서
├── QUICKSTART.md                       # 빠른 시작
├── .gitignore                          # Git 제외 파일
└── setup.sh                            # 설치 스크립트
```

## 요구사항

### 웹 인터페이스
- ✅ 최신 브라우저만 필요 (Chrome, Firefox, Safari, Edge)
- ✅ 네트워크 선택사항 (로컬 계산)

### CLI 도구
- Node.js 18+
- npm (포함됨)

## 첫 사용

### 가장 간단하게
```bash
# 다운로드 후
open index.html
```

### 웹 서버로
```bash
npm run web
# http://localhost:8000/index.html
```

### CLI로
```bash
npm install
node display.js 1979-04-05 12:35 남
```

## 라이브러리 정보

### korean-lunar-calendar
- **출처**: npm registry
- **크기**: 18KB (minified)
- **라이선스**: MIT
- **온라인 필요**: ❌ 아니오
- **API 제한**: ✅ 없음

```javascript
// CDN에서 자동 로드
<script src="https://cdn.jsdelivr.net/npm/korean-lunar-calendar/dist/korean-lunar-calendar.min.js"></script>
```

## GitHub Pages 배포 단계별

### 1. GitHub 저장소 생성
- https://github.com/new
- Repository name: `mansae-calculator`

### 2. 코드 푸시
```bash
git remote add origin https://github.com/yourusername/mansae-calculator.git
git branch -M main
git push -u origin main
```

### 3. Pages 활성화
- GitHub 저장소 → Settings → Pages
- Source: `Deploy from a branch`
- Branch: `main` / folder: `/ (root)`
- Save 클릭

### 4. 접속
```
https://yourusername.github.io/mansae-calculator/
```

## 성능 및 용량

| 항목 | 크기 | 로딩시간 |
|------|------|---------|
| index.html | 20KB | < 100ms |
| korean-lunar-calendar.min.js | 18KB | < 200ms |
| 총 크기 | ~40KB | < 300ms |

> 매우 가볍고 빠릅니다!

## 자주 묻는 질문

**Q: 개인 정보가 어디로 전송되나요?**
A: 어디로도 전송되지 않습니다. 모든 계산이 로컬에서 처리됩니다.

**Q: 오프라인에서도 작동하나요?**
A: 네! HTML과 라이브러리를 다운받으면 완전히 오프라인에서 작동합니다.

**Q: KASI API는 어디서 가져오나요?**
A: data.go.kr에서 신청 가능하지만, korean-lunar-calendar로 충분합니다.

**Q: 다른 사람의 서버에 올릴 수 있나요?**
A: 네! MIT 라이선스이므로 자유롭게 배포 가능합니다.

---

**시작하기**: [QUICKSTART.md](./QUICKSTART.md)
**상세정보**: [README.md](./README.md)
