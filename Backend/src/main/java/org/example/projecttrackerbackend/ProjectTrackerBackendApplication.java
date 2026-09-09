package org.example.projecttrackerbackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan("org.example.projecttrackerbackend")
public class ProjectTrackerBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(ProjectTrackerBackendApplication.class, args);
    }
}