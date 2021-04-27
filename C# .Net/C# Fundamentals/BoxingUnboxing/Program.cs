using System;
using System.Collections.Generic;

namespace BoxingUnboxing
{
    class Program
    {
        static void Main(string[] args)
        {
            List<object> NewList = new List<object>();
            NewList.Add(7);
            NewList.Add(28);
            NewList.Add(-1);
            NewList.Add(true);
            NewList.Add("chair");
            int NewSum = 0;
            foreach (var items in NewList)
            {
                Console.WriteLine(items);
                if (items is int)
                {

                    int i = (int)items;
                    NewSum += i;
                }
            }

            Console.WriteLine(NewSum);
        }
    }
}
