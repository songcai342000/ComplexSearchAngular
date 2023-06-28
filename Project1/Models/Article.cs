using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project1.Models
{
    public class Article
    {
        public string? Title { get; set; }
        public string? Category { get; set; }
        public DateTime PublishTime { get; set; }
        public string? Path { get; set; }
    }
}
