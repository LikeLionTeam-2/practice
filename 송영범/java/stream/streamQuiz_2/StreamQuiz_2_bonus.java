package streamexam;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class StreamQuiz_2_bonus {
    public static void main(String[] args) {
        System.out.println("=====보너스 문제: 종합 실습=====\n");

        List<String> fruits = Arrays.asList("apple", "kiwi", "banana", "fig", "grape", "mango");

        List<String> answers = fruits.stream()
                .filter(fruit -> fruit.length() >= 4)
                .map(fruit -> fruit.toUpperCase())
                .sorted()
                .collect(Collectors.toList());

        System.out.println(answers);
    }
}
