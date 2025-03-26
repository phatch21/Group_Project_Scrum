using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Scrum_Team_API.Models;

public partial class GoalType
{
    public int TypeId { get; set; }

    public string TypeName { get; set; } = null!;

    public virtual ICollection<AiIdea> AiIdeas { get; set; } = new List<AiIdea>();

    public virtual ICollection<Goal> Goals { get; set; } = new List<Goal>();
}

    
