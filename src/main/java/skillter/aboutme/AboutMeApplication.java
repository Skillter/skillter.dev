package skillter.aboutme;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AboutMeApplication {

	public static void main(String[] args) {
		System.setProperty("spring.devtools.restart.enabled", "true");

		SpringApplication.run(AboutMeApplication.class, args);

	}

}
