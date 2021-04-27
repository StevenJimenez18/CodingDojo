using System;
using System.Collections.Generic;

namespace Puzzles
{
    class Program
    {
        static void Main(string[] args)
        {
            // RandomArray();
            // TossCoin();
            Names();
        }

        public static void RandomArray()
        {

            Random rand = new Random();
            int[] randArr = new int[10];
            for (int i = 0; i < randArr.Length; i++)
            {
                randArr[i] = rand.Next(5, 25);
            }

            int[] newArr = randArr;
            int min = newArr[0];
            int max = newArr[0];
            int sum = 0;
            for (int i = 0; i < newArr.Length; i++)
            {
                if (newArr[i] < min)
                {
                    min = newArr[i];
                }

                if (newArr[i] > max)
                {
                    max = newArr[i];
                }

                sum += newArr[i];
            }
            Console.WriteLine($"Min: {min}");
            Console.WriteLine($"Max: {max}");
            Console.WriteLine($"Sum: {sum}");
        }

        public static void TossCoin()
        {
            Console.WriteLine("Tossing a Coin:");
            Random rand = new Random();
            int coin = rand.Next(1, 10);
            if (coin % 2 == 0)
            {
                Console.WriteLine("Its' Heads!");
            }
            else
            {
                Console.WriteLine("It's Tails!");
            }
        }

        public static void Names()
        {
            List<string> names = new List<string>();
            names.Add("Todd");
            names.Add("Tiffany");
            names.Add("Charlie");
            names.Add("Geneva");
            names.Add("Sydney");
            Random rand = new Random();

            for (int i = 0; i < 5; i++)
            {
                if (names[i].Length < 5)
                    Console.WriteLine(names[i]);
            }
        }
    }
}

