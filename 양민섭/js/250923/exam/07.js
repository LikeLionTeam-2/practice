// 간단한 계산기 객체를 만드세요
// 포함할 메서드:
// - add(a, b): 덧셈
// - subtract(a, b): 뺄셈
// - multiply(a, b): 곱셈
// - divide(a, b): 나눗셈 (0으로 나누기 체크)

// 그리고 계산 결과를 예쁘게 출력하는 함수도 만드세요
// 예: "10 + 5 = 15"

const calculator = {
    add: function(num1, num2) {
        return num1 + num2;
    },

    substract: function(num1, num2){
        return num1 - num2;
    },

    multiply: function(num1, num2){
        return num1 * num2
    },

    divide: function(num1, num2){
        if(num2 <= 0){
            console.log("0으로는 나눌 수 없습니다");
            
        }
        return num1 / num2;
    }
}