package streamexam;

import java.util.Arrays;

public class StreamQuiz_2_2 {
    public static void main(String[] args) {
        System.out.println("=====문제 2: 최대값 찾기=====\n");

        int[] numbers = {23, 45, 12, 67, 34, 89, 56};

        int max = Arrays.stream(numbers).max().getAsInt();

        System.out.println("최댓값: " + max);
    }
}
