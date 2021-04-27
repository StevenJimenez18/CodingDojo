using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using cardCreator.Models;

namespace cardCreator.Controllers
{
    public class CardController : Controller
    {
        public static List<Character> fakeDB = new List<Character>();

        [HttpGet("")]
        public ViewResult Index()
        {
            ViewBag.data = fakeDB;
            return View();
        }

        [HttpPost("addcard")]
        public IActionResult AddCard(string name, string image, string catchphrase)
        {
            Character newChar = new Character(name, image, catchphrase);
            fakeDB.Add(newChar);
            return RedirectToAction("Index");
        }
    }
}