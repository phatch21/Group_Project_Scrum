﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Scrum_Team_API.Models;

namespace Scrum_Team_API.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class GoalsController : ControllerBase
    {


        private ApricotTreeDbContext _context;

        public GoalsController(ApricotTreeDbContext context)
        {
            _context = context;
        }

        // GET: api/goaltypes
        [HttpGet("/goaltypes")]
        public IActionResult GetGoalTypes()
        {
            var GoalTypes = _context.GoalTypes
                .Select(g => new { g.TypeId, g.TypeName })
                .ToList();

            return Ok(GoalTypes);
        }

        [HttpPost("/AddGoal")]
        public IActionResult CreateGoal([FromBody] Goal goal)
        {
            if (goal == null || string.IsNullOrEmpty(goal.Gname) || goal.TypeId == 0 || goal.UserId == 0)
            {
                return BadRequest("Invalid goal data.");
            }

            _context.Goals.Add(goal);
            _context.SaveChanges();

            return CreatedAtAction(nameof(GetGoalTypes), new { id = goal.GoalId }, goal);
        }

        [HttpPost("CreateAccount")]
        public IActionResult CreateAccount([FromBody] CreateUserDto dto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest("Invalid user data.");
            }

            var newUser = new User
            {
                FirstName = dto.FirstName,
                LastName = dto.LastName,
                Email = dto.Email,
                Password = dto.Password,
                ProfilePic = dto.ProfilePic
            };

            _context.Users.Add(newUser);
            _context.SaveChanges();

            return Ok(newUser);
        }

    }
}
