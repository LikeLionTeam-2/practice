package streamexam;

import java.util.Arrays;
import java.util.List;

class Student {
    private String name;
    private int score;

    public Student(String name, int score) {
        this.name = name;
        this.score = score;
    }

    public String getName() {
        return name;
    }

    public int getScore() {
        return score;
    }
}

public class StreamQuiz_1_3 {
    public static void main(String[] args) {
        System.out.println("=====실습 문제 3: 학생 성적 처리=====\n");

        List<Student> students = Arrays.asList(
                new Student("Alice", 82),
                new Student("Bob", 90),
                new Student("Charlie", 72),
                new Student("David", 76)
        );

        List<String> selectedStu = students.stream()
                .filter(student -> student.getScore() >= 80)
                .map(student -> student.getName())
                .sorted()
                .toList();

        System.out.println(selectedStu);
    }
}
