using System;
using System.Collections.Generic;

namespace CollectionsPractice
{
    class Program
    {
        static void Main(string[] args)
        {
            //Basic Arrays

            int[] newArray = new int[] { 1, 2, 3, 4, 5, 6, 7, 8, 9 };
            foreach (int num in newArray)
            {
                Console.WriteLine(num);
            }

            Console.WriteLine("-------------");

            string[] StringArray = new string[] { "Tim", "Martin", "Nikki", "Sara" };
            foreach (string names in StringArray)
            {
                Console.WriteLine(names);
            }

            Console.WriteLine("-------------");

            Boolean[] BoolArray = new Boolean[] { true, false, true, false, true, false, true, false, true, false };
            foreach (Boolean items in BoolArray)
            {
                Console.WriteLine(items);
            }


            Console.WriteLine("-------------");

            //Lists
            List<string> Icecream = new List<string>();
            Icecream.Add("Vanilla");
            Icecream.Add("Chocolate");
            Icecream.Add("Strawberry");
            Icecream.Add("Cookie Dough");
            Icecream.Add("Smores");
            foreach (string flavors in Icecream)
            {
                Console.WriteLine(flavors);
            }
            Console.WriteLine($"The third flavor of icecream is " + Icecream[2]);

            Console.WriteLine("-------------");

            Icecream.RemoveAt(2);


            foreach (string flavors in Icecream)
            {
                Console.WriteLine(flavors);
            }

            Console.WriteLine("-------------");


            //Dictionary

            Dictionary<string, string> profile = new Dictionary<string, string>();

            //Adds names with random ice cream to dictionary
            var random = new Random();

            foreach (string names in StringArray)
            {
                profile.Add(names, Icecream[random.Next(0, Icecream.Count)]);
            }

            //Prints Name and icecream


            foreach (var entry in profile)
            {
                Console.WriteLine(entry.Key + " - " + entry.Value);
            }


        }
    }
}
