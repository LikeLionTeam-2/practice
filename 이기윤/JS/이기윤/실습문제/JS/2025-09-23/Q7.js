/*📝 문제 7: 종합 문제

    ```javascript
// 간단한 계산기 객체를 만드세요
// 포함할 메서드:
// - add(a, b): 덧셈
// - subtract(a, b): 뺄셈
// - multiply(a, b): 곱셈
// - divide(a, b): 나눗셈 (0으로 나누기 체크)

// 그리고 계산 결과를 예쁘게 출력하는 함수도 만드세요
// 예: "10 + 5 = 15"*/


const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => {
        if (b === 0) return "0으로 나눌 수 없습니다";
        return a / b;
    }
};


function Result(a, b, operator) {
    let result;
    switch(operator) {
        case '+':
            result = calculator.add(a, b);
            break;
        case '-':
            result = calculator.subtract(a, b);
            break;
        case '*':
            result = calculator.multiply(a, b);
            break;
        case '/':
            result = calculator.divide(a, b);
            break;
        default:
            result = "연사자를 올바르게 입력하시ㅏ오";
    }
    console.log(a + operator + b + " = " + result);
}


Result(10, 5, '+');
Result(10, 5, '-');
Result(10, 5, '*');
Result(10, 0, '/');
Result(10, 5, '/');
