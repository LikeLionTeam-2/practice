/*## 8️⃣ `sort`

아이디(`id`) 기준으로 내림차순 정렬한 새 배열을 만드세요.*/

const todos = [
    { id: 1, text: "자바스크립트 입문", done: false },
    { id: 2, text: "함수 배우기", done: true },
    { id: 3, text: "객체와 배열 배우기", done: true },
    { id: 4, text: "배열 내장함수 배우기", done: false }];


const Copytodos = [...(todos)];
const DesckPrint = [...Copytodos].sort((a, b) => b.id - a.id);


console.log("원본의 배열 : ", todos);
console.log("내림차순으로 정렬한 배열 : ", DesckPrint);