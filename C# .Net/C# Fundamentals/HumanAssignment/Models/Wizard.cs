using System;
using HumanAssignment.Models;


namespace HumanAssignment.Models
{
    public class Wizard : Human
    {

        private int health;

        public Wizard(string name, int strength, int dexterity) : base(name, strength, 25, dexterity, 50)
        {

        }

        public override void GetInfo()
        {
            base.GetInfo();
        }

        public override int Attack(Human target)
        {
            int dmg = Intelligence * 5;
            target.Intelligence = target.Intelligence - dmg;
            health = health + dmg;
            Console.WriteLine($"{target.Name}'s intelligence has decreased to: {target.Intelligence}");
            Console.WriteLine($"{Name}'s health has increased to: {this.health}");
            return target.Intelligence;
        }

        public int Heal(Human target)
        {
            int heal = Intelligence * 10;
            target.Health = target.Health + heal;
            Console.WriteLine($"{target.Name}'s health has increased to {target.Health}");
            return target.Health;
        }
    }
}