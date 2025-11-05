import calculateMansae from "./mansae.js";

// 보기 좋은 형식으로 출력하는 함수
export function printMansae(birthDate, birthTime, gender) {
  const result = calculateMansae(birthDate, birthTime, gender);

  if (result.error) {
    console.log(`❌ 오류: ${result.error}`);
    return;
  }

  console.log("\n╔════════════════════════════════════════════╗");
  console.log("║           사주 만세력 계산 결과            ║");
  console.log("╚════════════════════════════════════════════╝\n");

  // 입력 정보
  console.log("📋 입력 정보:");
  console.log(`   양력 생년월일: ${result.input.solarDate}`);
  console.log(`   생시: ${result.input.birthTime}`);
  console.log(`   성별: ${result.input.gender}\n`);

  // 음력 정보
  console.log("🌙 음력 정보:");
  console.log(`   ${result.lunar.lunarDateStr}\n`);

  // 사주 네 기둥
  console.log("⚡ 사주 네 기둥 (四柱):");
  console.log(`   ┌─────────────────────────────────────┐`);
  console.log(
    `   │ 연주(年柱): ${result.pillars.year.korean.padEnd(6)} │ 오행: ${result.pillars.year.element}`
  );
  console.log(
    `   │ 월주(月柱): ${result.pillars.month.korean.padEnd(6)} │ 오행: ${result.pillars.month.element}`
  );
  console.log(
    `   │ 일주(日柱): ${result.pillars.day.korean.padEnd(6)} │ 오행: ${result.pillars.day.element}`
  );
  console.log(
    `   │ 시주(時柱): ${result.pillars.hour.korean.padEnd(6)} │ 오행: ${result.pillars.hour.element}`
  );
  console.log(`   └─────────────────────────────────────┘\n`);

  // 오행 분포
  console.log("🌊 오행(五行) 분포:");
  const allElements = ["목", "화", "토", "금", "수"];
  const elementNames = ["목(木)", "화(火)", "토(土)", "금(金)", "수(水)"];
  const maxCount = Math.max(...Object.values(result.elements), 1);

  allElements.forEach((elem, idx) => {
    const count = result.elements[elem] || 0;
    const barLength = Math.round((count / maxCount) * 15);
    const bar = "█".repeat(barLength) + "░".repeat(15 - barLength);
    console.log(`   ${elementNames[idx]}: [${bar}] ${count}개`);
  });

  // 대운 정보
  console.log("\n🔮 대운(大運) 정보:");
  console.log(`   일주의 천간(日干): ${result.fortune.dayMasterStem}`);
  console.log(`   년주의 지지(年支): ${result.fortune.yearBranch}`);
  console.log(
    `   대운 방향: ${result.fortune.cycleDirection === "forward" ? "정방향 (정순)" : "역방향 (역순)"}`
  );
  console.log("\n");
}

// CLI 사용
if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2);

  if (args.length < 3) {
    console.log("사용법: node display.js <YYYY-MM-DD> <HH:MM> <성별>");
    console.log("예시: node display.js 1990-05-15 07:30 남");
    console.log("      node display.js 1985-12-25 14:20 여");
    process.exit(1);
  }

  const [birthDate, birthTime, gender] = args;
  printMansae(birthDate, birthTime, gender);
}

export default printMansae;
