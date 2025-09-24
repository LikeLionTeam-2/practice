// 1. 과일 이름들이 담긴 배열을 만드세요 (최소 5개)
// 2. 배열의 첫 번째와 마지막 요소를 출력하세요
// 3. 배열에 새로운 과일을 추가하세요
// 4. 배열의 길이를 출력하세요
// 5. 특정 과일이 배열에 있는지 확인하는 코드를 작성하세요
const fruits = ["사과", "바나나", "오렌지", "포도", "키위"];

console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);

fruits.push("망고");

console.log(fruits.length);

console.log(fruits.includes("바나나"));
console.log(fruits.includes("수박"));
