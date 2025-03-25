using System;
using System.Collections.Generic;

namespace Scrum_Team_API.Models;

public partial class Frequency
{
    public int FreqId { get; set; }

    public string FreqDesc { get; set; } = null!;

    public virtual ICollection<Goal> Goals { get; set; } = new List<Goal>();
}
