using Backend;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

var builder = WebApplication.CreateBuilder(args);

string? sqlUser = Environment.GetEnvironmentVariable("SQL_USER");
string? sqlPassword = Environment.GetEnvironmentVariable("SQL_PASSWORD");

if (sqlUser == null || sqlPassword == null)
{
    throw new ArgumentNullException("Environment variable SQL_USER or SQL_PASSWORD is not set");
}

// Configure the app to use PlatformDbContext with a MySQL database using the specified connection string.
string connectionString = $"server=localhost;port=3306;database=communication_platform;user={sqlUser};password={sqlPassword}";
builder.Services.AddDbContext<PlatformDbContext>(options =>
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString))
);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(
        policy =>
        {
            policy.AllowAnyOrigin() // Allows requests from any origin
                  .AllowAnyMethod() // Allows any HTTP method (GET, POST, etc.)
                  .AllowAnyHeader(); // Allows any header in the request
        }
    );
});

builder.Services.AddControllers();


var app = builder.Build();

app.UseStaticFiles(); // Enable serving static files

app.UseCors(); // Apply the CORS policy to the application

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.MapControllers();

app.Run();