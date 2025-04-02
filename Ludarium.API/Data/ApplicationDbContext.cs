using Microsoft.EntityFrameworkCore;
using Ludarium.API.Models;


namespace Ludarium.API.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<Game> Games { get; set; }
        public DbSet<MemoryNote> MemoryNotes { get; set; }
    }
}
