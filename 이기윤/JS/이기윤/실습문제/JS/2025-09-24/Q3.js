/*## 3️⃣ `filter`

완료된(`done: true`) 할 일만 새로운 배열로 추출하세요.*/


const todos = [
    { id: 1, text: "자바스크립트 입문", done: false },
    { id: 2, text: "함수 배우기", done: true },
    { id: 3, text: "객체와 배열 배우기", done: true },
    { id: 4, text: "배열 내장함수 배우기", done: false }];



const filteredTrue = todos.filter(tr => tr.done===true);

console.log(filteredTrue);