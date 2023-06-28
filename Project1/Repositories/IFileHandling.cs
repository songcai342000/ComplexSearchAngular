using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project1.Models
.Repositories
{
    public interface IFileHandling
    {
        public bool Exists(string path);
        public string ReadAllText(string path);
        public void WriteAllText(string path, string text);
        public Task<List<string>> FindAllEntries(string directoryPath, List<string> entries);
        public Task<IEnumerable<Article>> FindAllExactMatches(string subPath, string searchTerm);
    
    }
}
