package streamexam;

import java.util.Arrays;
import java.util.List;

public class StreamQuiz_1_2 {
    public static void main(String[] args) {
        System.out.println("=====실습 문제 2: 문자열 리스트 필터링=====\n");

        List<String> words = Arrays.asList("apple", "banana", "cherry", "date");

        List<String> wordList = words.stream()
                .filter(s -> s.length() >= 5)
                .map(s -> s.toUpperCase())
                .toList();

        System.out.println(wordList);
    }
}
