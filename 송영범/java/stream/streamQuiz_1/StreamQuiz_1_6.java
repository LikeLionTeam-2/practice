package streamexam;

import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

class StudentWithScore {
    private String name;
    private int age;
    private int score;

    public StudentWithScore(String name, int age, int score) {
        this.name = name;
        this.age = age;
        this.score = score;
    }

    public int getAge() {
        return age;
    }

    public int getScore() {
        return score;
    }
}

public class StreamQuiz_1_6 {
    public static void main(String[] args) {
        System.out.println("=====실습 문제 6: 나이대별 평균 점수 계산=====\n");

        List<StudentWithScore> students = Arrays.asList(
                new StudentWithScore("Alice", 14, 88),
                new StudentWithScore("Bob", 23, 82),
                new StudentWithScore("Charlie", 17, 95),
                new StudentWithScore("David", 21, 73)
        );

        Map<Integer, Double> avgScore = students.stream()
                .collect(Collectors.groupingBy(
                        s -> (s.getAge() / 10) * 10,
                        Collectors.averagingInt(StudentWithScore::getScore)
                ));

        avgScore.forEach((age, avg) -> {
            System.out.println(age + "s: " + avg);
        });
    }
}
