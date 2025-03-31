using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Scrum_Team_API.Models;

public partial class ApricotTreeDbContext : DbContext
{
    public ApricotTreeDbContext()
    {
    }

    public ApricotTreeDbContext(DbContextOptions<ApricotTreeDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<AiIdea> AiIdeas { get; set; }

    public virtual DbSet<Frequency> Frequencies { get; set; }

    public virtual DbSet<Friend> Friends { get; set; }

    public virtual DbSet<Goal> Goals { get; set; }

    public virtual DbSet<GoalType> GoalTypes { get; set; }

    public virtual DbSet<GraphUser> GraphUsers { get; set; }

    public virtual DbSet<Graphic> Graphics { get; set; }

    public virtual DbSet<Journal> Journals { get; set; }

    public virtual DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlite("Data Source=ApricotTreeDb.sqlite");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<AiIdea>(entity =>
        {
            entity.HasKey(e => e.SuggestId);

            entity.ToTable("AI_IDEAS");

            entity.Property(e => e.SuggestId)
                .ValueGeneratedNever()
                .HasColumnName("SuggestID");
            entity.Property(e => e.Accepted)
                .HasDefaultValue(false)
                .HasColumnType("BOOLEAN");
            entity.Property(e => e.CreatedAt)
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("DATETIME");
            entity.Property(e => e.TypeId).HasColumnName("TypeID");

            entity.HasOne(d => d.Type).WithMany(p => p.AiIdeas)
                .HasForeignKey(d => d.TypeId)
                .OnDelete(DeleteBehavior.ClientSetNull);
        });

        modelBuilder.Entity<Frequency>(entity =>
        {
            entity.HasKey(e => e.FreqId);

            entity.ToTable("FREQUENCY");

            entity.HasIndex(e => e.FreqDesc, "IX_FREQUENCY_FreqDesc").IsUnique();

            entity.Property(e => e.FreqId)
                .ValueGeneratedNever()
                .HasColumnName("FreqID");
        });

        modelBuilder.Entity<Friend>(entity =>
        {
            entity.HasKey(e => e.FriendshipId);

            entity.ToTable("FRIENDS");

            entity.Property(e => e.FriendshipId)
                .ValueGeneratedNever()
                .HasColumnName("FriendshipID");
            entity.Property(e => e.CreatedAt)
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("DATETIME")
                .HasColumnName("Created_At");
            entity.Property(e => e.Fstatus).HasColumnName("FStatus");
            entity.Property(e => e.UserId1).HasColumnName("UserID1");
            entity.Property(e => e.UserId2).HasColumnName("UserID2");

            entity.HasOne(d => d.UserId1Navigation).WithMany(p => p.FriendUserId1Navigations)
                .HasForeignKey(d => d.UserId1)
                .OnDelete(DeleteBehavior.ClientSetNull);

            entity.HasOne(d => d.UserId2Navigation).WithMany(p => p.FriendUserId2Navigations)
                .HasForeignKey(d => d.UserId2)
                .OnDelete(DeleteBehavior.ClientSetNull);
        });

        modelBuilder.Entity<Goal>(entity =>
        {
            entity.ToTable("GOALS");

            entity.Property(e => e.GoalId)
                .ValueGeneratedOnAdd()
                .HasColumnName("GoalID");
            entity.Property(e => e.FinDate)
                .HasColumnType("DATETIME")
                .HasColumnName("FInDate");
            entity.Property(e => e.FreqId).HasColumnName("FreqID");
            entity.Property(e => e.Gdescription).HasColumnName("GDescription");
            entity.Property(e => e.Gname).HasColumnName("GName");
            entity.Property(e => e.GoalComp)
                .HasDefaultValue(false)
                .HasColumnType("BOOLEAN");
            entity.Property(e => e.SuggestId).HasColumnName("SuggestID");
            entity.Property(e => e.TypeId).HasColumnName("TypeID");
            entity.Property(e => e.UserId).HasColumnName("UserID");

            entity.HasOne(d => d.Freq).WithMany(p => p.Goals)
                .HasForeignKey(d => d.FreqId)
                .OnDelete(DeleteBehavior.ClientSetNull);

            entity.HasOne(d => d.Suggest).WithMany(p => p.Goals).HasForeignKey(d => d.SuggestId);

            entity.HasOne(d => d.Type).WithMany(p => p.Goals)
                .HasForeignKey(d => d.TypeId)
                .OnDelete(DeleteBehavior.ClientSetNull);

            entity.HasOne(d => d.User).WithMany(p => p.Goals)
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.ClientSetNull);
        });

        modelBuilder.Entity<GoalType>(entity =>
        {
            entity.HasKey(e => e.TypeId);

            entity.ToTable("GOAL_TYPE");

            entity.HasIndex(e => e.TypeName, "IX_GOAL_TYPE_TypeName").IsUnique();

            entity.Property(e => e.TypeId)
                .ValueGeneratedNever()
                .HasColumnName("TypeID");
        });

        modelBuilder.Entity<GraphUser>(entity =>
        {
            entity.HasKey(e => e.Ugid);

            entity.ToTable("GRAPH_USER");

            entity.Property(e => e.Ugid)
                .ValueGeneratedNever()
                .HasColumnName("UGID");
            entity.Property(e => e.DatePlaced)
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("DATETIME");
            entity.Property(e => e.GraphId).HasColumnName("GraphID");
            entity.Property(e => e.UserId).HasColumnName("UserID");

            entity.HasOne(d => d.Graph).WithMany(p => p.GraphUsers)
                .HasForeignKey(d => d.GraphId)
                .OnDelete(DeleteBehavior.ClientSetNull);

            entity.HasOne(d => d.User).WithMany(p => p.GraphUsers)
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.ClientSetNull);
        });

        modelBuilder.Entity<Graphic>(entity =>
        {
            entity.HasKey(e => e.GraphId);

            entity.ToTable("GRAPHICS");

            entity.Property(e => e.GraphId)
                .ValueGeneratedNever()
                .HasColumnName("GraphID");
        });

        modelBuilder.Entity<Journal>(entity =>
        {
            entity.HasKey(e => e.EntryId);

            entity.ToTable("JOURNALS");

            entity.Property(e => e.EntryId)
                .ValueGeneratedNever()
                .HasColumnName("EntryID");
            entity.Property(e => e.UserId).HasColumnName("UserID");

            entity.HasOne(d => d.User).WithMany(p => p.Journals)
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.ClientSetNull);
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.ToTable("USERS");

            entity.HasIndex(e => e.Email, "IX_USERS_Email").IsUnique();

            entity.Property(e => e.UserId)
                .ValueGeneratedNever()
                .HasColumnName("UserID");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}


