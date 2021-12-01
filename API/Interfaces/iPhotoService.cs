using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CloudinaryDotNet.Actions;
using Microsoft.AspNetCore.Http;

namespace API.Interfaces
{
    public interface iPhotoService
    {
        Task<ImageUploadResult> AddPhotoAsync(IFormFile file); //IFormFile is a file sent with the Https request
        Task<DeletionResult> DeletePhotoAsync(string publicId); //Must delete images by their public Id's
    }
}