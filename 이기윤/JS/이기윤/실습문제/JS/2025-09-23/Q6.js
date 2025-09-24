/*📝 문제 6: switch문 활용

    ```javascript
// 요일 번호(1-7)를 받아서 요일명을 반환하는 함수를 만드세요
// 1: 월요일, 2: 화요일, ... 7: 일요일
// 잘못된 번호가 입력되면 "잘못된 요일 번호입니다" 반환

// 1부터 8까지의 숫자로 테스트해보세요*/

// 요일 번호(1-7)를 받아서 요일명을 반환하는 함수


function ReturnDayName(dayNumber) {
    let dayName;

    switch (dayNumber) {
        case 1:
            dayName = "월요일";
            break;

        case 2:
            dayName = "화요일";
            break;

        case 3:
            dayName = "수요일";
            break;

        case 4:
            dayName = "목요일";
            break;

        case 5:
            dayName = "금요일";
            break;

        case 6:
            dayName = "토요일";
            break;

        case 7:
            dayName = "일요일";
            break;

        default:
            dayName = "잘못된 요일 번호입니다";
    }

    return dayName;
}


const InputDayNumber = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


InputDayNumber.question('요일 번호(1-7)를 입력하시오: ', (number) => {
    const dayNum = Number(number);
    console.log(ReturnDayName(dayNum));
    InputDayNumber.close();
});


