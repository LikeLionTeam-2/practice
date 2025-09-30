package exam2;

import java.io.*;

public class FileReaderTask implements Runnable {
    @Override
    public void run() throws RuntimeException {

        System.out.println("[Reader] 스레드 시작!!");

        try (
            FileInputStream fis = new FileInputStream("양민섭/js/250929/exam2/input.txt");
            InputStreamReader isr = new InputStreamReader(fis, "UTF-8");
            BufferedReader br = new BufferedReader(isr);
            ) {
            String msg = null;

            while((msg = br.readLine()) != null ) {
                System.out.println("[Reader]: " + msg);
                Thread.sleep(1000);
            }
            System.out.println("[Reader] 파일 읽기 완료");

        } catch (IOException e) {
            throw new RuntimeException(e);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
    }
}
