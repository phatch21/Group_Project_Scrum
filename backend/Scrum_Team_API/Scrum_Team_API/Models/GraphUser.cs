using System;
using System.Collections.Generic;

namespace Scrum_Team_API.Models;

public partial class GraphUser
{
    public int Ugid { get; set; }

    public int GraphId { get; set; }

    public int UserId { get; set; }

    public double? PositionX { get; set; }

    public double? PositionY { get; set; }

    public int? LayerOrder { get; set; }

    public DateTime? DatePlaced { get; set; }

    public virtual Graphic Graph { get; set; } = null!;

    public virtual User User { get; set; } = null!;
}
