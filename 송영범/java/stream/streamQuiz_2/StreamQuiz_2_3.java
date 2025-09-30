package streamexam;

import java.util.Arrays;
import java.util.List;

public class StreamQuiz_2_3 {
    public static void main(String[] args) {
        System.out.println("=====문제 3: 리스트의 각 요소에 연산 적용하기=====\n");

        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);

        System.out.println("원본 리스트: " + numbers);

        List<Integer> plusTen = numbers.stream()
                .map(n -> n += 10)
                .toList();

        System.out.println("변환된 리스트: " + plusTen);
    }
}
