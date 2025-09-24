/* 📝 문제 2: 함수 만들기

    ```javascript
// 1. 두 숫자를 받아서 더한 결과를 반환하는 함수 add를 만드세요
// 2. 원의 반지름을 받아서 넓이를 계산하는 함수 getCircleArea를 만드세요 (π는 3.14 사용)
// 3. 이름을 받아서 "안녕하세요, [이름]님!"을 반환하는 함수 greet을 만드세요

// 각 함수를 호출해서 결과를 확인해보세요 */

function add(a,b){
    return console.log(a+b);
}

function getCircleArea(r){
    return console.log(2*r*3.14); // 원의 반지름 =r , 원의 넓이 = 2πr
}

function greet(name){
    return console.log(name) ;
}

add(2,5)
getCircleArea(5)
greet("이기윤")