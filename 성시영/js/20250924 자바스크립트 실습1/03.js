// 학생 정보를 담은 객체를 만드세요
// 포함할 정보: 이름, 나이, 학년, 좋아하는 과목들(배열)

// 그리고 다음 작업들을 해보세요:
// 1. 학생의 이름을 출력하기
// 2. 학생의 나이를 1살 증가시키기
// 3. 새로운 과목을 좋아하는 과목 배열에 추가하기
// 4. 학생 정보를 모두 출력하기
const student = {
  _name: "성시영",
  _age: 29,
  _grade: 6,
  _favoriteSubjects: ["수학", "과학"],
  get name() {
    return this._name;
  },
  addAge() {
    this._age +=1;
  },
  addFavoriteSubject(subject) {
    this._favoriteSubjects.push(subject);
  },
  printInfo() {
    console.log(`제 이름은 ${this._name}이고, 나이는 ${this._age}이며, 좋아하는 과목들은 ${this._favoriteSubjects}입니다.`)
  }
};

console.log(student.name);

student.addAge();

student.addFavoriteSubject("체육");

student.printInfo();
