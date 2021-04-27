using System;
using System.Collections.Generic;
using System.Linq;

namespace BasicThirteen
{
    class Program
    {

        static void Main(string[] args)
        {
            int[] TestArray = { -5, -2, 5, -4, -1 };
            int[] averageArr = { 2, 10, 3, 7 };
            int[] squareArr = { 1, 5, 10, -10 };
            int[] negArr = { 1, 5, 10, 7, -2 };
            int[] avgArry = { 2, 10, 3 };
            int[] numString = { -1, -3, 2 };
            //Functions go here
            // PrintAll();
            // PrintOdd();
            // PrintSum();
            // IterateArray(TestArray);
            // FindMax(TestArray);
            // FindAverage(averageArr);
            // GreaterThanY(averageArr, 5);
            // OddNumbers();
            // SquareTheValues(squareArr);
            // EliminateNegatives(negArr);
            // MinMaxAvg(negArr);
            // ShiftValues(TestArray);
            // NumToString(numString);


        }

        public static void PrintAll()
        {
            // Print all of the integers from 1 to 255.
            int i = 1;
            while (i <= 255)
            {
                Console.WriteLine(i);
                i++;
            }
        }

        public static void PrintOdd()
        {
            int i = 1;
            while (i <= 255)
            {
                Console.WriteLine(i);
                i += 2;
            }
        }

        public static void PrintSum()
        {
            int i = 0;
            int sum = 0;
            while (i <= 255)
            {
                sum += i;
                Console.WriteLine($"New Numbr: {i} Sum: {sum}");
                i += 1;
            }
        }

        public static void IterateArray(int[] arr)
        {

            foreach (int num in arr)
            {
                Console.WriteLine(num);
            }
        }

        public static void FindMax(int[] arr)
        {
            int tempVal = arr[0];
            for (int i = 0; i < arr.Length; i++)
            {

                if (arr[i] > tempVal)
                {
                    Console.WriteLine($"I is:{arr[i]}, tempVal is: {tempVal}");
                    tempVal = arr[i];
                    Console.WriteLine($"tempVal now is: {tempVal}");
                }
            }
            Console.WriteLine(tempVal);
        }

        public static void FindAverage(int[] arr)
        {
            int sum = 0;
            foreach (int num in arr)
            {
                sum += num;
            }

            int average;
            average = sum / arr.Length;
            Console.WriteLine(average);
        }

        public static void OddNumbers()
        {


            for (int i = 1; i < 255; i += 2)
            {
                int[] oddArray = { i };
                foreach (int num in oddArray)
                {
                    var oddArrayString = string.Join(",", oddArray);
                    Console.WriteLine(oddArrayString);
                }
            }
        }



        public static void GreaterThanY(int[] arr, int y)
        {
            int counter = 0;

            for (int i = 0; i < arr.Length; i++)
            {
                if (arr[i] > y)
                {
                    counter++;
                }
            }

            Console.WriteLine(counter);
        }


        public static void SquareTheValues(int[] arr)
        {
            foreach (int num in arr)
            {
                int squareVal = num * num;
                Console.WriteLine(squareVal);
            }
        }

        public static void EliminateNegatives(int[] arr)
        {
            for (int i = 0; i < arr.Length; i++)
            {
                if (arr[i] < 0)
                {
                    arr[i] = 0;
                }
            }
            Console.WriteLine(String.Join(",", arr));
        }

        public static void MinMaxAvg(int[] arr)
        {
            int min = arr[0],
                max = arr[0],
                avg = 0;
            for (int i = 0; i < arr.Length; i++)
            {
                if (arr[i] < min)
                {
                    min = arr[i];
                }

                if (arr[i] > max)
                {
                    max = arr[i];
                }
                avg += arr[i];
            }

            int average = avg / arr.Length;
            Console.WriteLine($"Min: {min}");
            Console.WriteLine($"Max: {max}");
            Console.WriteLine($"Avergae: {average}");
        }

        public static void ShiftValues(int[] arr)
        {
            for (int i = 0; i < arr.Length - 1; i++)
            {

                arr[i] = arr[i + 1];
                Console.WriteLine(arr[i]);
            }
            arr[arr.Length - 1] = 0;
            Console.WriteLine(string.Join(",", arr));
        }

        // public static void NumToString(int[] arr)
        // {
        //     string[] newarr = {};
        //     for (int i = 0; i < arr.Length; i++)
        //     {

        //         if (arr[i] < 0)
        //         {
        //             newarr = {"Dojo"};
        //             Console.WriteLine(newarr);
        //         }
        //     }

        // }

    }
}
