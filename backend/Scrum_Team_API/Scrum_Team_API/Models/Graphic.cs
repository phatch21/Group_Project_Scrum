using System;
using System.Collections.Generic;

namespace Scrum_Team_API.Models;

public partial class Graphic
{
    public int GraphId { get; set; }

    public string GraphicPath { get; set; } = null!;

    public string Category { get; set; } = null!;

    public virtual ICollection<GraphUser> GraphUsers { get; set; } = new List<GraphUser>();
}
