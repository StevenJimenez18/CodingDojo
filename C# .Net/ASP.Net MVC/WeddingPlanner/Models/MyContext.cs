using Microsoft.EntityFrameworkCore;

namespace LogNReg.Models
{
    public class MyContext : DbContext
    {
        public MyContext(DbContextOptions options) : base(options) { }


        public DbSet<User> Users { get; set; }

        public DbSet<Wedding> Weddings { get; set; }

        public DbSet<Rsvp> Rsvps { get; set; }
    }

}