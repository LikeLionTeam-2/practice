package streamexam;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class StreamQuiz_2_1 {
    public static void main(String[] args) {
        System.out.println("=====문제 1: 문자열 리스트 정렬하기=====\n");

        List<String> words = Arrays.asList("apple", "banana", "kiwi", "grape", "strawberry");

        Collections.sort(words, (a, b) -> a.length() - b.length());

        System.out.println(words);
    }
}
