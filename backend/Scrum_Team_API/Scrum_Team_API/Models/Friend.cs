using System;
using System.Collections.Generic;

namespace Scrum_Team_API.Models;

public partial class Friend
{
    public int FriendshipId { get; set; }

    public int UserId1 { get; set; }

    public int UserId2 { get; set; }

    public string? Fstatus { get; set; }

    public DateTime? CreatedAt { get; set; }

    public virtual User UserId1Navigation { get; set; } = null!;

    public virtual User UserId2Navigation { get; set; } = null!;
}
