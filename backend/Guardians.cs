using System.ComponentModel.DataAnnotations;
using Backend;

public class Guardians
{
    public int Id { get; set; }
    public string? First_name { get; set; }
    public string? Last_name { get; set; }
    public string? Phonenumber { get; set; }
    public string? Address { get; set; }

    // Many-to-many -> Many guardians can have many children
    public List<Children> Children { get; } = [];
}