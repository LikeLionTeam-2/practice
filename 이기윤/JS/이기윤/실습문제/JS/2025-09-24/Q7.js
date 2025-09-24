/*## 7️⃣ `reduce`

완료된(`done: true`) 할 일이 몇 개인지 개수를 구하세요.*/

const todos = [
    { id: 1, text: "자바스크립트 입문", done: false },
    { id: 2, text: "함수 배우기", done: true },
    { id: 3, text: "객체와 배열 배우기", done: true },
    { id: 4, text: "배열 내장함수 배우기", done: false }];

const TrueCount = todos.reduce((count, Find) => {
    return Find.done===true ? count + 1 : count;
}, 0);

console.log(TrueCount);