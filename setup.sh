#!/bin/bash

# 색상 정의
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}╔════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║   사주 만세력 계산기 셋업 스크립트     ║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════╝${NC}\n"

# 1. Node.js 설치 여부 확인
echo -e "${YELLOW}[1/4]${NC} Node.js 확인 중..."
if ! command -v node &> /dev/null; then
  echo -e "${RED}✗ Node.js가 설치되지 않았습니다.${NC}"
  echo "  https://nodejs.org/에서 다운로드하세요"
  exit 1
fi
NODE_VERSION=$(node -v)
echo -e "${GREEN}✓ Node.js ${NODE_VERSION} 설치됨${NC}\n"

# 2. 의존성 설치
echo -e "${YELLOW}[2/4]${NC} npm 의존성 설치 중..."
npm install
if [ $? -eq 0 ]; then
  echo -e "${GREEN}✓ 의존성 설치 완료${NC}\n"
else
  echo -e "${RED}✗ 의존성 설치 실패${NC}"
  exit 1
fi

# 3. CDN 파일 다운로드
echo -e "${YELLOW}[3/4]${NC} korean-lunar-calendar CDN 버전 다운로드 중..."
mkdir -p dist
curl -s https://cdn.jsdelivr.net/npm/korean-lunar-calendar/dist/korean-lunar-calendar.min.js > dist/korean-lunar-calendar.min.js
if [ -f dist/korean-lunar-calendar.min.js ]; then
  FILE_SIZE=$(du -h dist/korean-lunar-calendar.min.js | cut -f1)
  echo -e "${GREEN}✓ 다운로드 완료 (${FILE_SIZE})${NC}\n"
else
  echo -e "${RED}✗ 다운로드 실패${NC}"
  exit 1
fi

# 4. 웹 서버 시작
echo -e "${YELLOW}[4/4]${NC} 웹 서버 시작 중...\n"
echo -e "${GREEN}✓ 설정 완료!${NC}\n"

echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}사용 방법:${NC}"
echo ""
echo -e "${GREEN}1️⃣  웹 인터페이스 열기:${NC}"
echo -e "   ${YELLOW}npm run web${NC}"
echo ""
echo -e "${GREEN}2️⃣  CLI 도구 사용:${NC}"
echo -e "   ${YELLOW}node display.js 1979-04-05 12:35 남${NC}"
echo ""
echo -e "${GREEN}3️⃣  직접 HTML 열기:${NC}"
echo -e "   ${YELLOW}index.html${NC}을 브라우저에서 열기"
echo ""
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
