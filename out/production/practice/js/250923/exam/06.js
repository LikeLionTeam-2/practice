// 요일 번호(1-7)를 받아서 요일명을 반환하는 함수를 만드세요
// 1: 월요일, 2: 화요일, ... 7: 일요일
// 잘못된 번호가 입력되면 "잘못된 요일 번호입니다" 반환

// 1부터 8까지의 숫자로 테스트해보세요

function findDay(num){
    const days = ["월요일","화요일", "수요일", "목요일", "금요일", "토요일", "일요일"];
    return days[num - 1] || "잘못된 요일 번호입니다.";
} // 배열에서 잘못된 인덱스를 접근하면 undefined

console.log(findDay(1));
console.log(findDay(2));
console.log(findDay(3));
console.log(findDay(4));
console.log(findDay(5));
console.log(findDay(6));
console.log(findDay(7));
console.log(findDay(8));


