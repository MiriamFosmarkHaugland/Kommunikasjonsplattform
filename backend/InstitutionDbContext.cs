using Microsoft.EntityFrameworkCore;

namespace Backend
{
    // This class inherits from DbContext, which is the primary class in Entity Framework Core for interacting with a database.
    // InstitutionDbContext will be used to query and save data to the database.
    public class InstitutionDbContext : DbContext
    {
        // Defining tables in my database
        public DbSet<Departments> Departments { get; set; }
        public DbSet<Children> Children { get; set; }
        public DbSet<Guardians> Guardians { get; set; }

        // A constructor for my InstitutionDbContext class.
        // It tells Entity Framework how to connect to the database. (ConnectionString in Program.cs)
        public InstitutionDbContext(DbContextOptions<InstitutionDbContext> options) : base(options) { }
    }
}