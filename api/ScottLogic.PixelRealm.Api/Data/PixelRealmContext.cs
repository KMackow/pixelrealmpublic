using Microsoft.EntityFrameworkCore;
using ScottLogic.PixelRealm.Api.Models.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ScottLogic.PixelRealm.Api.Data
{
    public class PixelRealmContext : DbContext
    {
        public DbSet<Grid> Grids { get; set; }

        public PixelRealmContext(DbContextOptions<PixelRealmContext> options)
            : base(options)
        { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Grid>()
            .Property(f => f.Id)
            .ValueGeneratedOnAdd();
        }
    }
}
