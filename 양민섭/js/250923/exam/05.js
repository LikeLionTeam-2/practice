// 점수를 받아서 등급을 반환하는 함수를 만드세요
// 90점 이상: A
// 80점 이상: B
// 70점 이상: C
// 60점 이상: D
// 60점 미만: F

// 여러 점수로 테스트해보세요: 95, 87, 73, 65, 45

//if문
function checkGrade(score) {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if(score >= 60) return "D";
    return "F";
}

//switch 사용
function checkGrade2(score){
    switch (true) {
      case score >= 90:
        return "A";
        break;
      case score >= 80:
        return "B";
        break;
      case score >= 70:
        return "C";
        break;
      case score >= 60:
        return "D";
        break;
      default:
        return "F";
        break;
    }
}

//삼항연산자 사용
function checkGrade3(score){
    return  score >= 90 ? "A" :
            score >= 80 ? "B" :
            score >= 70 ? "C" :
            score >= 60 ? "D" : "F";
}

console.log(checkGrade(95));
console.log(checkGrade(87));
console.log(checkGrade(73));
console.log(checkGrade(65));
console.log(checkGrade(45));

console.log(checkGrade2(95));
console.log(checkGrade2(87));
console.log(checkGrade2(73));
console.log(checkGrade2(65));
console.log(checkGrade2(45));

console.log(checkGrade3(95));
console.log(checkGrade3(87));
console.log(checkGrade3(73));
console.log(checkGrade3(65));
console.log(checkGrade3(45));
