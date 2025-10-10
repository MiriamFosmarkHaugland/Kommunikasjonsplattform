public class Organization
{
    public int Id { get; set; }
    public string? OrgNumber { get; set; }
    public string? Type { get; set; }
    public string? Name { get; set; }
    public string? Address { get; set; }
    public string? PhoneNumber { get; set; }
    public string? Image { get; set; }

    // One-to-many (One org to many levels)
    public List<Level> Level { get; } = [];

    // Many-to-many
    public List<User> User { get; } = [];
}