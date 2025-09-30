package streamexam;

import java.util.Arrays;

public class StreamQuiz_1_1 {
    public static void main(String[] args) {
        System.out.println("=====실습 문제 1: 숫자 배열 처리=====\n");

        int[] numbers = {3, 10, 4, 17, 6};

        int sum = Arrays.stream(numbers)
                .filter(n -> n % 2 == 0)
                .sum();

        System.out.println("합계 : " + sum);
    }
}
