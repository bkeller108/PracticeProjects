using System.Collections.Generic;

namespace TripCalculator.Models
{
    public class Team
    {
        public int Id { get; set; }
        public string TeamName { get; set; }
        public IList<User> UserList { get; set; }
    }
}