const todos = [
    { id: 1, text: "자바스크립트 입문", done: false },
    { id: 2, text: "함수 배우기", done: true },
    { id: 3, text: "객체와 배열 배우기", done: true },
    { id: 4, text: "배열 내장함수 배우기", done: false },
];

//`forEach`
//배열의 각 요소를 한 번씩 순회하며 주어진 콜백 함수를 실행한다.
//반환값이 없으며(항상 undefined), 주로 반복 실행/출력 용도로 사용한다

// 모든 할 일(`text`)을 한 줄씩 출력하세요.


todos.forEach((todo) => console.log(todo.text));
console.log(
  "=================================================================="
);


//`map`
//배열의 각 요소를 변환하여 새로운 배열을 반환한다.
//원본 배열은 변경하지 않는다.

//각 할 일을 `"번호. 할 일"` 형식의 문자열 배열로 변환하세요. 예) `["1. 자바스크립트 입문", "2. 함수 배우기", ...]`

const numTodo = todos.map(todo => `${todo.id}. ${todo.text}`);
console.log(numTodo);

console.log(
  "=================================================================="
);


//`filter`
//조건(콜백 함수가 true를 반환)을 만족하는 요소만 걸러서 새로운 배열을 반환한다

//완료된(`done: true`) 할 일만 새로운 배열로 추출하세요.
const doneTodo = todos.filter(todo => todo.done);
console.log(doneTodo);

console.log(
  "=================================================================="
);

//`find`
//조건을 만족하는 첫 번째 요소를 반환한다.
//조건을 만족하는 요소가 없으면 undefined.

// 아이디(`id`)가 3인 할 일을 찾아서 출력하세요.
const findId = todos.find(todo => todo.id === 3);
console.log(findId);


console.log(
  "=================================================================="
);

//`some`
//배열 요소 중 하나라도 조건을 만족하면 true, 아니면 false.
//“하나라도 있는가?”를 검사할 때 사용.

// 할 일 목록에 **완료되지 않은(`done: false`) 항목이 하나라도 있는지** 확인하세요.
const chNotDone = todos.some(todo => todo.done === false)
console.log(chNotDone);


console.log(
  "=================================================================="
);

//`every`
// 모든 할 일이 완료(`done: true`)되었는지 확인하세요.
const chAllDone = todos.every(todo => todo.done === true);
console.log(chAllDone);


console.log(
  "=================================================================="
);

//`reduce`
//배열의 각 요소를 누적(accumulator)하며 단일 값으로 줄여 나간다.
//초기값을 지정할 수 있다.

//완료된(`done: true`) 할 일이 몇 개인지 개수를 구하세요.
const cntDoneTodo = todos.reduce((count, todo) => {
    return todo.done ? count + 1 : count
}, 0);
console.log(cntDoneTodo);

//화살표 함수에서 **중괄호 {}**를 쓰면 명시적 return 이 필요합니다. 중괄호가 없으면 return 없이 한 줄 표현식이 바로 반환됩니다.

//todos.reduce((count, todo) => todo.done ? count + 1 : count, 0); 도 가능하다

console.log(
  "=================================================================="
);

//`sort`
// 아이디(`id`) 기준으로 내림차순 정렬한 새 배열을 만드세요.


console.log(
  "=================================================================="
);

//`findIndex`
// 할 일 목록에서 `"배열 내장함수 배우기"`의 인덱스를 구하세요.
const findIndexTodo = todos.findIndex(todo => todo.text === "배열 내장함수 배우기");
console.log(findIndexTodo);

console.log(
  "=================================================================="
);

//종합 응용
// `done`이 `false`인 항목들만 모아서, 그 `text` 값들만 새로운 배열로 만들어 출력하세요.
// 👉 결과: `["자바스크립트 입문", "배열 내장함수 배우기"]`

const finalExam = todos.filter(todo => !todo.done).map(todo => todo.text);
console.log(finalExam);
