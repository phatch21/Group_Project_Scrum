using Microsoft.AspNetCore.Http;
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

        [HttpPost("/goals")]
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
    }
}
