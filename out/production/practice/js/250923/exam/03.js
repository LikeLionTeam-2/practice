// 학생 정보를 담은 객체를 만드세요
// 포함할 정보: 이름, 나이, 학년, 좋아하는 과목들(배열)

// 그리고 다음 작업들을 해보세요:
// 1. 학생의 이름을 출력하기
// 2. 학생의 나이를 1살 증가시키기
// 3. 새로운 과목을 좋아하는 과목 배열에 추가하기
// 4. 학생 정보를 모두 출력하기

const student = {
    sname: "james",
    sage: 19,
    sgrade: 3, 
    sfavolec: ["math", "english", "art"], // 문자열이다.. "" 잊지 말자

    getold() { // 객체 내부에서 화살표 함수 선언 하지말자. (this 가 없다잉 화살표에는)
       this.sage++;
       return this.sage;
    },
};

const {sname, sage, sgrade} = student;

//이름 출력
console.log(sname);

//나이 증가
console.log(student.getold()); // 20살
console.log(student.getold()); // 21살
console.log(student.sage + 1); // 외부에서 나이 증가


//과목 추가
student.sfavolec.push("science");
console.log(student.sfavolec);

//학생 정보 전부 출력
console.log(student);



