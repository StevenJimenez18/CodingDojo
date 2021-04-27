using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using LogNReg.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;




namespace LogNReg.Controllers
{
    public class HomeController : Controller
    {
        private MyContext dbContext { get; set; }

        public HomeController(MyContext context)
        {
            dbContext = context;
        }

        [HttpGet("")]
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("landingpage")]
        public IActionResult LandingPage()
        {
            User userInDb = UserInDB();
            if (userInDb == null)
            {
                return RedirectToAction("LogOut");

            }
            Rsvp join = new Rsvp();

            ViewBag.User = userInDb;
            List<Wedding> AllWeddings = dbContext.Weddings
                                                    .Include(u => u.Planner)
                                                    .Include(u => u.GuestList)
                                                    .ToList();

            return View(AllWeddings);
        }

        public User UserInDB()
        {
            return dbContext.Users.FirstOrDefault(u => u.UserId == HttpContext.Session.GetInt32("UserId"));
        }

        [HttpPost("register")]
        public IActionResult Register(User reg)
        {
            if (ModelState.IsValid)
            {
                if (dbContext.Users.Any(u => u.Email == reg.Email))
                {
                    ModelState.AddModelError("Email", "Email already exists.");
                    return View("Index");
                }

                PasswordHasher<User> Hasher = new PasswordHasher<User>();
                reg.Password = Hasher.HashPassword(reg, reg.Password);
                dbContext.Users.Add(reg);
                dbContext.SaveChanges();
                HttpContext.Session.SetInt32("UserId", reg.UserId);

                return RedirectToAction("LandingPage");
            }
            else
            {

                return View("Index");
            }



        }

        [HttpPost("login")]
        public IActionResult Login(LoginUser log)
        {

            if (ModelState.IsValid)
            {
                User userInDb = dbContext.Users.FirstOrDefault(u => u.Email == log.LoginEmail);
                if (userInDb == null)
                {
                    ModelState.AddModelError("LoginEmail", "Invalid Email or Password");
                    ModelState.AddModelError("LoginPassword", "Invalid Email or Password");
                    return View("Index");
                }
                var hasher = new PasswordHasher<LoginUser>();
                var result = hasher.VerifyHashedPassword(log, userInDb.Password, log.LoginPassword);

                // result can be compared to 0 for failure
                if (result == 0)
                {
                    ModelState.AddModelError("LoginEmail", "Invalid Email or Password");
                    ModelState.AddModelError("LoginPassword", "Invalid Email or Password");
                    return View("Index");
                }

                HttpContext.Session.SetInt32("UserId", userInDb.UserId);

                return RedirectToAction("LandingPage");
            }
            else
            {
                return View("Index");
            }

        }

        [HttpGet("logout")]
        public IActionResult Logout()
        {
            HttpContext.Session.Clear();
            return RedirectToAction("Index");
        }

        [HttpGet("new/wedding")]
        public IActionResult NewWedding()
        {

            User userInDb = UserInDB();
            if (userInDb == null)
            {
                return RedirectToAction("LogOut");

            }
            ViewBag.User = userInDb;
            return View();
        }


        [HttpPost("create/wedding")]

        public IActionResult CreateWedding(Wedding plan)
        {
            User userInDb = UserInDB();
            if (userInDb == null)
            {
                return RedirectToAction("LogOut");

            }
            if (ModelState.IsValid)
            {
                dbContext.Weddings.Add(plan);
                dbContext.SaveChanges();
                return Redirect($"/show/{plan.WeddingId}");
            }
            else
            {
                ViewBag.User = userInDb;
                return View("NewWedding");
            }
        }


        [HttpGet("show/{weddingId}")]

        public IActionResult ShowWedding(int weddingId)
        {
            User userInDb = UserInDB();
            if (userInDb == null)
            {
                return RedirectToAction("LogOut");

            }

            Wedding show = dbContext.Weddings

                                            .Include(w => w.Planner)
                                            .Include(w => w.GuestList)
                                            .ThenInclude(r => r.Guest)
                                            .FirstOrDefault(w => w.WeddingId == weddingId);
            ViewBag.User = userInDb;
            return View(show);
        }

        [HttpGet("{status}/{weddingId}/{userId}")]
        public IActionResult Rsvp(string status, int weddingId, int userId)
        {
            User userInDb = UserInDB();
            if (userInDb == null)
            {
                return RedirectToAction("LogOut");

            }
            if (status == "attend")
            {
                Rsvp going = new Rsvp();
                going.UserId = userId;
                going.WeddingId = weddingId;
                dbContext.Rsvps.Add(going);
                dbContext.SaveChanges();
            }
            else if (status == "un-rsvp")
            {
                Rsvp leave = dbContext.Rsvps.FirstOrDefault(r => r.WeddingId == weddingId && r.UserId == userId);
                dbContext.Rsvps.Remove(leave);
                dbContext.SaveChanges();
            }
            return RedirectToAction("LandingPage");
        }

        // [HttpGet("{status}/{weddingId}/{userId}")]
        // public IActionResult Rsvp(string status, int weddingId, int userId)
        // {
        //     User userInDb = UserInDB();
        //     if (userInDb == null)
        //     {
        //         return RedirectToAction("Logout");
        //     }
        //     else
        //     {
        //         if (status == "attend")
        //         {
        //             Rsvp going = new Rsvp();
        //             going.UserId = userId;
        //             going.WeddingId = weddingId;
        //             dbContext.Rsvps.Add(going);
        //             dbContext.SaveChanges();
        //         }
        //         else if (status == "leave")
        //         {
        //             Rsvp leave = dbContext.Rsvps.FirstOrDefault(r => r.WeddingId == weddingId && r.UserId == userId);
        //             dbContext.Rsvps.Remove(leave);
        //             dbContext.SaveChanges();

        //         }
        //         return RedirectToAction("LandingPage");
        //     }
        // }


        [HttpGet("cancel/{weddingId}")]
        public IActionResult CancelWedding(int weddingId)
        {
            User userInDb = UserInDB();
            if (userInDb == null)
            {
                return RedirectToAction("LogOut");

            }
            Wedding cancel = dbContext.Weddings.FirstOrDefault(w => w.WeddingId == weddingId);
            dbContext.Weddings.Remove(cancel);
            dbContext.SaveChanges();
            return RedirectToAction("LandingPage");
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
