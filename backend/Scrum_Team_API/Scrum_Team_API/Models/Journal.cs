using System;
using System.Collections.Generic;

namespace Scrum_Team_API.Models;

public partial class Journal
{
    public int EntryId { get; set; }

    public int UserId { get; set; }

    public string EntryTitle { get; set; } = null!;

    public string? EntryDesc { get; set; }

    public virtual User User { get; set; } = null!;
}
