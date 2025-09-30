package threadexam;

class IncrementCounter implements Runnable {
    @Override
    public void run() {
        System.out.println("Increment start");
        for (int i = 1; i <= 100; i++) {
            System.out.println("Increment: " + i);
            try {
                Thread.sleep((int)(Math.random()*10));
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
        }
        System.out.println("Increment end");
    }
}

class DecrementCounter implements Runnable {
    @Override
    public void run() {
        System.out.println("Decrement start");
        for (int i = 100; i >= 1 ; i--) {
            System.out.println("Decrement: " + i);
            try {
                Thread.sleep((int)(Math.random()*10));
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
        }
        System.out.println("Decrement end");
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
