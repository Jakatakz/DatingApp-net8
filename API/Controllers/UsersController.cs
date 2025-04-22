using System;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

[Authorize]
public class UsersController : BaseApiController
{
    private readonly IUserRepository _userRepository;
    public UsersController(IUserRepository userRepository)
    {
        _userRepository = userRepository;
    }
    /*
    private readonly DataContext _context;
    public UsersController(DataContext context)
    {
        _context = context;
    }
    */

    //[AllowAnonymous] // allow for anonymous users
    [HttpGet]
    public async Task<ActionResult<IEnumerable<AppUser>>> GetUsers()
    {
        // var users = await _context.Users.ToListAsync();
        var users = await _userRepository.GetUsersAsync();
        //return users;
        return Ok(users);
    }

    //[Authorize]
    [HttpGet("{username}")] //api/users/ number (1, 2, or 3) etc.
    public async Task<ActionResult<AppUser>> GetUsers(string username)
    {
        var user = await _userRepository.GetUserByUserNameAsync(username);
        if (user == null) return NotFound(); // GetUsersByUserNameAsync could return null, this is a defensive check
        return user;
    }
}
