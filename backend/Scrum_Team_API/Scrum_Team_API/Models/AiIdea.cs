using System;
using System.Collections.Generic;

namespace Scrum_Team_API.Models;

public partial class AiIdea
{
    public int SuggestId { get; set; }

    public string GeneratedText { get; set; } = null!;

    public int TypeId { get; set; }

    public DateTime? CreatedAt { get; set; }

    public bool? Accepted { get; set; }

    public virtual ICollection<Goal> Goals { get; set; } = new List<Goal>();

    public virtual GoalType Type { get; set; } = null!;
}
