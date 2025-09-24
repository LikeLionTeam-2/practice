/* 📝 문제 3: 객체 다루기

    ```javascript
// 학생 정보를 담은 객체를 만드세요
// 포함할 정보: 이름, 나이, 학년, 좋아하는 과목들(배열)

// 그리고 다음 작업들을 해보세요:
// 1. 학생의 이름을 출력하기
// 2. 학생의 나이를 1살 증가시키기
// 3. 새로운 과목을 좋아하는 과목 배열에 추가하기
// 4. 학생 정보를 모두 출력하기   */


const personLEE = {
    name : '이기윤',
    age : 24,
    glade : 4,
    favorite_subject : ['JAVA']
}
console.log(personLEE.name);

console.log(personLEE.age+1);

personLEE.favorite_subject.push('SQL');

console.log(personLEE.favorite_subject);


console.log(personLEE);