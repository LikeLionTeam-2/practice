package exam;

import java.util.concurrent.ThreadLocalRandom;

public class DecrementCounter implements Runnable {
    //0 ~ 10 밀리 초 사이의 무작위 시간
    private int randomMillis = ThreadLocalRandom.current().nextInt(0, 11);

    @Override
    public void run() {
        for (int i = 100; i >= 1; i--) {
            System.out.println("Decreament: " + i);
            try {
                Thread.sleep(randomMillis);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
        }
    }
}
