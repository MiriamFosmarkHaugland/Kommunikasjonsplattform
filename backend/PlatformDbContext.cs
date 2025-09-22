using Microsoft.EntityFrameworkCore;

namespace Backend
{
    // This class inherits from DbContext, which is the primary class in Entity Framework Core for interacting with a database.
    // PlatformDbContext will be used to query and save data to the database.
    public class PlatformDbContext : DbContext
    {
        // Defining tables in my database
        public DbSet<Organization> Organization { get; set; }
        public DbSet<User> User { get; set; }
        public DbSet<Level> Level { get; set; }
        public DbSet<Group> Group { get; set; }

        // A constructor for my PlatformDbContext class.
        // It tells Entity Framework how to connect to the database. (ConnectionString in Program.cs)
        public PlatformDbContext(DbContextOptions<PlatformDbContext> options) : base(options) { }
    }
}