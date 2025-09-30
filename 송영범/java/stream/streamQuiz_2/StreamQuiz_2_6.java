package streamexam;

import java.util.Arrays;
import java.util.List;

public class StreamQuiz_2_6 {
    public static void main(String[] args) {
        System.out.println("=====문제 6: 모든 요소에 대해 조건 확인하기=====\n");

        List<Integer> numbers1 = Arrays.asList(2, 4, 6, 8, 10);
        List<Integer> numbers2 = Arrays.asList(2, 4, 5, 8, 10);

        boolean allEven1 = numbers1.stream().allMatch(n -> n % 2 == 0);
        boolean allEven2 = numbers2.stream().allMatch(n -> n % 2 == 0);

        System.out.println("numbers1 모두 짝수인가? " + allEven1);
        System.out.println("numbers2 모두 짝수인가? " + allEven2);
    }
}
