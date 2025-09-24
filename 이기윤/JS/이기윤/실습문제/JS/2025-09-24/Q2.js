/*## 2️⃣ `map`

각 할 일을 `"번호. 할 일"` 형식의 문자열 배열로 변환하세요.
    예) `["1. 자바스크립트 입문", "2. 함수 배우기", ...]`*/

const todos = [
    { id: 1, text: "자바스크립트 입문", done: false },
    { id: 2, text: "함수 배우기", done: true },
    { id: 3, text: "객체와 배열 배우기", done: true },
    { id: 4, text: "배열 내장함수 배우기", done: false }];

let ExamTest = [];

for (let i = 0; i < todos.length; i++) {
    ExamTest.push(`${todos[i].id}. ${todos[i].text}`);
}

console.log(ExamTest);

