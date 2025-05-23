using Microsoft.EntityFrameworkCore;
using Scrum_Team_API.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<ApricotTreeDbContext>(options =>
{
    options.UseSqlite("Data Source=ApricotTreeDb.sqlite");
}); 

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(x => x
    .WithOrigins("http://localhost:1235") // Allow requests from frontend
    .AllowAnyMethod() // Allow all HTTP methods (GET, POST, etc.)
    .AllowAnyHeader() // Allow all headers, including Content-Type
);
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
