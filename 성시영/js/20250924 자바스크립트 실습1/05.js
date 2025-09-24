// 점수를 받아서 등급을 반환하는 함수를 만드세요
// 90점 이상: A
// 80점 이상: B
// 70점 이상: C
// 60점 이상: D
// 60점 미만: F

// 여러 점수로 테스트해보세요: 95, 87, 73, 65, 45
const getGrade = (score) => {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
};

console.log(getGrade(95));
console.log(getGrade(87));
console.log(getGrade(73));
console.log(getGrade(65));
console.log(getGrade(45));
