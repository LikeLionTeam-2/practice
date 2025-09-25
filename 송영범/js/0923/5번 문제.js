// 문제 5: 조건문 활용
console.log("\n=======문제 5=======\n");

let scores = [95, 87, 73, 65, 45];

const getGrade = (score) => {
    if (score >= 90) console.log(`점수: ${score}점  등급: A`);
    else if (score >= 80) console.log(`점수: ${score}점  등급: B`);
    else if (score >= 70) console.log(`점수: ${score}점  등급: C`);
    else if (score >= 60) console.log(`점수: ${score}점  등급: D`);
    else console.log(`점수: ${score}점  등급: F`);
}

for (let i = 0; i < scores.length; i++) {
    getGrade(scores[i]);
}
