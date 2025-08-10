using System.ComponentModel.DataAnnotations;

public class Departments
{
    public int Id { get; set; }
    public string? Name { get; set; }
    public int Room_number { get; set; }
    public string? Room_type { get; set; }
    public int Capacity { get; set; }

    // One-to-many -> One department can have many children
    public List<Children> Children { get; } = []; // Collection navigation contaning dependants
}