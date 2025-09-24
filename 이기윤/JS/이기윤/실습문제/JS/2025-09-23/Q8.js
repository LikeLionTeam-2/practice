/*📝 문제 8: 실전 응용

    ```javascript
// 도서관 시스템을 만들어보세요
// 1. 책 객체들이 담긴 배열을 만드세요 (제목, 저자, 출간년도, 대여 상태)
// 2. 책 제목으로 검색하는 함수를 만드세요
// 3. 대여 가능한 책들의 제목만 출력하는 함수를 만드세요
// 4. 새 책을 추가하는 함수를 만드세요*/



const r1 = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
//1번
let books = [
    { title: "자바", author: "자바저자", year: 2020, status: "대여중" },
    { title: "자바스크립트", author: "자바스크립트저자", year: 2019, status: "반납완료" },
    { title: "SQL", author: "SQL저자", year: 2023, status: "대여가능" }
];
//2번
function findBookByTitle(title) {
    return books.find(book => book.title === title);
}

function availableBooks() {
    return books.filter(book => book.status === "대여가능").map(book => book.title);
}

function addBook(title, author, year, status) {
    books.push({ title, author, year, status });
}

r1.question('찾을 책 제목을 입력하시오: ', (inputTitle) => {
    const book = findBookByTitle(inputTitle);

    if(book) {
        console.log("검색 결과:", book);
    } else {
        console.log("일치하는 책이 없습니다.");
    }

    console.log("대여 가능한 책 목록:", availableBooks());

    addBook("추가한 책", "누군가", 2025, "대여가능");
    console.log("새 책 추가 후 대여 가능한 책 목록:", availableBooks());

    r1.close();
});