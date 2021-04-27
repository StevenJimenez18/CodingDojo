using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SportsORM.Models;


namespace SportsORM.Controllers
{
    public class HomeController : Controller
    {

        private static Context _context;

        public HomeController(Context DBContext)
        {
            _context = DBContext;
        }

        [HttpGet("")]
        public IActionResult Index()
        {
            ViewBag.BaseballLeagues = _context.Leagues
                .Where(l => l.Sport.Contains("Baseball"))
                .ToList();
            return View();
        }

        [HttpGet("level_1")]
        public IActionResult Level1()
        {
            ViewBag.Conferences = _context.Players
                        // .Where(l => l.Name.Contains("Conference"))
                        // .ToList();
                        // .Where(l => l.Name.Contains("Women"))
                        // .ToList();
                        // .Where(l => l.Name.Contains("Hockey"))
                        // .ToList();
                        // .Where(l => !l.Sport.Contains("Football"))
                        // .ToList();
                        // .Where(l => l.Name.Contains("Atlantic"))
                        // .ToList();
                        // .Where(l => l.Location.Contains("Dallas"))
                        // .ToList();
                        // .Where(l => l.TeamName.Contains("Raptors"))
                        // .ToList();
                        // .OrderBy(l => l.Location)
                        // .ToList();
                        // .OrderByDescending(l => l.TeamName)
                        // .ToList();
                        // .Where(l => l.Location.Contains("City"))
                        // .ToList();
                        // .Where(l => l.LastName.Contains("Cooper"))
                        // .ToList();
                        // .Where(l => l.FirstName.Contains("Joshua"))
                        // .ToList();
                        // .Where(l => l.LastName.Contains("Cooper"))
                        // .Where(l => !l.FirstName.Contains("Joshua"))
                        // .ToList();
                        .Where(l => l.FirstName.Contains("Joshua") || l.FirstName.Contains("Wyatt"))
                        .ToList();
            return View();
        }

        [HttpGet("level_2")]
        public IActionResult Level2()
        {
            return View();
        }

        [HttpGet("level_3")]
        public IActionResult Level3()
        {
            return View();
        }

    }
}