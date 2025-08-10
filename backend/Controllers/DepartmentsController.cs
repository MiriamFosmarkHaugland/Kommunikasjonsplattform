using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// This code was generated using the ASP.NET code-generation tool:
// dotnet aspnet-codegenerator controller -name DepartmentsController -async -api -m Departments -dc InstitutionDbContext -outDir Controllers
// It creates a CRUD (Create, Read, Update, Delete) API controller for the Departments entity using Entity Framework Core

namespace Backend.Controllers
{
    [Route("api/[controller]")] // Defines the base URL path (api/Departments)
    [ApiController] // Adds helpful features for building web APIs, like checking if the data sent is valid
    public class DepartmentsController : ControllerBase // Handles HTTP requests related to the Departments entity
    {
        // This gets the InstitutionDbContext, which is used to connect to and work with the database.
        private readonly InstitutionDbContext _context;

        public DepartmentsController(InstitutionDbContext context)
        {
            _context = context;
        }

        // GET: api/Departments -> list all departments
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Departments>>> GetDepartments()
        {
            return await _context.Departments.ToListAsync();
        }

        // GET: api/Departments/5 -> get one department
        [HttpGet("{id}")]
        public async Task<ActionResult<Departments>> GetDepartments(int id)
        {
            var departments = await _context.Departments.FindAsync(id);

            if (departments == null)
            {
                return NotFound();
            }

            return departments;
        }

        // PUT: api/Departments/5 -> update a department
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDepartments(int id, Departments departments)
        {
            if (id != departments.Id)
            {
                return BadRequest();
            }

            _context.Entry(departments).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DepartmentsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Departments -> add a department
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Departments>> PostDepartments(Departments departments)
        {
            _context.Departments.Add(departments);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDepartments", new { id = departments.Id }, departments);
        }

        // DELETE: api/Departments/5 -> delete a department
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDepartments(int id)
        {
            var departments = await _context.Departments.FindAsync(id);
            if (departments == null)
            {
                return NotFound();
            }

            _context.Departments.Remove(departments);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // Helper method, returns true if department with the given ID exists in the database.
        private bool DepartmentsExists(int id)
        {
            return _context.Departments.Any(e => e.Id == id);
        }
    }
}
