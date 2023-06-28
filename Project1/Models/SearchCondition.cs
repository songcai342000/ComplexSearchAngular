using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project1.Models
{
    public class SearchCondition
    {
        public string? SearchTerm { get; set; }
        public string? Sport { get; set; }
        public string? Music { get; set; }
        public DateTime Period { get; set; }
        public string? TermMatch { get; set; }
    }
}
