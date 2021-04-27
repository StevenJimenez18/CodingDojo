using System;
using HumanAssignment.Models;

namespace HumanAssignment
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");

            Human Jack = new Human("Jack");

            Human Jill = new Human("Jill", 1, 25, 1, 50);

            Wizard BlueWizard = new Wizard("BlueWizard", 25, 15);

            // Jack.GetInfo();
            // Console.WriteLine("------");
            // BlueWizard.GetInfo();


            // BlueWizard.Attack(Jack);
            // BlueWizard.GetInfo();

            Ninja RedNinja = new Ninja("RedNinja", 10, 10, 100);

            RedNinja.Attack(BlueWizard);

            Samurai GreenSamurai = new Samurai("GreenSamurai", 10, 10);

            GreenSamurai.Attack(RedNinja);

            BlueWizard.Heal(RedNinja);

            RedNinja.Steal(GreenSamurai);

        }
    }
}
