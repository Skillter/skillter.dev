package skillter.aboutme;

import java.io.File;
import java.io.IOException;

public class TemplatesAutoRefresh {

    public static final String TEMPLATES_PATH = System.getProperty("user.dir") + "/src/main/resources/templates";
    public static final String GRADLE_COMMAND = "processResources";
    public static final int WAIT_TIME_MS = 1000;

    public static void runAsync() {
        System.out.println(TEMPLATES_PATH);
        System.out.println("1");
        new Thread(() -> {
            System.out.println("2");
            while (true) {
                try {
                    Thread.sleep(WAIT_TIME_MS);
                } catch (InterruptedException e) {
                    throw new RuntimeException(e);
                }
                System.out.println("3");
                File[] files = new File(TEMPLATES_PATH).listFiles();
                System.out.println("4");
                if (files == null) continue;
                System.out.println("5");
                for (File file : files) {
                    System.out.println("6");
                    if (System.currentTimeMillis() - file.lastModified() < 1000) {
                        System.out.println("File has updated: " + file.getName());
                        System.out.println("");
                        try {
                            Runtime.getRuntime().exec("\"F:\\.Java Workspace\\aboutme\\gradlew.bat\" processResources");
                        } catch (IOException e) {
                            throw new RuntimeException(e);
                        }
                    }
                }
            }
        }).start();
    }


}
