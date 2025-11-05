# 🎋 빠른 시작 가이드

## 5초 안에 시작하기

### 가장 간단한 방법: HTML 파일 직접 열기
```bash
# 클론
git clone <your-repo>
cd mansae-calculator

# 브라우저에서 열기
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux
```

**또는**: GitHub Pages에서 바로 사용
```
https://yourusername.github.io/mansae-calculator/
```

---

## 웹 서버로 실행 (권장)

```bash
# 1. 저장소 클론
git clone <your-repo>
cd mansae-calculator

# 2. 웹 서버 시작
npm run web
# 또는
python3 -m http.server 8000

# 3. 브라우저에서 열기
http://localhost:8000/index.html
```

---

## CLI 도구 사용 (개발용)

```bash
# 설치
npm install

# 만세력 계산
node display.js 1979-04-05 12:35 남
```

---

## 📦 라이브러리 정보

| 항목 | 정보 |
|------|------|
| **온라인 필요** | ❌ 아니오 (CDN 로컬 다운로드) |
| **크기** | 18KB (CDN) / 197KB (npm) |
| **브라우저 호환** | 모든 최신 브라우저 |
| **API 제한** | ✅ 무제한 (로컬 계산) |

---

## ❓ FAQ

**Q: 온라인 API가 필요한가요?**
A: 아니요! 모든 계산이 로컬에서 처리됩니다. 인터넷 필수가 아닙니다.

**Q: korean-lunar-calendar 라이브러리는 어디서 오나요?**
A: jsDelivr CDN에서 자동 다운로드됩니다 (18KB).

**Q: KASI API와 뭐가 다른가요?**
A: 
- korean-lunar-calendar: 로컬 계산, 무제한, 간단
- KASI API: API 신청 필요, 일일 10,000건 제한, 더 정확함

**Q: 모바일에서도 되나요?**
A: 네! 반응형 디자인으로 모든 기기 지원합니다.

---

## 📋 체크리스트

- [ ] `index.html` 열어보기
- [ ] 1979-04-05 12:35 남 입력해보기
- [ ] 결과 확인하기
- [ ] CLI 도구 테스트 (`node display.js ...`)
- [ ] GitHub에 커밋하기

---

## 🚀 다음 단계

1. **GitHub Pages 배포**
   - Settings → Pages → main 브랜치 선택

2. **KASI API 추가** (선택사항)
   - data.go.kr에서 API 신청
   - mansae.js 수정하여 API 옵션 추가

3. **기능 확장**
   - 십신(十神) 분석 추가
   - 대운(大運) 상세 정보
   - 사주 기록 저장 기능

---

**더 많은 정보**: [README.md](./README.md) 참고
