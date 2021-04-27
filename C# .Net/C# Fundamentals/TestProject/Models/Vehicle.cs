using System;

namespace TestProject.Models
{
    public class Vehicle
    {
        public string Make;
        public string Model;
        public bool IsDomestic;

        public Vehicle(string make, string model, bool isDomestic)
        {
            Make = make;
            Model = model;
            IsDomestic = isDomestic;
        }


    }
}