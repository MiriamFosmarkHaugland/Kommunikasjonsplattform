using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Backend;

// This code was generated using the ASP.NET code-generation tool:
// dotnet aspnet-codegenerator controller -name GuardiansController -async -api -m Guardians -dc InstitutionDbContext -outDir Controllers
// It creates a CRUD (Create, Read, Update, Delete) API controller for the Guardians entity using Entity Framework Core

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GuardiansController : ControllerBase
    {
        private readonly InstitutionDbContext _context;

        public GuardiansController(InstitutionDbContext context)
        {
            _context = context;
        }

        // GET: api/Guardians
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Guardians>>> GetGuardians()
        {
            return await _context.Guardians.ToListAsync();
        }

        // GET: api/Guardians/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Guardians>> GetGuardians(int id)
        {
            var guardians = await _context.Guardians.FindAsync(id);

            if (guardians == null)
            {
                return NotFound();
            }

            return guardians;
        }

        // PUT: api/Guardians/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGuardians(int id, Guardians guardians)
        {
            if (id != guardians.Id)
            {
                return BadRequest();
            }

            _context.Entry(guardians).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GuardiansExists(id))
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

        // POST: api/Guardians
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Guardians>> PostGuardians(Guardians guardians)
        {
            _context.Guardians.Add(guardians);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetGuardians", new { id = guardians.Id }, guardians);
        }

        // DELETE: api/Guardians/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGuardians(int id)
        {
            var guardians = await _context.Guardians.FindAsync(id);
            if (guardians == null)
            {
                return NotFound();
            }

            _context.Guardians.Remove(guardians);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool GuardiansExists(int id)
        {
            return _context.Guardians.Any(e => e.Id == id);
        }
    }
}
