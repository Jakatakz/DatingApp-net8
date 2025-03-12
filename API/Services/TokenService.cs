using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using API.Entities;
using API.Interfaces;
using Microsoft.IdentityModel.Tokens;

namespace API.Services;

public class TokenService : ITokenService
{
    private readonly IConfiguration _config;

public TokenService(IConfiguration config) {
    _config = config;
}

    public string CreateToken(AppUser user)
    {
        var tokenKey = _config["TokenKey"] ?? throw new Exception("Cannot access tokenKey from appsettings");
        // tokenKey length has to have a minimum length in recent updates
        if (tokenKey.Length < 64) throw new Exception("Your tokenKey needs to be longer");

        // this is what will be used to sign the token
        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(tokenKey));


        // claims are data inside the token
        var claims = new List<Claim> {
            new Claim(ClaimTypes.NameIdentifier, user.UserName)
        };

        // creates credentials for signing the token
        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256Signature);

        // describes what the token wil contain (in this case - claims or who the user is, expiration date - 7 days from now, and how it's signed (your creds))
        var tokenDescriptor = new SecurityTokenDescriptor {
            Subject = new ClaimsIdentity(claims),
            Expires = DateTime.UtcNow.AddDays(7),
            SigningCredentials = creds
        };

        // tool that creates the JWT and later can read/validate it.
        var tokenHandler = new JwtSecurityTokenHandler();

        // generates the actual JWT token based on your description
        var token = tokenHandler.CreateToken(tokenDescriptor);

        // converts the token into a string you can send back to the client - usually in the http response.
        return tokenHandler.WriteToken(token);
    }
}
