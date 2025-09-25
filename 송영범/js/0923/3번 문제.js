//문제 3: 객체 다루기
console.log("\n=======문제 3=======\n");

const student = {
    name: "lee",
    age: 17,
    grade: 1,
    like: ["수학", "과학"]
};

console.log(student.name);

student.age++;
console.log(student.age);

student.like.push("영어");
console.log(student.like);

console.log(student);