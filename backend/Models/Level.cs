using System.ComponentModel.DataAnnotations;

public class Level
{
    public int Id { get; set; }
    public string? Name { get; set; }

    // One-to-many -> One organization can have many levels
    public int OrganizationId { get; set; } // Required foreign key property
    public Organization? Organization { get; set; } = null; // Required reference navigation to principal

    // Many-to-many
    public List<Group> Group { get; } = []; 
}