/*📝 문제 4: 배열 조작

    ```javascript
// 1. 과일 이름들이 담긴 배열을 만드세요 (최소 5개)
// 2. 배열의 첫 번째와 마지막 요소를 출력하세요
// 3. 배열에 새로운 과일을 추가하세요
// 4. 배열의 길이를 출력하세요
// 5. 특정 과일이 배열에 있는지 확인하는 코드를 작성하세요 */

const Fruit_Name = ['수박', '복숭아', '딸기', '사과', '용과']

console.log(Fruit_Name[0], Fruit_Name[Fruit_Name.length - 1]);

console.log(Fruit_Name.length); // 기존 배열의 길이 출력

Fruit_Name.push('새로운 과일');   // 새로운 과일을 넣은 뒤

console.log(Fruit_Name);        // 새로운 과일이 들어간 뒤 배열을 출력

console.log(Fruit_Name.length); // 새로운 과일이 들어간 뒤의 배열의 길이를 출력

function CheckFruit(Fruit) {

    if (Fruit_Name.includes(Fruit)) {
        console.log(Fruit + "가 배열에 있습니다");
    } else {
        console.log(Fruit + "가 배열에 없습니다");
    }
}
CheckFruit('딸기')
