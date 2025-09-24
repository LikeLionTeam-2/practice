/*## 9️⃣ `findIndex`

할 일 목록에서 `"배열 내장함수 배우기"`의 인덱스를 구하세요.
*/

const todos = [
    { id: 1, text: "자바스크립트 입문", done: false },
    { id: 2, text: "함수 배우기", done: true },
    { id: 3, text: "객체와 배열 배우기", done: true },
    { id: 4, text: "배열 내장함수 배우기", done: false }];

const index = todos.findIndex(Index => Index.text === "배열 내장함수 배우기");
console.log(index);