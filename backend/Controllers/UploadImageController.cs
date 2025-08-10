using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UploadImageController : ControllerBase
    {
        private readonly IWebHostEnvironment environment;
        public UploadImageController(IWebHostEnvironment _environment)
        {
            environment = _environment;
        }

        // POST: api/UploadImage
        [HttpPost]
        public IActionResult UploadImage(IFormFile file)
        {
            if (file == null || file.Length == 0)
            {
                return BadRequest("No file uploaded.");
            }

            string wwwRootPath = environment.WebRootPath;
            Guid imageGuid = Guid.NewGuid();

            string fileExtension = file.FileName.Split('.').Last(); // .jpg, .png, etc.
            string fileName = imageGuid + "." + fileExtension; // 643gioj3o4gij4o37i34.jpg

            string filePath = Path.Combine(wwwRootPath, "images", fileName); // wwwroot/images/u508yoijh4oi5jg093y43y.jpg
            var directory = Path.GetDirectoryName(filePath);


            if (directory != null && !Directory.Exists(directory))
            {
                Directory.CreateDirectory(directory);
            }

            using (var fileStream = new FileStream(filePath, FileMode.Create))
            {
                file.CopyTo(fileStream);
            }
            return Ok(new { FileName = fileName });
        }
    }
}