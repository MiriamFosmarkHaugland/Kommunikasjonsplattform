using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// This DTO (Data Transfer Object) is used for patching the Children entity.
// It allows partial updates to the Children properties.
namespace backend.DTOs
{
    public class PatchChildDto
    {
        public string? First_name { get; set; }
        public string? Last_name { get; set; }
        public DateOnly? Date_of_birth { get; set; }
        public string? Profile_image { get; set; }
        public int? Department_id { get; set; }
    }

}