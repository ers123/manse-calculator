# 사주 만세력 계산기 (Mansae Calculator)

정확한 음양력 변환과 사주 분석을 제공하는 웹 기반 만세력 계산 도구입니다.
양력 생년월일과 생시, 성별을 입력하면 자동으로 음력 변환 및 사주 네 기둥을 계산합니다.

## 📋 목차

- [주요 특징](#-주요-특징)
- [설치 방법](#-설치-방법)
- [사용 방법](#-사용-방법)
- [라이브러리 정보](#-라이브러리-정보)
- [파일 구조](#-파일-구조)
- [GitHub 배포](#-github-배포)

## ✨ 주요 특징

✅ **정확한 음양력 변환**: korean-lunar-calendar 라이브러리 사용  
✅ **웹 기반 인터페이스**: 별도 설치 없이 브라우저에서 즉시 사용  
✅ **로컬 기반 계산**: 온라인 API 불필요 (오프라인 작동 가능)  
✅ **아름다운 UI/UX**: 반응형 디자인으로 모바일 지원  
✅ **실시간 계산**: 결과 즉시 표시  
✅ **상세 분석**: 오행 분포, 대운 정보 제공

## 🚀 설치 방법

### 1단계: 저장소 클론
```bash
git clone <your-repo-url>
cd mansae-calculator
```

### 2단계: 의존성 설치 (선택사항)
```bash
npm install
```
> CLI 도구를 사용하려는 경우만 필요합니다

### 3단계: 웹 서버 실행
```bash
# Python 3이 설치된 경우
python3 -m http.server 8000

# Node.js를 사용하려면
npx http-server

# 또는 아무 로컬 웹 서버 사용 가능
```

### 4단계: 브라우저에서 열기
```
http://localhost:8000/index.html
```

> **가장 간단한 방법**: `index.html` 파일을 브라우저에서 직접 열기 (CDN 버전)

## 📖 사용 방법

### 웹 인터페이스 사용 (권장) 🌐

1. `index.html`을 브라우저에서 엽니다
2. 생년월일, 생시, 성별을 입력합니다
3. "만세력 계산" 버튼을 클릭합니다
4. 결과가 즉시 표시됩니다

**입력 형식:**
- **생년월일**: YYYY-MM-DD (예: 1979-04-05)
- **생시**: HH:MM 24시간 형식 (예: 12:35)
- **성별**: 남 / 여

### CLI 도구 사용 (개발용)

#### 1. 보기 좋은 출력 버전
```bash
node display.js 1979-04-05 12:35 남
```

#### 2. JSON 형식 출력
```bash
node mansae.js 1979-04-05 12:35 남
```

#### 3. 코드에서 직접 사용
```javascript
import calculateMansae from "./mansae.js";

const result = calculateMansae("1979-04-05", "12:35", "남");
console.log(result.pillars);  // 사주 네 기둥
console.log(result.elements); // 오행 분포
```

## 📦 라이브러리 정보

### korean-lunar-calendar

| 항목 | 정보 |
|------|------|
| **라이선스** | MIT |
| **용량** | ~18KB (minified) / ~197KB (npm) |
| **온라인 사용** | ✅ 가능 (CDN 제공) |
| **오프라인 사용** | ✅ 가능 |
| **지원 범위** | 양력: 1000-02-13 ~ 2050-12-31 |

### CDN 링크
```html
<script src="https://cdn.jsdelivr.net/npm/korean-lunar-calendar/dist/korean-lunar-calendar.min.js"></script>
```

### 온라인 API vs 로컬 계산

| 구분 | KASI API | korean-lunar-calendar |
|------|----------|----------------------|
| 온라인 필요 | ❌ 필요 | ✅ 불필요 |
| 용량 | 매번 호출 | 18KB (CDN) |
| 일일 제한 | ⚠️ 10,000 요청 | ✅ 무제한 |
| 정확도 | 매우 높음 | 높음 (1000~2050년) |
| 설정 복잡도 | 높음 (API 키) | 낮음 |

**결론**: 일반 사용자는 `korean-lunar-calendar`로 충분하며, 매우 높은 정확도가 필요한 경우 KASI API 결합 가능

## 📁 파일 구조

```
mansae-calculator/
├── index.html                          # 🌐 웹 인터페이스 (메인)
├── mansae.js                           # 핵심 계산 로직 (JSON 출력)
├── display.js                          # CLI 디스플레이 (테이블 출력)
├── dist/
│   └── korean-lunar-calendar.min.js    # CDN 다운로드 버전 (18KB)
├── node_modules/                       # npm 의존성 (git에 미포함)
├── package.json                        # 프로젝트 설정
├── .gitignore                          # Git 무시 파일
├── README.md                           # 이 파일
└── .github/
    └── workflows/                      # CI/CD 설정 (선택사항)
```

## 🔄 GitHub 배포

### 1. 로컬 설정
```bash
# 저장소 초기화
git init
git config user.name "Your Name"
git config user.email "your@email.com"

# 파일 추가
git add .
git commit -m "Initial commit: 만세력 계산기 v1.0"
```

### 2. 원격 저장소 연결
```bash
# GitHub에서 새 저장소 생성 후
git remote add origin https://github.com/yourusername/mansae-calculator.git
git branch -M main
git push -u origin main
```

### 3. GitHub Pages 배포 (선택사항)

**GitHub Pages로 무료 호스팅:**

1. 저장소 Settings에서 "Pages" 선택
2. Source를 "main" 브랜치로 설정
3. `https://yourusername.github.io/mansae-calculator/`에서 접근 가능

## 📊 계산 결과 설명

### 네 기둥 (四柱)
- **연주(年柱)**: 태어난 년도의 간지
- **월주(月柱)**: 태어난 월의 간지
- **일주(日柱)**: 태어난 날의 간지 (일간이 성격의 중심)
- **시주(時柱)**: 태어난 시간의 간지 (일간과 생시로 계산)

### 오행(五行) 분포
- **목(木)**: 갑, 을 → Green
- **화(火)**: 병, 정 → Red
- **토(土)**: 무, 기 → Orange
- **금(金)**: 경, 신 → Gray
- **수(水)**: 임, 계 → Blue

### 대운(大運) 정보
- **일주 천간**: 일간으로 타고난 성향과 운의 중심
- **년주 지지**: 태어난 년도의 지지
- **대운 방향**: 남성은 정순(정방향), 여성은 역순(역방향)

## 🔧 기술 스택

- **Frontend**: HTML5, CSS3, Vanilla JavaScript (ES6 Modules)
- **Library**: korean-lunar-calendar (18KB)
- **Compatibility**: 모든 최신 브라우저 지원
- **CDN**: jsDelivr

## ⚠️ 주의사항

- 생시가 정확해야 정확한 시주 계산이 가능합니다
- 자정(23:00 ~ 00:59)은 실제로는 다음 날 음력 기준입니다
- 섬머타임(DST) 등은 자동으로 처리되지 않습니다
- 1000년 이전 또는 2050년 이후는 지원되지 않습니다

## 📈 향후 개선사항

- [ ] KASI API 통합 옵션
- [ ] 24절기 기반 월주 조정
- [ ] 십신(十神) 상세 분석
- [ ] 대운 단위 10년 예측
- [ ] 국제화 (English, 中文)
- [ ] PWA 지원 (오프라인 모드)
- [ ] 사주 데이터베이스 저장

## 📞 문의 및 피드백

이슈는 GitHub Issues에서 등록해주세요.

## 📄 라이선스

MIT License - 자유롭게 사용, 수정, 배포 가능합니다.
