using System;
using System.ComponentModel.DataAnnotations;

namespace API.DTOs;

public class RegisterDto
{
    // intsead of using 'required' below, you can use an attribute above the line by doing [Required]
    [Required]
    [MaxLength(100)]
    public string Username { get; set; }
    public string Password { get; set; }
}
