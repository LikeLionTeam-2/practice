/*## 4️⃣ `find`

아이디(`id`)가 3인 할 일을 찾아서 출력하세요.*/

const todos = [
    { id: 1, text: "자바스크립트 입문", done: false },
    { id: 2, text: "함수 배우기", done: true },
    { id: 3, text: "객체와 배열 배우기", done: true },
    { id: 4, text: "배열 내장함수 배우기", done: false }];

const IDFinder = todos.find(IDFinder => IDFinder.id === 3);
console.log(IDFinder);