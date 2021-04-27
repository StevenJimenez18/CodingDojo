using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Assignments.Models;
using Microsoft.AspNetCore.Http;

namespace Assignments.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            if (HttpContext.Session.GetInt32("Count") == null)
            {

                HttpContext.Session.SetInt32("Count", 0);
            }
            ViewBag.Count = HttpContext.Session.GetInt32("Count");

            Random rand = new Random();
            int randNumber = rand.Next();
            List<String> passwordDict = new List<String>(){
                "A","B","C","D","E","F","G","H","I","J","K","L","M","O","P","Q","R","S","T","U","V","W","X","Y","Z"
            };
            List<String> numbersDict = new List<String>(){
                "1", "2", "3", "4", "5", "6", "7", "8", "9"
            };
            List<String> passwordGen = new List<String>();

            for (int i = 0; i < 14; i++)
            {
                int selector = rand.Next(20);
                if (selector % 2 == 0)
                {
                    int alphaSelect = rand.Next(25);
                    passwordGen.Add(passwordDict[alphaSelect]);
                }
                else
                {
                    int numSelect = rand.Next(9);
                    passwordGen.Add(numbersDict[numSelect]);
                }
            };
            ViewBag.password = passwordGen;
            return View();
        }

        [HttpGet("click")]
        public IActionResult Click()
        {
            // int count = (int)HttpContext.Session.GetInt32("Count");
            // count++;
            // HttpContext.Session.SetInt32("Count", count);

            int? count = HttpContext.Session.GetInt32("Count");
            count++;
            HttpContext.Session.SetInt32("Count", (int)count);
            return RedirectToAction("Index");
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
