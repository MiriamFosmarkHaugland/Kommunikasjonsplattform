using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// This DTO (Data Transfer Object) is used for patching the User entity.
// It allows partial updates to the User properties.
namespace backend.DTOs
{
    public class PatchUserDto
    {
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? Address { get; set; }
        public string? PhoneNumber { get; set; }
        public string? Email { get; set; }
        public DateOnly? DateOfBirth { get; set; }
        public string? Image { get; set; }
    }

}