// 도서관 시스템을 만들어보세요

// 1. 책 객체들이 담긴 배열을 만드세요 (제목, 저자, 출간년도, 대여 상태)
const books = [
  { title: "book1", author: "aaa", year: 2025, isRented: false },
  { title: "book2", author: "bbb", year: 2024, isRented: false },
  { title: "book3", author: "ccc", year: 2023, isRented: true },
];

// 2. 책 제목으로 검색하는 함수를 만드세요
const findBookByTitle = (title) => {
    return books.find(book => book.title === title);
};

console.log(findBookByTitle("book2"));


// 3. 대여 가능한 책들의 제목만 출력하는 함수를 만드세요
const getUnRented = () => {
    return books.filter(book => !book.isRented).map(book => book.title);
};

console.log(getUnRented());


// 4. 새 책을 추가하는 함수를 만드세요
const addNewBook = (title, author, year, isRented) => {
    books.push({title, author, year, isRented});
}

addNewBook("book4", "ddd", 2022, true);
console.log(books);

