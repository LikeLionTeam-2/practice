const calculator = {
  add: function (a, b) {
    return a + b;
  },

  subtract: function (a, b) {
    return a - b;
  },

  multiply: function (a, b) {
    return a * b;
  },

  divide: function (a, b) {
    if (b === 0) {
      return "0으로는 나눌 수 없습니다.";
    }
    return a / b;
  },
};

function printResult(a, b, operator, result) {
  console.log(`${a} ${operator} ${b} = ${result}`);
}

let a = 10,
  b = 5;

printResult(a, b, "+", calculator.add(a, b));
printResult(a, b, "-", calculator.subtract(a, b));
printResult(a, b, "*", calculator.multiply(a, b));
printResult(a, b, "/", calculator.divide(a, b));
printResult(a, 0, "/", calculator.divide(a, 0));
