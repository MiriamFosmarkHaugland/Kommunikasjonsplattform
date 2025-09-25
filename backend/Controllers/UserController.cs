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
    public class UserController : ControllerBase
    {
        private readonly PlatformDbContext _context;

        public UserController(PlatformDbContext context)
        {
            _context = context;
        }

        // GET: api/User
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUser()
        {
            return await _context.User.ToListAsync();
        }

        // GET: api/User/5
        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUser(int id)
        {
            var user = await _context.User.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        // PATCH: api/User/5
        [HttpPatch("{id}")]
        public async Task<IActionResult> PatchUser(int id, [FromBody] PatchUserDto patchDto)
        {
            var userEntity = await _context.User.FindAsync(id);

            if (userEntity == null)
            {
                return NotFound();
            }

            // Manually apply updates if properties are not null
            if (patchDto.FirstName != null)
            {
                userEntity.FirstName = patchDto.FirstName;
            }
            if (patchDto.LastName != null)
            {
                userEntity.LastName = patchDto.LastName;
            }
            if (patchDto.Address != null)
            {
                userEntity.Address = patchDto.Address;
            }
            if (patchDto.PhoneNumber != null)
            {
                userEntity.PhoneNumber = patchDto.PhoneNumber;
            }
            if (patchDto.Email != null)
            {
                userEntity.Email = patchDto.Email;
            }
            if (patchDto.DateOfBirth != null)
            {
                userEntity.DateOfBirth = patchDto.DateOfBirth;
            }
            if (patchDto.Image != null)
            {
                userEntity.Image = patchDto.Image;
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
            return Ok(userEntity);
        }

        // PUT: api/User/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUser(int id, User user)
        {
            if (id != user.Id)
            {
                return BadRequest();
            }

            _context.Entry(user).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
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

        // POST: api/User
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<User>> PostUser(User user)
        {
            _context.User.Add(user);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUser", new { id = user.Id }, user);
        }

        // DELETE: api/User/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            var user = await _context.User.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            _context.User.Remove(user);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool UserExists(int id)
        {
            return _context.User.Any(e => e.Id == id);
        }
    }
}
