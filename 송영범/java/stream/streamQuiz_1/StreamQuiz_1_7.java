package streamexam;

import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

class Temperature {
    private String city;
    private int maxTemp;

    public Temperature(String city, int maxTemp) {
        this.city = city;
        this.maxTemp = maxTemp;
    }

    public String getCity() {
        return city;
    }

    public int getMaxTemp() {
        return maxTemp;
    }
}

public class StreamQuiz_1_7 {
    public static void main(String[] args) {
        System.out.println("=====실습 문제 7: 도시별 최고 온도 기록=====\n");

        List<Temperature> temperatures = Arrays.asList(
                new Temperature("Seoul", 33),
                new Temperature("New York", 30),
                new Temperature("Seoul", 34),
                new Temperature("New York", 28)
        );

        Map<String, Integer> maxTemp = temperatures.stream()
                .collect(Collectors.toMap(
                        Temperature::getCity,
                        Temperature::getMaxTemp,
                        Integer::max
                ));

        maxTemp.forEach((city, temp) -> {
            System.out.println(city + ": " + temp);
        });
    }
}
