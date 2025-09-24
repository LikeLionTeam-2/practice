const todos = [
  { id: 1, text: "자바스크립트 입문", done: false },
  { id: 2, text: "함수 배우기", done: true },
  { id: 3, text: "객체와 배열 배우기", done: true },
  { id: 4, text: "배열 내장함수 배우기", done: false },
];

const todosOriginal = [
    { id: 1, text: "자바스크립트 입문", done: false },
    { id: 2, text: "함수 배우기", done: true },
    { id: 3, text: "객체와 배열 배우기", done: true },
    { id: 4, text: "배열 내장함수 배우기", done: false }
];


// forEach: 모든 할 일(text)을 한 줄씩 출력하세요.
console.log("\n=== === === forEach === === ===");
const resultForEach = todos.forEach((todo) => console.log(todo.text));


// map: 각 할 일을 "번호. 할 일" 형식의 문자열 배열로 변환하세요.
// 예) ["1. 자바스크립트 입문", "2. 함수 배우기", ...]
console.log("\n=== === === map === === ===");
const resultMap = todos.map((todo) => `${todo.id}. ${todo.text}`);
console.log(resultMap);


//filter: 완료된(done: true) 할 일만 새로운 배열로 추출하세요.
console.log("\n=== === === filter === === ===");
const resultFilter = todos.filter((todo) => todo.done === true);
console.log(resultFilter);


// find: 아이디(id)가 3인 할 일을 찾아서 출력하세요.
console.log("\n=== === === find === === ===");
const resultFind = todos.find((todo) => todo.id === 3);
console.log(resultFind);


// some: 할 일 목록에 완료되지 않은(done: false) 항목이 하나라도 있는지 확인하세요.
// array.some(function(currentValue, index, array), thisValue)
// currentValue : 현재 처리 중인 요소의 값
// index : 현재 처리 중인 요소의 인덱스
// array : some을 호출한 배열
// thisValue (옵션) : 함수 내에서 사용할 this 값
// 최소한 하나의 요소가 만족하면 true를 반환하고, 모든 요소가 조건을 만족하지 않으면 false를 반환
console.log("\n=== === === some === === ===");
const resultSome = todos.some((todo) => todo.done === false);
console.log(resultSome);


// every: 모든 할 일이 완료(done: true)되었는지 확인하세요.
// 배열의 모든 요소가 주어진 조건을 만족하는지 확인하는 함수
// 배열의 모든 요소가 조건을 만족한 경우에만 true를 반환하고, 하나라도 요소가 조건을 만족하지 못하면 false를 반환
console.log("\n=== === === every === === ===");
const resultEvery = todos.every((todo) => todo.done === true);
console.log(resultEvery);


// reduce: 완료된(done: true) 할 일이 몇 개인지 개수를 구하세요.
console.log("\n=== === === reduce === === ===");
let resultReduce = todos.reduce((count, todo) => {
    return todo.done ? count + 1 : count;
}, 0);
console.log(resultReduce);


// sort: 아이디(id) 기준으로 내림차순 정렬한 새 배열을 만드세요.
console.log("\n=== === === sort === === ===");
const resultSort = todos.sort((a, b) => b.id - a.id);
console.log(resultSort);


// findIndex: 할 일 목록에서 "배열 내장함수 배우기"의 인덱스를 구하세요.
console.log("\n=== === === findIndex === === ===");
const resultFindIndex = todosOriginal.findIndex((todo) => todo.text === "배열 내장함수 배우기");
console.log(resultFindIndex);


// 종합 응용: done이 false인 항목들만 모아서, 그 text 값들만 새로운 배열로 만들어 출력하세요.
// 결과: ["자바스크립트 입문", "배열 내장함수 배우기"]
console.log("\n=== === === 종합 응용 === === ===");
const result = todosOriginal.filter((todo) => todo.done === false).map((todo) => todo.text);
console.log(result)