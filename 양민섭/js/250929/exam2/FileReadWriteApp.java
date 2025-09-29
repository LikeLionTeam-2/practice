package exam2;

public class FileReadWriteApp {
    public static void main(String[] args) {
        Thread fileReaderTask = new Thread(new FileReaderTask());
        Thread fileWriterTask = new Thread(new FileWriterTask());

        fileReaderTask.start();
        fileWriterTask.start();
    }
}
