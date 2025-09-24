const person = {
  name: "김지번",
  age: 30,
  grade: "14",
  favorite: ["과학", "사회"],
};

// console.log(person.name);
console.log(person["name"]);

person.age++;
console.log(person["age"]);

person.favorite.push("체육");
console.log(person.favorite);

console.log(person);
