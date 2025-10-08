

using Microsoft.EntityFrameworkCore;
using StudentBackend.Models.Entities;

namespace StudentBackend.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions options) : base(options)
        {
        }

     public DbSet<Student> Students { get; set; }
    }
}
