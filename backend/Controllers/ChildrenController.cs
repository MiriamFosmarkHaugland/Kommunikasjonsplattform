using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using backend.DTOs;


// This code was generated using the ASP.NET code-generation tool:
// dotnet aspnet-codegenerator controller -name ChildrenController -async -api -m Children -dc InstitutionDbContext -outDir Controllers
// It creates a CRUD (Create, Read, Update, Delete) API controller for the Children entity using Entity Framework Core

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ChildrenController : ControllerBase
    {
        private readonly InstitutionDbContext _context;

        public ChildrenController(InstitutionDbContext context)
        {
            _context = context;
        }

        // GET: api/Children
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Children>>> GetChildren()
        {
            return await _context.Children.ToListAsync();
        }

        // GET: api/Children/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Children>> GetChildren(int id)
        {
            var children = await _context.Children.FindAsync(id);

            if (children == null)
            {
                return NotFound();
            }

            return children;
        }

        // PUT: api/Children/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutChildren(int id, Children children)
        {
            if (id != children.Id)
            {
                return BadRequest();
            }

            _context.Entry(children).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ChildrenExists(id))
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

    [HttpPatch("{id}")]
    public async Task<IActionResult> PatchChild(int id, [FromBody] PatchChildDto patchDto)
    {
        var child = await _context.Children.FindAsync(id);

        if (child == null)
        {
            return NotFound();
        }

            // Manually apply updates only if properties are not null
        if (patchDto.First_name != null)
        {
            child.First_name = patchDto.First_name;
        }  
        if (patchDto.Last_name != null)
        {
            child.Last_name = patchDto.Last_name;
        }
        if (patchDto.Date_of_birth != null)
        {
            child.Date_of_birth = patchDto.Date_of_birth;
        }
        if (patchDto.Profile_image != null)
        {
            child.Profile_image = patchDto.Profile_image;
        }
        if (patchDto.Department_id.HasValue)
        {
            child.Department_id = patchDto.Department_id.Value;
        }
        
        // Check for validation errors after applying the patch
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }
        
        // Save changes to the database
        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            throw;
        }

        return Ok(child);
    }

        // POST: api/Children
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Children>> PostChildren(Children children)
        {
            _context.Children.Add(children);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetChildren", new { id = children.Id }, children);
        }

        // DELETE: api/Children/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteChildren(int id)
        {
            var children = await _context.Children.FindAsync(id);
            if (children == null)
            {
                return NotFound();
            }

            _context.Children.Remove(children);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ChildrenExists(int id)
        {
            return _context.Children.Any(e => e.Id == id);
        }
    }
}
