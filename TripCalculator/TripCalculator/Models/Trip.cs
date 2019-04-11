using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TripCalculator.Models
{
    public class Trip
    {
        public int Id { get; set; }
        public string TeamName { get; set; }

        public string Location { get; set; }

        public DateTime Date { get; set; }
    }
}
