using System;
using System.Collections.Generic;

namespace Scrum_Team_API.Models;

public partial class User
{
    public int UserId { get; set; }

    public string FirstName { get; set; } = null!;

    public string LastName { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string Password { get; set; } = null!;

    public string? ProfilePic { get; set; }

    public virtual ICollection<Friend> FriendUserId1Navigations { get; set; } = new List<Friend>();

    public virtual ICollection<Friend> FriendUserId2Navigations { get; set; } = new List<Friend>();

    public virtual ICollection<Goal> Goals { get; set; } = new List<Goal>();

    public virtual ICollection<GraphUser> GraphUsers { get; set; } = new List<GraphUser>();

    public virtual ICollection<Journal> Journals { get; set; } = new List<Journal>();
}
