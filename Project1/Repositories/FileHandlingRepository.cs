using Project1.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace Project1.Models
.Repositories
{
    public class FileHandlingRepository : IFileHandling
    {
        public bool Exists(string path)//if directory doesn't exist, throw
        {
            if(!Directory.Exists(path))
            {
                throw new Exception("Directory not found");
            }
            return Directory.Exists(path);
        }

        public string ReadAllText(string path)
        {
            return File.ReadAllText(path);
        }

        public void WriteAllText(string path, string text)
        {
            File.WriteAllText(path, text);
        }
        public async Task<List<string>> FindAllEntries(string directoryPath, List<string> entries)
        {
            Exists(directoryPath);
            try
            {
                var files = Directory.GetFiles(directoryPath);
                var directories = Directory.GetDirectories(directoryPath);
                if (files != null)
                {
                    foreach (string f in files)
                    {
                        entries.Add(f);
                    }
                }
                if (directories != null)
                {
                    foreach (string d in directories)
                    {
                        directoryPath += "\\" + d;
                        await FindAllEntries(directoryPath, entries);
                    }
                }
            }
            catch(Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
            return entries;           
        }

        public async Task<IEnumerable<Article>> FindAllExactMatches(string subPath, string searchTerm)//to find all articles containing phrase matching exactly with search term
        {
            string mainPath = "F:\\repos\\TestFiles" + subPath;
            List<string> entries = new List<string>();
            List<Article> articles = new List<Article>();
            await FindAllEntries(mainPath, entries);
            foreach (var path in entries)
            {
                var text = ReadAllText(path);
                if (text.Contains(searchTerm))
                {
                    var paragraphs = text.Split("\r\n");
                    var category = path.Split("\\")[2];
                    var paragraphsNumber = paragraphs.Length;
                    var publishTime = Convert.ToDateTime(paragraphs[paragraphsNumber - 1].Trim().Substring(13));
                    var article = new Article { Title = paragraphs[0], Category = category, Path = path, PublishTime = publishTime };
                    articles.Add(article);
                }
            }
            await Task.Delay(500);
            return articles;
        }

    }
}
