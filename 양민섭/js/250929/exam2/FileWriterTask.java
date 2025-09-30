package exam2;

import java.io.*;

public class FileWriterTask implements Runnable {
    @Override
    public void run() throws RuntimeException {

        System.out.println("[Writer] 스레드 시작!!");

        try (
                PrintWriter pw = new PrintWriter(new FileOutputStream("양민섭/js/250929/exam2/output.txt", true));
                BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        ) {
            while (true) {
                System.out.print("[Writer] 입력 > ");
                String input = br.readLine();
                pw.println(input);

                if ("exit".equalsIgnoreCase(input)) {
                    System.out.println("[Writer] 입력 종료");
                    break;
                }
            }
        } catch(IOException e){
            throw new RuntimeException(e);
        }
    }
}

