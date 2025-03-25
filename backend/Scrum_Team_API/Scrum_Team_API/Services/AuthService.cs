using System.Linq;
using BCrypt.Net;
using Scrum_Team_API.Models;

namespace Scrum_Team_API.Services
{
    public class AuthService
    {
        private readonly ScrumTeamContext _context; // Database context

        public AuthService(ScrumTeamContext context)
        {
            _context = context;
        }

        // Register User (Hash Password Before Storing)
        public void RegisterUser(string firstName, string lastName, string email, string password)
        {
            string hashedPassword = BCrypt.Net.BCrypt.HashPassword(password);

            var user = new User
            {
                FirstName = firstName,
                LastName = lastName,
                Email = email,
                PasswordHash = hashedPassword
            };

            _context.Users.Add(user);
            _context.SaveChanges();
        }

        // Validate User Login (Compare Hashes)
        public bool ValidateUser(string email, string password)
        {
            var user = _context.Users.FirstOrDefault(u => u.Email == email);

            if (user == null) return false;

            return BCrypt.Net.BCrypt.Verify(password, user.PasswordHash);
        }
    }
}
