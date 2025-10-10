public class User
{
    public int Id { get; set; }
    public string? FirstName { get; set; }
    public string? LastName { get; set; }
    public string? Address { get; set; }
    public string? PhoneNumber { get; set; }
    public string? Email { get; set; }
    public DateOnly? DateOfBirth { get; set; }
    public string? Image { get; set; }

    // Many-to-many
    public List<Organization> Organization { get; } = [];
    public List<Group> Group { get; } = [];
}