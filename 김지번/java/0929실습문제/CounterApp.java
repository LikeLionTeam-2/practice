import java.util.Random;

// 1부터 100까지 숫자를 증가시키며 출력
class IncrementCounter implements Runnable {
    @Override
    public void run() {
        Random random = new Random();
        for (int i = 1; i <= 100; i++) {
            System.out.println("Increment: " + i);
            try {
                Thread.sleep(random.nextInt(10) + 1);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}

// 100부터 1까지 숫자를 감소시키며 출력
class DecrementCounter implements Runnable {
    @Override
    public void run() {
        Random random = new Random();
        for (int i = 100; i >= 1; i--) {
            System.out.println("Decrement: " + i);
            try {
                Thread.sleep(random.nextInt(10) + 1);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}

public class CounterApp {
    public static void main(String[] args) {
        Thread incrementThread = new Thread(new IncrementCounter());
        Thread decrementThread = new Thread(new DecrementCounter());

        incrementThread.start();
        decrementThread.start();
    }
}