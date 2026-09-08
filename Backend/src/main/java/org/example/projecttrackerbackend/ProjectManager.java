package org.example.projecttrackerbackend;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ProjectManager {
    // Map ka use projects ko store karne ke liye (Key: ID, Value: Project object)
    private Map<Integer, Project> projectDatabase = new HashMap<>();
    private int currentId = 1; // Auto-increment ID ke liye

    // 1. Naya Project Add Karna
    public void addProject(String name, double budget) {
        Project newProject = new Project(currentId, name, budget);
        projectDatabase.put(currentId, newProject);
        System.out.println("✅ Project Added: " + name);
        currentId++;
    }

    // 2. Saare Projects Dekhna (List ka use karke)
    public List<Project> getAllProjects() {
        return new ArrayList<>(projectDatabase.values());
    }

    // 3. Project Delete Karna (Exception Handling ke sath)
    public void deleteProject(int id) throws ProjectNotFoundException {
        if (!projectDatabase.containsKey(id)) {
            throw new ProjectNotFoundException("❌ Error: Project with ID " + id + " nahi mila!");
        }
        projectDatabase.remove(id);
        System.out.println("🗑️ Project (ID: " + id + ") delete ho gaya.");
    }

    // 4. Total Budget Calculate Karna
    public double calculateTotalBudget() {
        double total = 0;
        for (Project proj : projectDatabase.values()) {
            total += proj.getBudget();
        }
        return total;
    }
}