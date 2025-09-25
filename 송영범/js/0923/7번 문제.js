// 문제 7: 종합 문제
console.log("\n=======문제 7=======\n");

const calculator = {
    add: function (a, b) {
        console.log(`${a} + ${b} = ${a+b}`);
    },
    substract: function (a,b) {
        console.log(`${a} - ${b} = ${a-b}`);
    },
    multiply: function (a,b) {
        console.log(`${a} * ${b} = ${a*b}`);
    },
    divide: function (a,b) {
        if(b == 0) console.log("0으로 나눌 수 없습니다.")
        else console.log(`${a} / ${b} = ${a/b}`);
    }
};

calculator.add(20,10);
calculator.substract(20,10);
calculator.multiply(20,10);
calculator.divide(20,10);
calculator.divide(20,0);