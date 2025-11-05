import KoreanLunarCalendar from "korean-lunar-calendar";

// 십간십지 배열
const heavenlyStems = ["갑", "을", "병", "정", "무", "기", "경", "신", "임", "계"];
const heavenlyStemsKo = ["갑", "을", "병", "정", "무", "기", "경", "신", "임", "계"];
const earthlyBranches = ["자", "축", "인", "묘", "진", "사", "오", "미", "신", "유", "술", "해"];
const earthlyBranchesHanja = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];

// 오행 매핑
const elementMap = {
  갑: "목", 을: "목",
  병: "화", 정: "화",
  무: "토", 기: "토",
  경: "금", 신: "금",
  임: "수", 계: "수",
};

const elementKor = {
  목: "Wood", 화: "Fire", 토: "Earth", 금: "Metal", 수: "Water"
};

// 간지 파싱 함수 (예: "임인(壬寅)" → {stem: "임", branch: "인"})
function parseGapja(gapjaStr) {
  if (!gapjaStr) return null;
  const koreanPart = gapjaStr.split("(")[0]; // "임인" 부분만 추출
  if (koreanPart.length >= 2) {
    return {
      stem: koreanPart[0],
      branch: koreanPart[1],
      full: gapjaStr,
    };
  }
  return null;
}

// 시주 계산 함수
function calculateHourPillar(dayStem, birthHour) {
  const dayStemIndex = heavenlyStems.indexOf(dayStem);
  if (dayStemIndex === -1) return null;

  // 자(子): 23:00-00:59=0, 축(丑): 01:00-02:59=1, 인(寅): 03:00-04:59=2,
  // 묘(卯): 05:00-06:59=3, 진(辰): 07:00-08:59=4, 사(巳): 09:00-10:59=5,
  // 오(午): 11:00-12:59=6, 미(未): 13:00-14:59=7, 신(申): 15:00-16:59=8,
  // 유(酉): 17:00-18:59=9, 술(戌): 19:00-20:59=10, 해(亥): 21:00-22:59=11
  const hourBranchMap = {
    0: 0, 1: 0, 2: 1, 3: 1, 4: 2, 5: 2, 6: 3, 7: 3, // 00-07시
    8: 4, 9: 4, 10: 5, 11: 5, 12: 6, 13: 6, 14: 7, 15: 7, // 08-15시
    16: 8, 17: 8, 18: 9, 19: 9, 20: 10, 21: 10, 22: 11, 23: 11, // 16-23시
  };

  const hourBranchIndex = hourBranchMap[birthHour];
  const hourStemIndex = (dayStemIndex * 2 + hourBranchIndex) % 10;

  return {
    stem: heavenlyStems[hourStemIndex],
    branch: earthlyBranches[hourBranchIndex],
    full: heavenlyStems[hourStemIndex] + earthlyBranches[hourBranchIndex],
  };
}

// 오행 분포 계산
function calculateElements(yearPillar, monthPillar, dayPillar, hourPillar) {
  const pillars = [yearPillar, monthPillar, dayPillar, hourPillar];
  const elements = {};

  pillars.forEach((pillar) => {
    if (!pillar) return;
    const stem = pillar.stem;
    const element = elementMap[stem];
    elements[element] = (elements[element] || 0) + 1;
  });

  return elements;
}

// 주요 계산 함수
export function calculateMansae(birthDate, birthTime, gender) {
  try {
    // 입력 검증
    if (!birthDate || !birthTime || !gender) {
      throw new Error(
        "생년월일, 생시, 성별이 모두 필요합니다. (예: calculateMansae('1990-05-15', '07:30', '남'))"
      );
    }

    // 날짜 파싱
    const [year, month, day] = birthDate.split("-").map(Number);
    const [hour] = birthTime.split(":").map(Number);

    // 양력을 음력으로 변환
    const calendar = new KoreanLunarCalendar();
    const result = calendar.setSolarDate(year, month, day);

    if (!result) {
      throw new Error(`날짜가 지원 범위를 벗어났습니다. (1000-02-13 ~ 2050-12-31)`);
    }

    // 음력 데이터 가져오기
    const lunarData = calendar.getLunarCalendar();
    const koreanGapja = calendar.getKoreanGapja();

    // 각 주(pillar) 파싱
    const yearPillar = parseGapja(koreanGapja.year);
    const monthPillar = parseGapja(koreanGapja.month);
    const dayPillar = parseGapja(koreanGapja.day);
    const hourPillar = calculateHourPillar(dayPillar.stem, hour);

    // 오행 계산
    const elements = calculateElements(yearPillar, monthPillar, dayPillar, hourPillar);

    // 결과 객체 구성
    return {
      // 입력 정보
      input: {
        solarDate: birthDate,
        birthTime: birthTime,
        gender: gender,
      },
      // 음력 정보
      lunar: {
        year: lunarData.year,
        month: lunarData.month,
        day: lunarData.day,
        isLeapMonth: lunarData.isLeapMonth,
        lunarDateStr: `${lunarData.year}년 ${lunarData.month}월 ${lunarData.day}일${lunarData.isLeapMonth ? " (윤달)" : ""}`,
      },
      // 사주 네 기둥
      pillars: {
        year: {
          korean: yearPillar.stem + yearPillar.branch,
          hanja: koreanGapja.year.split("(")[1]?.slice(0, -1) || "",
          full: yearPillar.full,
          element: elementMap[yearPillar.stem],
        },
        month: {
          korean: monthPillar.stem + monthPillar.branch,
          hanja: koreanGapja.month.split("(")[1]?.slice(0, -1) || "",
          full: monthPillar.full,
          element: elementMap[monthPillar.stem],
        },
        day: {
          korean: dayPillar.stem + dayPillar.branch,
          hanja: koreanGapja.day.split("(")[1]?.slice(0, -1) || "",
          full: dayPillar.full,
          element: elementMap[dayPillar.stem],
        },
        hour: {
          korean: hourPillar.stem + hourPillar.branch,
          hanja: "",
          full: hourPillar.full,
          element: elementMap[hourPillar.stem],
        },
      },
      // 오행 분포
      elements: elements,
      // 대운 정보 (간단 버전 - 성별에 따른 방향)
      fortune: {
        gender: gender,
        cycleDirection: gender === "남" || gender === "male" ? "forward" : "reverse",
        dayMasterStem: dayPillar.stem,
        yearBranch: yearPillar.branch,
      },
    };
  } catch (error) {
    return { error: error.message };
  }
}

// CLI 사용
if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2);

  if (args.length < 3) {
    console.log("사용법: node mansae.js <YYYY-MM-DD> <HH:MM> <성별>");
    console.log("예시: node mansae.js 1990-05-15 07:30 남");
    process.exit(1);
  }

  const [birthDate, birthTime, gender] = args;
  const result = calculateMansae(birthDate, birthTime, gender);

  console.log("\n=== 만세력 계산 결과 ===\n");
  console.log(JSON.stringify(result, null, 2));
}

export default calculateMansae;
