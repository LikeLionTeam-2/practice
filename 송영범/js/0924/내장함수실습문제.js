const todos = [
    { id: 1, text: "자바스크립트 입문", done: false },
    { id: 2, text: "함수 배우기", done: true },
    { id: 3, text: "객체와 배열 배우기", done: true },
    { id: 4, text: "배열 내장함수 배우기", done: false },
];

// 1. forEach
console.log("\n=====forEach=====\n");

todos.forEach(todo => console.log(todo.text));

// 2. map
console.log("\n=====map=====\n");

const todoMap = todos.map(todo => `${todo.id}. ${todo.text}`);
console.log(todoMap);

// 3. filter
console.log("\n=====filter=====\n");

const doneFilter = todos.filter(todo => todo.done === true);
console.log(doneFilter);

// 4. find
console.log("\n=====find=====\n");

const findId = todos.find(todo => todo.id === 3);
console.log(findId);

// 5. some
console.log("\n=====some=====\n");

const doneCheck = todos.some(todo => todo.done === false);

if(doneCheck)
    console.log("완료되지 않은 항목이 있습니다.");
else
    console.log("모든 항목이 완료되었습니다.");

// 6. every
console.log("\n=====every=====\n");

const allDone = todos.every(todo => todo.done);

if (allDone)
    console.log("모든 할 일이 완료 되었습니다.");
else console.log("완료되지 않은 일이 있습니다.");

// 7. reduce
console.log("\n=====reduce=====\n");

const doneCount = todos.reduce((acc, todo) => {
    if(todo.done) return acc + 1;
    else return acc;
}, 0);
console.log("완료한 일의 개수 : " + doneCount);

// 8. sort
console.log("\n=====sort=====\n");

const sortedById = [...todos].sort((a, b) => b.id - a.id);
console.log(sortedById);

// 9. findIndex
console.log("\n=====findIndex=====\n");

const index = todos.findIndex(todo => todo.text === "배열 내장함수 배우기");
console.log(index);

// 10. 종합 응용
console.log("\n=====종합 응용=====\n");

const notDoneArray = todos.filter(todo => todo.done === false).map(todo => todo.text);
console.log(notDoneArray);
