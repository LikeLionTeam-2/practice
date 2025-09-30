package streamexam;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

public class StreamQuiz_2_4 {
    public static void main(String[] args) {
        System.out.println("=====문제 4: 조건에 맞는 요소 찾기=====\n");

        List<String> words = Arrays.asList("cat", "dog", "elephant", "bird", "giraffe");

        Optional<String> first = words.stream()
                .filter(word -> word.length() >= 5)
                .findFirst();

        first.ifPresent(word ->
                System.out.println("조건에 맞는 첫 번째 단어: " + word)
        );

    }
}
