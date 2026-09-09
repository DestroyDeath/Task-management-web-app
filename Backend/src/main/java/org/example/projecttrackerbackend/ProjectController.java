package org.example.projecttrackerbackend;

import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/projects")
@CrossOrigin(origins = {
    "http://localhost:5173",
    "https://friendly-palmier-1cc4b0.netlify.app"
})public class ProjectController {

    private ProjectManager manager = new ProjectManager();

    // 1. React se saare projects mangwane ke liye (GET)
    @GetMapping
    public List<Project> getAllProjects() {
        return manager.getAllProjects();
    }

    // 2. React se naya project add karne ke liye (POST)
    @PostMapping
    public Project addProject(@RequestBody Project project) {
        manager.addProject(project.getName(), project.getBudget());
        return project;
    }

    // 3. React se delete karne ke liye (DELETE)
    @DeleteMapping("/{id}")
    public String deleteProject(@PathVariable int id) {
        try {
            manager.deleteProject(id);
            return "Project Successfully Deleted";
        } catch (ProjectNotFoundException e) {
            return e.getMessage();
        }
    }
}