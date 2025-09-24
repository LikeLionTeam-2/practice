// 간단한 계산기 객체를 만드세요
// 포함할 메서드:
// - add(a, b): 덧셈
// - subtract(a, b): 뺄셈
// - multiply(a, b): 곱셈
// - divide(a, b): 나눗셈 (0으로 나누기 체크)

// 그리고 계산 결과를 예쁘게 출력하는 함수도 만드세요
// 예: "10 + 5 = 15"
const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    if (b === 0) {
      return "0으로 나눌 수 없습니다";
    }
    return a / b;
  },
};

const printResult = (a, b, operator, result) => {
  console.log(`${a} ${operator} ${b} = ${result}`);
};

const a = 10;
const b = 5;

printResult(a, b, "+", calculator.add(a, b));
printResult(a, b, "-", calculator.subtract(a, b));
printResult(a, b, "*", calculator.multiply(a, b));
printResult(a, b, "/", calculator.divide(a, b));
printResult(a, 0, "/", calculator.divide(a, 0));
