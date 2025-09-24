const add = function (a, b) {
  return a + b;
};

const getCircleArea = function (a) {
  return a * a * 3.14;
};

const getCircleArea2 = (a) => a * a * 3.14;

const greet = function (name) {
  console.log(`안녕하세요, ${name}님!`);
};

let addresult = add(10, 20);
console.log(addresult);

let circleArea = getCircleArea(3);
console.log(circleArea);

let name = "김지번";
greet(name);
