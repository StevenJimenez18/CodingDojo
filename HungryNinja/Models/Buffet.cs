using System;
using System.Collections.Generic;
using HungryNinja.Models;

namespace HungryNinja.Models
{
    class Buffet
    {
        public List<Food> Menu;
        //constructor
        public Buffet()
        {
            Menu = new List<Food>()
        {
            new Food("Apple", 100, false, true),
            new Food("Banana", 150, false, true),
            new Food("Jalapenos", 80, true, false),
            new Food("Orange", 120, false, true),
            new Food("Mango", 150, false, true),
            new Food("Mango Pepper", 80, true, true),
            new Food("Cherry", 90, false, true)
        };
        }

        public Food Serve()
        {
            Random rand = new Random();
            int getfood = rand.Next(Menu.Count);
            return Menu[getfood];

        }
    }
}