using Microsoft.AspNetCore.Mvc;
using Scrum_Team_API.Services;

namespace Scrum_Team_API.Controllers
{
    [ApiController]
    [Route("api/auth")]
    public class AuthController : ControllerBase
    {
        private readonly AuthService _authService;

        public AuthController(AuthService authService)
        {
            _authService = authService;
        }

        [HttpPost("register")]
        public IActionResult Register([FromBody] UserDto user)
        {
            _authService.RegisterUser(user.FirstName, user.LastName, user.Email, user.Password);
            return Ok(new { message = "User registered successfully" });
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginDto loginUser)
        {
            if (_authService.ValidateUser(loginUser.Email, loginUser.Password))
            {
                return Ok(new { message = "Login successful" });
            }
            return Unauthorized(new { message = "Invalid email or password" });
        }
    }

    public class UserDto
    {
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
    }

    public class LoginDto
    {
        public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
    }
}
