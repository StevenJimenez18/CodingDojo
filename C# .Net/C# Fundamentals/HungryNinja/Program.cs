using System;
using System.Collections.Generic;
using HungryNinja.Models;

namespace HungryNinja
{
    class Program
    {
        static void Main(string[] args)
        {
            Ninja Kyle = new Ninja(0);
            Buffet newFood = new Buffet();

            Kyle.Eat(newFood.Serve());
            Kyle.Eat(newFood.Serve());
            Kyle.Eat(newFood.Serve());
            Kyle.Eat(newFood.Serve());
            Kyle.Eat(newFood.Serve());
            Kyle.Eat(newFood.Serve());
            Kyle.Eat(newFood.Serve());
            Kyle.Eat(newFood.Serve());
            Kyle.Eat(newFood.Serve());
            Kyle.Eat(newFood.Serve());
            Kyle.Eat(newFood.Serve());
            Kyle.Eat(newFood.Serve());

        }
    }
}
