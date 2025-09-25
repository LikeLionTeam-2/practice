// 문제 2: 함수 만들기
console.log("\n=======문제 2=======\n");

const add = (a, b) => {
    return a + b;
}

console.log('두 값의 합 : ' + add(10, 20));

const getCircleArea = (r) => {
    return 3.14 * r * r;
}

console.log('원의 넓이 : ' + getCircleArea(10));

const greet = (name) => {
    return `안녕하세요, ${name}님!`;
}

console.log(greet("kim"));