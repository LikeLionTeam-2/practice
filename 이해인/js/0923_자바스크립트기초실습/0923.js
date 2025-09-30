console.log("문제 1: 변수와 기본 연산")
// 다음 변수들을 선언하고 값을 할당하세요
// 1. 당신의 이름 (문자열)
// 2. 나이 (숫자)
// 3. 학생 여부 (불린)
// 그리고 이 정보들을 이용해 자기소개 문장을 만들어 console.log로 출력하세요
let name = "이름뭐게";
let age = 10;
let isStudent = false;
console.log(`${name}, ${age}살 ${isStudent} 입니다.`);


console.log("문제 2: 함수 만들기")
// 1. 두 숫자를 받아서 더한 결과를 반환하는 함수 add를 만드세요
// 2. 원의 반지름을 받아서 넓이를 계산하는 함수 getCircleArea를 만드세요 (π는 3.14 사용)
// 3. 이름을 받아서 "안녕하세요, [이름]님!"을 반환하는 함수 greet을 만드세요
// 각 함수를 호출해서 결과를 확인해보세요
function add(a, b) {
    return a + b;
}

console.log(add(1, 2));

function getCircleArea(r) {
    return 3.14 * r * r;
}

console.log(getCircleArea(3));

function greet(name) {
    return console.log(`안녕하세요, ${name}님!`);
}

greet("이름이");


console.log("문제 3: 객체 다루기")
// 학생 정보를 담은 객체를 만드세요
// 포함할 정보: 이름, 나이, 학년, 좋아하는 과목들(배열)
// 그리고 다음 작업들을 해보세요:
// 1. 학생의 이름을 출력하기
// 2. 학생의 나이를 1살 증가시키기
// 3. 새로운 과목을 좋아하는 과목 배열에 추가하기
// 4. 학생 정보를 모두 출력하기
const student = {
    name: "testusername",
    age: 123,
    grade: 1,
    fSubjects: ["math"],
}
console.log(student.name);
console.log(student.age + 1);
student.fSubjects.push('eng');
console.log(student.fSubjects);
console.log(student);


// 문제 4: 배열 조작
// 1. 과일 이름들이 담긴 배열을 만드세요 (최소 5개)
// 2. 배열의 첫 번째와 마지막 요소를 출력하세요
// 3. 배열에 새로운 과일을 추가하세요
// 4. 배열의 길이를 출력하세요
// 5. 특정 과일이 배열에 있는지 확인하는 코드를 작성하세요
const fruits = ['사과', '바나나', '오렌지', '샤인머스켓', '밍고'];
console.log(fruits[0]);
console.log(fruits[4]);
fruits.push("딸기")
console.log(fruits);
if (fruits.includes('오렌지')) {
    console.log('오렌지가 있습니다.');
} else {
    console.log('오렌지가 없습니다.');
}


// 문제 5: 조건문 활용
// 점수를 받아서 등급을 반환하는 함수를 만드세요
// 90점 이상: A
// 80점 이상: B
// 70점 이상: C
// 60점 이상: D
// 60점 미만: F
// 여러 점수로 테스트해보세요: 95, 87, 73, 65, 45
let score = 59;
const grade = score >= 90 ? "A" :
    score >= 80 ? "B" :
        score >= 70 ? "C" :
            score >= 60 ? 'D' : "F";
console.log(grade);


// 문제 6: switch문 활용
// 요일 번호(1-7)를 받아서 요일명을 반환하는 함수를 만드세요
// 1: 월요일, 2: 화요일, ... 7: 일요일
// 잘못된 번호가 입력되면 "잘못된 요일 번호입니다" 반환
// 1부터 8까지의 숫자로 테스트해보세요
const input = 8;
switch (input) {
    case 1:
        console.log("월요일")
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
        console.log("잘못된 요일 번호입니다")
}


// 문제 7: 종합 문제
// 간단한 계산기 객체를 만드세요
// 포함할 메서드:
// - add(a, b): 덧셈
// - subtract(a, b): 뺄셈
// - multiply(a, b): 곱셈
// - divide(a, b): 나눗셈 (0으로 나누기 체크)
// 그리고 계산 결과를 예쁘게 출력하는 함수도 만드세요
// 예: "10 + 5 = 15"
const calculator = {
    add: function (a, b) {
        return a + b;
    },
    subtract: function (a, b) {
        return a - b;
    },
    multiply: function (a, b) {
        return a * b;
    },
    divide: function (a, b) {
        if (b === 0) {
            return "0으로 나눌 수 없습니다.";
        }
        return a / b;
    },
    printResult: function (operator, a, b) {
        let result;
        let expression;

        switch (operator) {
            case '+':
                result = this.add(a, b);
                expression = `${a} + ${b} = ${result}`;
                break;
            case '-':
                result = this.subtract(a, b);
                expression = `${a} - ${b} = ${result}`;
                break;
            case '*':
                result = this.multiply(a, b);
                expression = `${a} * ${b} = ${result}`;
                break;
            case '/':
                result = this.divide(a, b);
                expression = (typeof result === "string")
                    ? result
                    : `${a} / ${b} = ${result}`;
                break;
            default:
                expression = "지원하지 않는 연산자입니다.";
        }

        console.log(expression);
    }
};

calculator.printResult('+', 10, 5);
calculator.printResult('-', 10, 5);
calculator.printResult('*', 10, 5);
calculator.printResult('/', 10, 5);
calculator.printResult('/', 10, 0);


// 문제 8: 실전 응용
// 도서관 시스템을 만들어보세요
// 1. 책 객체들이 담긴 배열을 만드세요 (제목, 저자, 출간년도, 대여 상태)
// 2. 책 제목으로 검색하는 함수를 만드세요
// 3. 대여 가능한 책들의 제목만 출력하는 함수를 만드세요
// 4. 새 책을 추가하는 함수를 만드세요

// 귀찮다....

const books = [
    {
        title: "소년이 온다",
        author: "한강",
        publication_date: "2014.05.19",
        isBorrowed: false,
    },
    {
        title: "채식주의자",
        author: "한강",
        publication_date: "2022.03.28",
        isBorrowed: false,
    },
    {
        title: "작별하지 않는다",
        author: "한강",
        publication_date: "2021.09.09",
        isBorrowed: true,
    },
    {
        title: "불변의 법칙",
        author: "모건 하우절",
        publication_date: "2024.02.28",
        isBorrowed: false,
    },
    {
        title: "마흔에 읽는 쇼펜하우어",
        author: "강용수",
        publication_date: "2023.09.07",
        isBorrowed: false,
    }
];

// 책 제목으로 검색
function searchByTitle(title) {
    const found = books.find(book => book.title === title);
    if (found) {
        console.log(`"${title}" 검색 결과:`);
        console.log(found);
    } else {
        console.log(`"${title}"에 해당하는 책을 찾을 수 없습니다.`);
    }
}

// 대여 가능한 책만 출력
function showAvailableBooks() {
    console.log("📌 대여 가능한 책 목록:");
    books
        .filter(book => !book.isBorrowed)
        .forEach(book => console.log(`- ${book.title}`));
}

// 새 책 추가
function addBook(title, author, publication_date) {
    const newBook = {
        title,
        author,
        publication_date,
        isBorrowed: false
    };
    books.push(newBook);
    console.log(`새 책 "${title}" 이(가) 추가되었습니다.`);
}

searchByTitle("채식주의자");
showAvailableBooks();
addBook("데미안", "헤르만 헤세", "2020.01.15");
showAvailableBooks();
