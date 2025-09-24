/*# 📘 실습 문제: 배열 내장 함수 연습

아래의 `todos` 배열을 이용해 문제를 풀어보세요.

    ```javascript
const todos = [
  { id: 1, text: "자바스크립트 입문", done: false },
  { id: 2, text: "함수 배우기", done: true },
  { id: 3, text: "객체와 배열 배우기", done: true },
  { id: 4, text: "배열 내장함수 배우기", done: false },
];
```

---

## 1️⃣.`forEach`

모든 할 일(`text`)을 한 줄씩 출력하세요.
*/


const todos = [
    { id: 1, text: "자바스크립트 입문", done: false },
    { id: 2, text: "함수 배우기", done: true },
    { id: 3, text: "객체와 배열 배우기", done: true },
    { id: 4, text: "배열 내장함수 배우기", done: false }];

    todos.forEach(id =>
        console.log(id));
