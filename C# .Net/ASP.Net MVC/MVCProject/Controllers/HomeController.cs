using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using SampleProject.Models;

namespace SampleProject.Controllers
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


            return View();
        }

        [HttpGet("")]
        public IActionResult MainPage()
        {


            return View();
        }

        [HttpPost("register")]
        public IActionResult Register(NewUser reg)
        {
            if (ModelState.IsValid)
            {
                return RedirectToAction("Success");
            }
            else
            {
                return View("MainPage");
            }
        }

        [HttpPost("login")]
        public IActionResult Login(LoginUser log)
        {
            if (ModelState.IsValid)
            {
                return Redirect("/success");
            }
            else
            {
                return View("MainPage");
            }
        }

        [HttpGet("success")]
        public IActionResult Success()
        {
            return View();
        }





        [HttpPost("create")]
        public IActionResult Create(Survey surveyForm)
        {
            if (ModelState.IsValid)
            {
                return View("FormPage", surveyForm);
            }
            else
            {
                return View("Index");
            }
        }







        [HttpGet("numbers")]
        public IActionResult Numbers()
        {
            Random rand = new Random();
            Numbers randomNumbers = new Numbers()
            {
                numOne = rand.Next(0, 20),
                numTwo = rand.Next(0, 20),
                numThree = rand.Next(0, 20),
                numFour = rand.Next(0, 20),
                numFive = rand.Next(0, 20),
                numSix = rand.Next(0, 20),
            };

            List<Numbers> numModel = new List<Numbers>(){
                randomNumbers
            };

            return View(randomNumbers);
        }
        [HttpGet("users")]
        public IActionResult Users()
        {

            Users firstUser = new Users()
            {
                FirstName = "Rose",
                LastName = "Grace"
            };
            Users secondUser = new Users()
            {
                FirstName = "Terry",
                LastName = "Moss"
            };
            Users thirdUser = new Users()
            {
                FirstName = "Linda",
                LastName = "Johnson"
            };

            List<Users> userList = new List<Users>(){
                firstUser, secondUser, thirdUser
            };

            return View(userList);
        }
        [HttpGet("user")]
        public IActionResult newUser()
        {

            Users firstUser = new Users()
            {
                FirstName = "Rose",
                LastName = "Grace"
            };

            return View(firstUser);
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
