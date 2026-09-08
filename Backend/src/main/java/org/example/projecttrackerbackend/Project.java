package org.example.projecttrackerbackend;

public class Project {
    // int ki jagah Integer aur double ki jagah Double kar diya
    private Integer id;
    private String name;
    private Double budget;

    // Default Constructor
    public Project() {
    }

    // Parameterized Constructor
    public Project(Integer id, String name, Double budget) {
        this.id = id;
        this.name = name;
        this.budget = budget;
    }

    // Getters
    public Integer getId() { return id; }
    public String getName() { return name; }
    public Double getBudget() { return budget; }

    // Setters
    public void setId(Integer id) { this.id = id; }
    public void setName(String name) { this.name = name; }
    public void setBudget(Double budget) { this.budget = budget; }

    @Override
    public String toString() {
        return "ID: " + id + " | Project: " + name + " | Budget: $" + budget;
    }
}