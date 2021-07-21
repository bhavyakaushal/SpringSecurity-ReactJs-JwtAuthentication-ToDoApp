package com.jpajwt;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.jpajwt.models.UserDaO;



@SpringBootApplication
@EnableJpaRepositories(basePackageClasses = UserDaO.class)
public class JpajwtApplication {

	public static void main(String[] args) {
		SpringApplication.run(JpajwtApplication.class, args);
	}

}
