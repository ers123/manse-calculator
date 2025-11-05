# 📦 파일 목록 및 설명

## 필수 파일

### 🌐 index.html (20KB)
**웹 인터페이스 - 이것만 열면 됩니다!**

- 생년월일, 생시, 성별 입력 폼
- 사주 네 기둥 표시
- 오행 분포 시각화
- 대운 정보 표시
- CDN에서 korean-lunar-calendar 자동 로드

**사용법:**
```bash
# 브라우저에서 열기
open index.html
# 또는 웹 서버로
npm run web
```

### ⚙️ mansae.js (6.1KB)
**핵심 계산 로직**

- `calculateMansae(birthDate, birthTime, gender)` 함수
- 음양력 변환
- 시주 계산
- 오행 분포 계산
- JSON 형식 반환

**사용법:**
```javascript
import calculateMansae from "./mansae.js";
const result = calculateMansae("1979-04-05", "12:35", "남");
```

### 🖥️ display.js (3.3KB)
**CLI 도구 (터미널 사용)**

- mansae.js를 감싸는 출력 레이어
- 보기 좋은 테이블 형식
- 오행 분포 바 차트

**사용법:**
```bash
npm install
node display.js 1979-04-05 12:35 남
```

### 📦 dist/korean-lunar-calendar.min.js (18KB)
**음양력 변환 라이브러리**

- CDN 버전 (jsDelivr)
- 로컬에 다운로드됨
- 오프라인에서도 작동
- 1000~2050년 지원

**출처:** https://cdn.jsdelivr.net/npm/korean-lunar-calendar/

---

## 설정 파일

### 📋 package.json
npm 프로젝트 설정

```json
{
  "name": "mansae-calculator",
  "type": "module",
  "scripts": {
    "web": "python3 -m http.server 8000 || npx http-server"
  },
  "dependencies": {
    "korean-lunar-calendar": "^0.3.6"
  }
}
```

**명령어:**
- `npm install` - 의존성 설치
- `npm run web` - 웹 서버 시작

### 🚫 .gitignore
Git에서 제외할 파일

```
node_modules/
*.log
.DS_Store
dist/korean-lunar-calendar.min.js
```

### 🔧 setup.sh
자동 설치 스크립트

```bash
chmod +x setup.sh
./setup.sh
```

---

## 문서 파일

### 📖 README.md
**상세 설명서 (필독!)**

- 주요 특징
- 설치 방법
- 사용 방법
- 계산 원리
- 라이브러리 정보
- 향후 개선사항

### ⚡ QUICKSTART.md
**빠른 시작 가이드 (5분)**

- 3가지 시작 방법
- 라이브러리 정보 요약
- 자주 묻는 질문

### 📥 DOWNLOAD.md
**다운로드 및 배포 가이드**

- 3가지 다운로드 방법
- GitHub Pages 배포
- 성능 정보
- 배포 체크리스트

### 📄 FILES.md (이 파일)
**파일 목록 및 설명**

---

## 파일 크기 요약

| 파일 | 크기 | 용도 |
|------|------|------|
| index.html | 20KB | 웹 인터페이스 |
| mansae.js | 6.1KB | 계산 로직 |
| display.js | 3.3KB | CLI 도구 |
| korean-lunar-calendar.min.js | 18KB | 라이브러리 |
| README.md | 6.5KB | 상세 가이드 |
| QUICKSTART.md | 2.2KB | 빠른 시작 |
| DOWNLOAD.md | 3.4KB | 배포 가이드 |
| **전체** | **~40KB** | **배포 가능** |

> node_modules 제외 시 매우 가벼움!

---

## 사용 시나리오별 필요 파일

### 시나리오 1: 브라우저에서만 사용
필요한 파일:
- ✅ index.html
- ✅ dist/korean-lunar-calendar.min.js

```bash
# 다운로드 후
open index.html
```

### 시나리오 2: 웹 서버로 실행
필요한 파일:
- ✅ 모든 파일
- ✅ package.json

```bash
npm run web
```

### 시나리오 3: CLI 도구 사용
필요한 파일:
- ✅ mansae.js
- ✅ display.js
- ✅ package.json
- ✅ node_modules/

```bash
npm install
node display.js ...
```

### 시나리오 4: 다른 프로젝트에 통합
필요한 파일:
- ✅ mansae.js
- ✅ node_modules/korean-lunar-calendar

```javascript
import calculateMansae from "./mansae.js";
```

---

## GitHub 배포 체크리스트

```
mansae-calculator/
├── ✅ index.html
├── ✅ mansae.js
├── ✅ display.js
├── ✅ dist/korean-lunar-calendar.min.js
├── ✅ package.json
├── ✅ .gitignore
├── ✅ README.md
├── ✅ QUICKSTART.md
├── ✅ DOWNLOAD.md
├── ✅ FILES.md
└── ❌ node_modules/ (git에 미포함)
```

---

## 라이선스

모든 파일: **MIT License**

korean-lunar-calendar: **MIT License**

자유롭게 사용, 수정, 배포 가능합니다.

---

## 다음 단계

1. **로컬 테스트**
   - index.html 브라우저에서 열기
   - 만세력 계산해보기

2. **GitHub에 업로드**
   - git commit
   - git push

3. **GitHub Pages 배포**
   - Settings → Pages 활성화
   - 공개 URL 생성

4. **향후 개선**
   - KASI API 통합
   - 십신 분석 추가
   - 국제화

---

**준비 완료! 이 파일들로 완벽한 만세력 계산기를 만들 수 있습니다! 🎉**
