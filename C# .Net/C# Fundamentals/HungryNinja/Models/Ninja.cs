using System;
using System.Collections.Generic;
using HungryNinja.Models;

namespace HungryNinja.Models
{
    class Ninja
    {
        private int calorieIntake;

        public List<Food> FoodHistory;

        // add a constructor
        public Ninja(int calorieintake)
        {
            this.calorieIntake = calorieintake;
            FoodHistory = new List<Food>();
        }
        // add a public "getter" property called "IsFull"
        public bool IsFull
        {
            get
            {
                if (calorieIntake > 1200)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
        }
        // build out the Eat method
        public void Eat(Food item)
        {
            if (!IsFull)
            {
                FoodHistory.Add(item);
                calorieIntake += item.Calories;
                if (item.IsSpicy == true)
                {
                    string spicyOrSweet = "Spicy";
                    Console.WriteLine($"Ninja Ate {item.Name} and it was {spicyOrSweet}");
                }
                else
                {
                    string spicyOrSweet = "Sweet";
                    Console.WriteLine($"Ninja Ate {item.Name} and it was {spicyOrSweet}");
                }
            }
            else
            {
                Console.WriteLine("Ninja full and can't eat anymore.");
            }
        }
    }
}