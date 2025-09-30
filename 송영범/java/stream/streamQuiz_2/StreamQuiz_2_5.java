package streamexam;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class StreamQuiz_2_5 {
    public static void main(String[] args) {
        System.out.println("=====문제 5: 요소 변환하기=====\n");

        List<Integer> numbers = Arrays.asList(2, 3, 4, 5);

        System.out.println("원본 리스트: " + numbers);

        List<Integer> squaured = numbers.stream()
                .map(n -> n*n)
                .collect(Collectors.toList());

        System.out.println("제곱된 리스트: " + squaured);
    }
}
