using BookManagementBackend.Models;
using Microsoft.EntityFrameworkCore;

namespace BookManagementBackend.Data
{
    public class AppDbContext : DbContext
    {

        public AppDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Book> Books { get; set; }
    }
}
