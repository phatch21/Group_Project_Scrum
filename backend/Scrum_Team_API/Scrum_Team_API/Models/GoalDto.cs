namespace Scrum_Team_API.Models
{
    public class GoalDto
    {
        public int GoalId { get; set; }
        public int UserId { get; set; }
        public string Gname { get; set; } = null!;
        public string? Gdescription { get; set; }
        public int TypeId { get; set; }
        public DateTime? FinDate { get; set; }
        public int? SuggestId { get; set; }
        public int FreqId { get; set; }
        public bool? GoalComp { get; set; }
    }

}
