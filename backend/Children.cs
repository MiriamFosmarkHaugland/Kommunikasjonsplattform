using System.ComponentModel.DataAnnotations;
using Backend;

public class Children
{
    public int Id { get; set; }
    public string? First_name { get; set; }
    public string? Last_name { get; set; }
    public DateOnly? Date_of_birth { get; set; }
    public string? Profile_image { get; set; }

    // One-to-many -> Many children can be in one department
    public int Department_id { get; set; } // Required foreign key property
    public Departments? Departments { get; set; } // Required reference navigation to principal

    // Many-to-many -> Many children can have many guardians
    public List<Guardians> Guardians { get; } = [];
}