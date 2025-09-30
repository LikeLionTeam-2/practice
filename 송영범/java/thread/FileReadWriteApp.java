package threadexam;

import java.io.*;
import java.util.Scanner;

class FileReaderTask implements Runnable {
    private String filename;

    public FileReaderTask(String filename) {
        this.filename = filename;
    }

    @Override
    public void run() {
        try (BufferedReader br = new BufferedReader(new FileReader(filename))) {

            String line;
            int lineNumber = 1;

            while ((line = br.readLine()) != null) {
                // 줄 번호 추가하여 쓰기
                System.out.println("FileReader LineNum" + lineNumber + ": " + line);
                lineNumber++;
            }

        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}

class FileWriterTask implements Runnable {
    private String filename;

    public FileWriterTask(String filename) {
        this.filename = filename;
    }

    @Override
    public void run() {
        try (BufferedWriter bw = new BufferedWriter(new FileWriter(filename));
             Scanner sc = new Scanner(System.in)) {

            while(true) {
                System.out.print("내용을 입력해주세요(exit 입력 시 종료) : ");
                String text = sc.nextLine();
                if(text.equals("exit")) {
                    System.out.println("FileWriter를 종료합니다.");
                    break;
                }
                bw.write(text);
                bw.newLine();
                System.out.println(filename + "에 저장 완료.");
            }

        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}

public class FileReadWriteApp {
    public static void main(String[] args) {
        Thread readerThread = new Thread(new FileReaderTask("output.txt"));
        Thread writerThread = new Thread(new FileWriterTask("input.txt"));

        readerThread.start();
        writerThread.start();
    }
}
