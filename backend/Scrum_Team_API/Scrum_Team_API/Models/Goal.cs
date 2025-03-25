using System;
using System.Collections.Generic;

namespace Scrum_Team_API.Models;

public partial class Goal
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

    public virtual Frequency Freq { get; set; } = null!;

    public virtual AiIdea? Suggest { get; set; }

    public virtual GoalType Type { get; set; } = null!;

    public virtual User User { get; set; } = null!;
}
