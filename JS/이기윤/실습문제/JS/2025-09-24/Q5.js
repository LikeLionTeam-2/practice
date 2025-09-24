/*## 5️⃣ `some`

할 일 목록에 **완료되지 않은(`done: false`) 항목이 하나라도 있는지** 확인하세요.*/

const todos = [
    { id: 1, text: "자바스크립트 입문", done: false },
    { id: 2, text: "함수 배우기", done: true },
    { id: 3, text: "객체와 배열 배우기", done: true },
    { id: 4, text: "배열 내장함수 배우기", done: false }];

const FalseFinder =
    todos[0].done === false ||
    todos[1].done === false ||
    todos[2].done === false ||
    todos[3].done === false;

console.log(FalseFinder); 