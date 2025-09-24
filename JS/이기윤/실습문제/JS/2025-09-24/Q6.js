/*## 6️⃣ `every`

모든 할 일이 완료(`done: true`)되었는지 확인하세요.*/

const todos = [
    { id: 1, text: "자바스크립트 입문", done: false },
    { id: 2, text: "함수 배우기", done: true },
    { id: 3, text: "객체와 배열 배우기", done: true },
    { id: 4, text: "배열 내장함수 배우기", done: false }];

const TrueFinder =
    todos[0].done === true &&
    todos[1].done === true &&
    todos[2].done === true &&
    todos[3].done === true;

console.log(TrueFinder);