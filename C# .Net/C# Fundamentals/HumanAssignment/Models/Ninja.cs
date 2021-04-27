using System;
using HumanAssignment.Models;


namespace HumanAssignment.Models
{
    public class Ninja : Human
    {


        public Ninja(string name, int strength, int intelligence, int health) : base(name, strength, intelligence, 175, health)
        {

        }

        public override void GetInfo()
        {
            base.GetInfo();
        }

        public override int Attack(Human target)
        {
            Random rand = new Random();
            int addDamage = rand.Next(1, 5);
            int dmg = Intelligence * 5;
            Console.WriteLine($"Original damage: {dmg}");
            if (addDamage == 3)
            {
                dmg = dmg + 10;
            }
            Console.WriteLine($"Possible damage: {dmg}");
            target.Dexterity = target.Dexterity - dmg;
            Console.WriteLine($"");
            Console.WriteLine($"{target.Name}'s dexterity has decreased to: {target.Dexterity}");
            return target.Dexterity;
        }

        public int Steal(Human target)
        {
            target.Health = target.Health - 5;
            this.Health = Health + 5;
            Console.WriteLine($"{target.Name}'s health has decreased to: {target.Health}");
            Console.WriteLine($"{Name}'s health has increased to: {this.Health}");

            return target.Health;
        }
    }
}