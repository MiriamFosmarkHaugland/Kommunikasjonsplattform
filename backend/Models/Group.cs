public class Group
{
    public int Id { get; set; }
    public string? Name { get; set; }
    public string? Image { get; set; }

    // One-to-may
    public int LevelId { get; set; }
    public Level? Level { get; set; } = null;

    // Many-to-many
    public List<User> User { get; } = [];
}