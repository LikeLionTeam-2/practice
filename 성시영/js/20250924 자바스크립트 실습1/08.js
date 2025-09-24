// 도서관 시스템을 만들어보세요
// 1. 책 객체들이 담긴 배열을 만드세요 (제목, 저자, 출간년도, 대여 상태)
// 2. 책 제목으로 검색하는 함수를 만드세요
// 3. 대여 가능한 책들의 제목만 출력하는 함수를 만드세요
// 4. 새 책을 추가하는 함수를 만드세요

const books = [
  { title: "책1", author: "저자1", year: 2001, isAvailable: true },
  { title: "책2", author: "저자2", year: 2002, isAvailable: false },
  { title: "책3", author: "저자3", year: 2003, isAvailable: true },
];

const findBookByTitle = (title) => {
  return books.find(book => book.title === title);
};

const getAvailableBooks = () => {
  return books.filter(book => book.isAvailable).map(book => book.title);
};

const addNewBook = (newBook) => {
  books.push(newBook);
};

console.log(findBookByTitle("책2"));
console.log(getAvailableBooks());
addNewBook({ title: "책4", author: "저자4", year: 2004, isAvailable: true });
console.log(books);
