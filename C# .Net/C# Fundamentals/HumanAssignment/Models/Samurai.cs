using System;
using HumanAssignment.Models;


namespace HumanAssignment.Models
{
    public class Samurai : Human
    {


        public Samurai(string name, int strength, int dexterity) : base(name, strength, 30, dexterity, 75)
        {

        }

        public override void GetInfo()
        {
            base.GetInfo();
        }


        public override int Attack(Human target)
        {
            base.Attack(target);
            if (target.Health < 50)
            {
                target.Health = 0;
            }
            Console.WriteLine($"{target.Name}'s health has decreased to: {target.Health}");
            return target.Health;
        }
    }
}
