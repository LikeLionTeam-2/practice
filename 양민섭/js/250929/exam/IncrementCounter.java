package exam;

import java.util.concurrent.ThreadLocalRandom;

public class IncrementCounter implements Runnable {

    private int randomMillis = ThreadLocalRandom.current().nextInt(0, 11); // 0~10
    @Override
    public void run() {
        for (int i = 1; i <= 100; i++) {
            System.out.println("Increament: " + i);
            try {
                Thread.sleep(randomMillis);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
        }
    }
}
