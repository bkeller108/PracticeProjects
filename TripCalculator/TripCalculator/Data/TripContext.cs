using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TripCalculator.Models;

namespace TripCalculator.Models
{
    public class TripContext : DbContext
    {
        public TripContext (DbContextOptions<TripContext> options)
            : base(options)
        {
        }

        public DbSet<TripCalculator.Models.Trip> Trip { get; set; }

        public DbSet<TripCalculator.Models.Team> Team { get; set; }

        public DbSet<TripCalculator.Models.User> User { get; set; }
    }
}
