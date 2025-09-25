// 문제 6: switch문 활용
console.log("\n=======문제 6=======\n");

const week = (num) => {
    switch (num) {
        case 1:
            console.log("월요일");
            break;
        case 2:
            console.log("화요일");
            break;
        case 3:
            console.log("수요일");
            break;
        case 4:
            console.log("목요일");
            break;
        case 5:
            console.log("금요일");
            break;
        case 6:
            console.log("토요일");
            break;
        case 7:
            console.log("일요일");
            break;
        default:
            console.log("잘못된 요일 번호입니다");
            break;
    }
}

for (let i = 1; i <= 8; i++) {
    week(i);
}
