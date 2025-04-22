using System;
using API.Data;
using API.DTOs;
using API.Entities;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

[Authorize]
public class UsersController : BaseApiController
{
    private readonly IUserRepository _userRepository;
    private readonly IMapper _mapper;
    public UsersController(IUserRepository userRepository, IMapper mapper)
    {
        _userRepository = userRepository;
        _mapper = mapper;
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
    public async Task<ActionResult<IEnumerable<MemberDto>>> GetUsers()
    {
        // var users = await _context.Users.ToListAsync();
        var users = await _userRepository.GetUsersAsync();

        var usersToReturn = _mapper.Map<IEnumerable<MemberDto>>(users);
        //return users;
        return Ok(usersToReturn);
    }

    //[Authorize]
    [HttpGet("{username}")] //api/users/ number (1, 2, or 3) etc.
    public async Task<ActionResult<MemberDto>> GetUsers(string username)
    {
        var user = await _userRepository.GetUserByUserNameAsync(username);
        if (user == null) return NotFound(); // GetUsersByUserNameAsync could return null, this is a defensive check
        return _mapper.Map<MemberDto>(user);
    }
}
