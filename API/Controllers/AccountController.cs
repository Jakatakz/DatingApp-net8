using System;
using System.Security.Cryptography;
using System.Text;
using API.Data;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using API.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

public class AccountController : BaseApiController
{
    private readonly DataContext _dbContext;
    private readonly ITokenService _tokenService;
    public AccountController(DataContext dbContext, ITokenService tokenService) {
        _dbContext = dbContext;
        _tokenService = tokenService;
    }

    [HttpPost("register")] // account/register endpoint
    public async Task<ActionResult<UserDto>> Register(RegisterDto registerDto) 
    {

        if (await UserExists(registerDto.Username)) return BadRequest("Username is taken");

        using var hmac = new HMACSHA512();

        var user = new AppUser {
            UserName = registerDto.Username.ToLower(),
            PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(registerDto.Password)),
            PasswordSalt = hmac.Key
        };

        _dbContext.Users.Add(user);
        await _dbContext.SaveChangesAsync();

        return new UserDto()
        {
            Username = user.UserName,
            Token = _tokenService.CreateToken(user)
        };
        
    }

    [HttpPost("login")]
    public async Task<ActionResult<UserDto>> Login(LoginDto loginDto) {
        var user = await _dbContext.Users.FirstOrDefaultAsync(x => x.UserName == loginDto.UserName.ToLower());

        if (user == null) return Unauthorized("Invalid username");

        using var hmac = new HMACSHA512(user.PasswordSalt);

        var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(loginDto.Password));

        for (int i = 0; i < computedHash.Length; i++) {

            if (computedHash[i] != user.PasswordHash[i]) return Unauthorized("Invalid password");
        }
        return new UserDto()
        {
            Username = user.UserName,
            Token = _tokenService.CreateToken(user)
        };
    }


    private async Task<bool> UserExists(string username) {
        return await _dbContext.Users.AnyAsync(x => x.UserName.ToLower() == username.ToLower());
    }
}
