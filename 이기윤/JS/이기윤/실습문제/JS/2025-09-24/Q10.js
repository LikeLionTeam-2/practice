/*## 🔟 종합 응용

`done`이 `false`인 항목들만 모아서, 그 `text` 값들만 새로운 배열로 만들어 출력하세요.
👉 결과: `["자바스크립트 입문", "배열 내장함수 배우기"]`*/

const todos = [
    { id: 1, text: "자바스크립트 입문", done: false },
    { id: 2, text: "함수 배우기", done: true },
    { id: 3, text: "객체와 배열 배우기", done: true },
    { id: 4, text: "배열 내장함수 배우기", done: false }];

const FalseFinder = todos
    .filter(Complete => Complete.done === false)
    .map(Complete => Complete.text);


console.log(FalseFinder);

