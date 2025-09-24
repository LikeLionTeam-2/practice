/* 📝 문제 5: 조건문 활용

    ```javascript
// 점수를 받아서 등급을 반환하는 함수를 만드세요
// 90점 이상: A
// 80점 이상: B
// 70점 이상: C
// 60점 이상: D
// 60점 미만: F

// 여러 점수로 테스트해보세요: 95, 87, 73, 65, 45   */

function ReturnGrade(score) {
    if (score === 100) {
        console.log("축하합니다. 당신은 100점으로 ★[S등급]★ 입니다");
    }

    else if (score >= 90) {
        console.log("당신의 성적은 90점 이상이므로 ★[A등급]★ 입니다");
    }

    else if (score >= 80 && score < 90) {
        console.log("당신의 성적은 80점 이상 90미만 이므로 [B등급] 입니다");
    }

    else if (score >= 70 && score < 80) {
        console.log("당신의 성적은 70점 이상 80미만이므로 [C등급] 입니다");
    }

    else if (score >= 60 && score < 70) {
        console.log("당신의 성적은 60점 이상 70미만이므로 [D등급] 입니다");
    }

    else if (score < 60) {
        console.log("당신은 60점 미만이므로 [F등급] 입니다.");
    }

    else {
        console.log("제대로 된 점수를 입력하십시오..........");
    }
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('점수를 입력하세요: ', (score) => {
    ReturnGrade(Number(score));
    readline.close();
});

