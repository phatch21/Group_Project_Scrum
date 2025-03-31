using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Scrum_Team_API.Migrations
{
    /// <inheritdoc />
    public partial class AutoIngcrementGoalId : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "FREQUENCY",
                columns: table => new
                {
                    FreqID = table.Column<int>(type: "INTEGER", nullable: false),
                    FreqDesc = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FREQUENCY", x => x.FreqID);
                });

            migrationBuilder.CreateTable(
                name: "GOAL_TYPE",
                columns: table => new
                {
                    TypeID = table.Column<int>(type: "INTEGER", nullable: false),
                    TypeName = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GOAL_TYPE", x => x.TypeID);
                });

            migrationBuilder.CreateTable(
                name: "GRAPHICS",
                columns: table => new
                {
                    GraphID = table.Column<int>(type: "INTEGER", nullable: false),
                    GraphicPath = table.Column<string>(type: "TEXT", nullable: false),
                    Category = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GRAPHICS", x => x.GraphID);
                });

            migrationBuilder.CreateTable(
                name: "USERS",
                columns: table => new
                {
                    UserID = table.Column<int>(type: "INTEGER", nullable: false),
                    FirstName = table.Column<string>(type: "TEXT", nullable: false),
                    LastName = table.Column<string>(type: "TEXT", nullable: false),
                    Email = table.Column<string>(type: "TEXT", nullable: false),
                    Password = table.Column<string>(type: "TEXT", nullable: false),
                    ProfilePic = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_USERS", x => x.UserID);
                });

            migrationBuilder.CreateTable(
                name: "AI_IDEAS",
                columns: table => new
                {
                    SuggestID = table.Column<int>(type: "INTEGER", nullable: false),
                    GeneratedText = table.Column<string>(type: "TEXT", nullable: false),
                    TypeID = table.Column<int>(type: "INTEGER", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "DATETIME", nullable: true, defaultValueSql: "CURRENT_TIMESTAMP"),
                    Accepted = table.Column<bool>(type: "BOOLEAN", nullable: true, defaultValue: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AI_IDEAS", x => x.SuggestID);
                    table.ForeignKey(
                        name: "FK_AI_IDEAS_GOAL_TYPE_TypeID",
                        column: x => x.TypeID,
                        principalTable: "GOAL_TYPE",
                        principalColumn: "TypeID");
                });

            migrationBuilder.CreateTable(
                name: "FRIENDS",
                columns: table => new
                {
                    FriendshipID = table.Column<int>(type: "INTEGER", nullable: false),
                    UserID1 = table.Column<int>(type: "INTEGER", nullable: false),
                    UserID2 = table.Column<int>(type: "INTEGER", nullable: false),
                    FStatus = table.Column<string>(type: "TEXT", nullable: true),
                    Created_At = table.Column<DateTime>(type: "DATETIME", nullable: true, defaultValueSql: "CURRENT_TIMESTAMP")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FRIENDS", x => x.FriendshipID);
                    table.ForeignKey(
                        name: "FK_FRIENDS_USERS_UserID1",
                        column: x => x.UserID1,
                        principalTable: "USERS",
                        principalColumn: "UserID");
                    table.ForeignKey(
                        name: "FK_FRIENDS_USERS_UserID2",
                        column: x => x.UserID2,
                        principalTable: "USERS",
                        principalColumn: "UserID");
                });

            migrationBuilder.CreateTable(
                name: "GRAPH_USER",
                columns: table => new
                {
                    UGID = table.Column<int>(type: "INTEGER", nullable: false),
                    GraphID = table.Column<int>(type: "INTEGER", nullable: false),
                    UserID = table.Column<int>(type: "INTEGER", nullable: false),
                    PositionX = table.Column<double>(type: "REAL", nullable: true),
                    PositionY = table.Column<double>(type: "REAL", nullable: true),
                    LayerOrder = table.Column<int>(type: "INTEGER", nullable: true),
                    DatePlaced = table.Column<DateTime>(type: "DATETIME", nullable: true, defaultValueSql: "CURRENT_TIMESTAMP")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GRAPH_USER", x => x.UGID);
                    table.ForeignKey(
                        name: "FK_GRAPH_USER_GRAPHICS_GraphID",
                        column: x => x.GraphID,
                        principalTable: "GRAPHICS",
                        principalColumn: "GraphID");
                    table.ForeignKey(
                        name: "FK_GRAPH_USER_USERS_UserID",
                        column: x => x.UserID,
                        principalTable: "USERS",
                        principalColumn: "UserID");
                });

            migrationBuilder.CreateTable(
                name: "JOURNALS",
                columns: table => new
                {
                    EntryID = table.Column<int>(type: "INTEGER", nullable: false),
                    UserID = table.Column<int>(type: "INTEGER", nullable: false),
                    EntryTitle = table.Column<string>(type: "TEXT", nullable: false),
                    EntryDesc = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_JOURNALS", x => x.EntryID);
                    table.ForeignKey(
                        name: "FK_JOURNALS_USERS_UserID",
                        column: x => x.UserID,
                        principalTable: "USERS",
                        principalColumn: "UserID");
                });

            migrationBuilder.CreateTable(
                name: "GOALS",
                columns: table => new
                {
                    GoalID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    UserID = table.Column<int>(type: "INTEGER", nullable: false),
                    GName = table.Column<string>(type: "TEXT", nullable: false),
                    GDescription = table.Column<string>(type: "TEXT", nullable: true),
                    TypeID = table.Column<int>(type: "INTEGER", nullable: false),
                    FInDate = table.Column<DateTime>(type: "DATETIME", nullable: true),
                    SuggestID = table.Column<int>(type: "INTEGER", nullable: true),
                    FreqID = table.Column<int>(type: "INTEGER", nullable: false),
                    GoalComp = table.Column<bool>(type: "BOOLEAN", nullable: true, defaultValue: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GOALS", x => x.GoalID);
                    table.ForeignKey(
                        name: "FK_GOALS_AI_IDEAS_SuggestID",
                        column: x => x.SuggestID,
                        principalTable: "AI_IDEAS",
                        principalColumn: "SuggestID");
                    table.ForeignKey(
                        name: "FK_GOALS_FREQUENCY_FreqID",
                        column: x => x.FreqID,
                        principalTable: "FREQUENCY",
                        principalColumn: "FreqID");
                    table.ForeignKey(
                        name: "FK_GOALS_GOAL_TYPE_TypeID",
                        column: x => x.TypeID,
                        principalTable: "GOAL_TYPE",
                        principalColumn: "TypeID");
                    table.ForeignKey(
                        name: "FK_GOALS_USERS_UserID",
                        column: x => x.UserID,
                        principalTable: "USERS",
                        principalColumn: "UserID");
                });

            migrationBuilder.CreateIndex(
                name: "IX_AI_IDEAS_TypeID",
                table: "AI_IDEAS",
                column: "TypeID");

            migrationBuilder.CreateIndex(
                name: "IX_FREQUENCY_FreqDesc",
                table: "FREQUENCY",
                column: "FreqDesc",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_FRIENDS_UserID1",
                table: "FRIENDS",
                column: "UserID1");

            migrationBuilder.CreateIndex(
                name: "IX_FRIENDS_UserID2",
                table: "FRIENDS",
                column: "UserID2");

            migrationBuilder.CreateIndex(
                name: "IX_GOAL_TYPE_TypeName",
                table: "GOAL_TYPE",
                column: "TypeName",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_GOALS_FreqID",
                table: "GOALS",
                column: "FreqID");

            migrationBuilder.CreateIndex(
                name: "IX_GOALS_SuggestID",
                table: "GOALS",
                column: "SuggestID");

            migrationBuilder.CreateIndex(
                name: "IX_GOALS_TypeID",
                table: "GOALS",
                column: "TypeID");

            migrationBuilder.CreateIndex(
                name: "IX_GOALS_UserID",
                table: "GOALS",
                column: "UserID");

            migrationBuilder.CreateIndex(
                name: "IX_GRAPH_USER_GraphID",
                table: "GRAPH_USER",
                column: "GraphID");

            migrationBuilder.CreateIndex(
                name: "IX_GRAPH_USER_UserID",
                table: "GRAPH_USER",
                column: "UserID");

            migrationBuilder.CreateIndex(
                name: "IX_JOURNALS_UserID",
                table: "JOURNALS",
                column: "UserID");

            migrationBuilder.CreateIndex(
                name: "IX_USERS_Email",
                table: "USERS",
                column: "Email",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "FRIENDS");

            migrationBuilder.DropTable(
                name: "GOALS");

            migrationBuilder.DropTable(
                name: "GRAPH_USER");

            migrationBuilder.DropTable(
                name: "JOURNALS");

            migrationBuilder.DropTable(
                name: "AI_IDEAS");

            migrationBuilder.DropTable(
                name: "FREQUENCY");

            migrationBuilder.DropTable(
                name: "GRAPHICS");

            migrationBuilder.DropTable(
                name: "USERS");

            migrationBuilder.DropTable(
                name: "GOAL_TYPE");
        }
    }
}
