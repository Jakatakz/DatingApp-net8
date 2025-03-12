using System;
using System.ComponentModel.DataAnnotations;

namespace API.DTOs;

public class RegisterDto
{
    // intsead of using 'required' below, you can use an attribute above the line by doing [Required]
    [Required]
    [MaxLength(100)]
    public required string Username { get; set; }
    public required string Password { get; set; }
}
