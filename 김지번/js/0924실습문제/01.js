const todos = [
    { id: 1, text: "자바스크립트 입문", done: false },
    { id: 2, text: "함수 배우기", done: true },
    { id: 3, text: "객체와 배열 배우기", done: true },
    { id: 4, text: "배열 내장함수 배우기", done: false },
];

console.log("==============================================")

//foreach
todos.forEach(todo => {
    console.log(todo.text);
})

console.log("==============================================")

//map
const todoMap = todos.map((todo) => `${todo.id}. ${todo.text}`);
console.log(todoMap)

console.log("==============================================")

//filter
const todoFilter = todos.filter((todo) => todo.done);
console.log(todoFilter);

console.log("==============================================")

//find
const todoFind = todos.find(t => t.id === 3);
console.log(todoFind);

console.log("==============================================")

//some
const todoSome = todos.some((todo) => todo.done === false);
console.log(todoSome);

console.log("==============================================")

//every
const todoEvery = todos.every((todo) => todo.done === true);
console.log(todoEvery);

console.log("==============================================")

//reduce
const todoReduce = todos.reduce((acc, cur) => {
    return cur.done ? acc + 1 : acc;
}, 0);
console.log(todoReduce);

console.log("==============================================")

//sort
const TodoSort = [...todos].sort((a, b) => b.id - a.id);
//sort는 원본 배열을 직접 변경하기 때문에 원본을 복사 후 정렬하는것이 안전하다 [...todos]로 원본 배열을 복사
//결과값이 양수이면 앞 0이면 유지 음수이면 뒤로 정렬하는것이 sort의 기능
console.log(TodoSort);

console.log("==============================================")

//findIndex
const todoFindIndex = todos.findIndex(t => t.text === "배열 내장함수 배우기")
console.log(todoFindIndex);

console.log("==============================================")

//apply
const todoApply = todos
    .filter (todo => !todo.done)
    .map (todo => todo.text);
console.log(todoApply)