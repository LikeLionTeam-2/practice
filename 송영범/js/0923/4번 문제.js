// 문제 4: 배열 조작
console.log("\n=======문제 4=======\n");

const fruits = ["딸기", "포도", "사과", "수박", "멜론"];

console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);

fruits.push("키위");
console.log(fruits);

console.log(fruits.length);

const isExist = (fruit) => {
    let check = false;
    for (let i = 0; i < fruits.length; i++) {
        if (fruit == fruits[i]) check = true;
    }
    if (check) console.log(`${fruit}은(는) 배열에 있습니다.`);
    else console.log(`${fruit}은(는) 배열에 없습니다.`);
}

isExist("키위");
isExist("바나나");
