// 문제 8: 실전 응용
console.log("\n=======문제 8=======\n");

let library = [
    {title: "퓨처 셀프", author: "벤저민 하디", publishedYear: 2024, isRented: false},
    {title: "채식주의자", author: "한강", publishedYear: 2022, isRented: true},
    {title: "미움받을 용기", author: "기시미 이치로", publishedYear: 2013, isRented: false},
    {title: "언어의 온도", author: "이기주", publishedYear: 2016, isRented: true}
]

const search = (title) => {
    let check = false;

    console.log(`검색한 책 제목 : ${title}`);

    for (let i = 0; i < library.length; i++) {
        if(title == library[i].title) {
            console.log(library[i]);
            check = true;
            break;
        }
    }
    if (!check) console.log("검색한 책은 없습니다.");
    console.log();
}

search("미움받을 용기");
search("제목");

const canRent = () => {
    console.log("대여 가능한 책");
    let count = 0;
    for (let i = 0; i < library.length; i++) {
        if(!library[i].isRented) {
            console.log(library[i].title);
            count++;
        }
    }
    if(count == 0) console.log("대여 가능한 책이 없습니다.");
    console.log();
}

canRent();

const addBook = (_title, _author, _publishedYear) => {
    library.push({title: _title, author: _author, publishedYear: _publishedYear, isRented: false});
    console.log("추가 완료\n");
}

addBook("제목이름","작가이름",2025);

// console.log(library);