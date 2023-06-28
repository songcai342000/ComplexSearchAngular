using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Project1.Models.Repositories;
using Project1.Models;

namespace Project1.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ArticlesController : ControllerBase
    {
        private readonly IFileHandling _iFileHandling;
        private readonly ILogger<ArticlesController> _logger;

        public ArticlesController(IFileHandling iFileHandling, ILogger<ArticlesController> logger)
        {
            _iFileHandling = iFileHandling;
            _logger = logger;
        }

        [HttpGet("FindMusicSportExactMatches/{female}/{male}/{period}/{searchTerm}")]
        public async Task<IEnumerable<Article>> FindMusicSportExactMatches(string female, string male, string period, string searchTerm)
        {

            IEnumerable<Article> articles;
            if (female == "true" && male == "true")
            {
                IEnumerable<Article> articles1 = await _iFileHandling.FindAllExactMatches(@"\Music\Female", searchTerm);
                IEnumerable<Article> articles2 = await _iFileHandling.FindAllExactMatches(@"\Music\Male", searchTerm);
                IEnumerable<Article> articles3 = await _iFileHandling.FindAllExactMatches(@"\Sport\Female", searchTerm);
                IEnumerable<Article> articles4 = await _iFileHandling.FindAllExactMatches(@"\Sport\Male", searchTerm);
                articles = articles1.Concat(articles2).Concat(articles3).Concat(articles4);
            }
            else if (female == "true" && male == "undefined")
            {
                IEnumerable<Article> articles1 = await _iFileHandling.FindAllExactMatches(@"\Music\Female", searchTerm);
                IEnumerable<Article> articles2 = await _iFileHandling.FindAllExactMatches(@"\Sport\Female", searchTerm);
                articles = articles1.Concat(articles2);
            }
            else if (female == "undefined" && male == "true")
            {
                IEnumerable<Article> articles1 = await _iFileHandling.FindAllExactMatches(@"\Music\Male", searchTerm);
                IEnumerable<Article> articles2 = await _iFileHandling.FindAllExactMatches(@"\Sport\Male", searchTerm);
                articles = articles1.Concat(articles2);
            }
            else
            {
                return null;
            }
            if (period == "5years")
            {
                articles = articles.Where(a => a.PublishTime > DateTime.Now.AddYears(-5));
            }
            return articles;

        }

        [HttpGet("FindMusicExactMatches/{female}/{male}/{period}/{searchTerm}")]
        public async Task<IEnumerable<Article>> FindMusicExactMatches(string female, string male, string period, string searchTerm)
        {
            IEnumerable<Article> articles;
            if (female == "true" && male == "true")
            {
                IEnumerable<Article> articles1 = await _iFileHandling.FindAllExactMatches(@"\Music\Female", searchTerm);
                IEnumerable<Article> articles2 = await _iFileHandling.FindAllExactMatches(@"\Music\Male", searchTerm);
                articles = articles1.Concat(articles2);
            }
            else if (female == "true" && male == "undefined")
            {
                articles = await _iFileHandling.FindAllExactMatches(@"\Music\Female", searchTerm);
            }
            else if (female == "undefined" && male == "true")
            {
                articles = await _iFileHandling.FindAllExactMatches(@"\Music\Male", searchTerm);
            }
            else
            {
                return null;
            }
            if (period == "5years")
            {
                articles = articles.Where(a => a.PublishTime > DateTime.Now.AddYears(-5));
            }
            return articles;
        }

        [HttpGet("FindSportExactMatches/{female}/{male}/{period}/{searchTerm}")]
        public async Task<IEnumerable<Article>> FindSportExactMatches(string female, string male, string period, string searchTerm)
        {
            IEnumerable<Article> articles;
            if (female == "true" && male == "true")
            {
                IEnumerable<Article> articles1 = await _iFileHandling.FindAllExactMatches(@"\Sport\Female", searchTerm);
                IEnumerable<Article> articles2 = await _iFileHandling.FindAllExactMatches(@"\Sport\Male", searchTerm);
                articles = articles1.Concat(articles2);
                if (period == "5years")
                {
                    articles = articles.Where(a => a.PublishTime > DateTime.Now.AddYears(-5));
                }
            }
            else if (female == "true" && male == "undefined")
            {
                articles = await _iFileHandling.FindAllExactMatches(@"\Sport\Female", searchTerm);
                if (period == "5years")
                {
                    articles = articles.Where(a => a.PublishTime > DateTime.Now.AddYears(-5));
                }
            }
            else if (female == "undefined" && male == "true")
            {
                articles = await _iFileHandling.FindAllExactMatches(@"\Sport\Male", searchTerm);
                if (period == "5years")
                {
                    articles = articles.Where(a => a.PublishTime > DateTime.Now.AddYears(-5));
                }
            }
            else
            {
                return null;
            }
            if (period == "5years")
            {
                articles = articles.Where(a => a.PublishTime > DateTime.Now.AddYears(-5));
            }
            return articles;
        }
    }
}
