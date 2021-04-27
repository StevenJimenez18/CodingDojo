using System;
namespace HumanAssignment.Models
{
    public class Human
    {
        public string Name;
        public int Strength;
        public int Intelligence;
        public int Dexterity;
        private int health;

        //Our getter for a private property of health
        public int Health
        {
            get
            {
                return health;
            }
            set
            {
                health = value;
            }
        }
        public bool IsDead
        {
            get { return health <= 0; }
        }


        // add a public "getter" property to access health

        // Add a constructor that takes a value to set Name, and set the remaining fields to default values
        public Human(string name)
        {
            Name = name;
            Strength = 3;
            Intelligence = 3;
            Dexterity = 3;
            this.health = 100;
        }
        // Add a constructor to assign custom values to all fields
        public Human(string name, int strength, int intelligence, int dexterity, int health)
        {
            Name = name;
            Strength = strength;
            Intelligence = intelligence;
            Dexterity = dexterity;
            this.health = health;
        }
        // Build Attack method
        public virtual int Attack(Human target)
        {
            int dmg = this.Strength * 5;
            target.health = target.health - dmg;
            Console.WriteLine($"{this.Name} attacked {target.Name} for {dmg} damage.");
            Console.WriteLine($"{target.Name}'s health is now {target.health}");
            // if (target.IsDead)
            // {
            //     Console.WriteLine($"{target} has died.");
            // }
            return target.health;
        }

        public virtual void GetInfo()
        {
            Console.WriteLine($"Name: {Name}");
            Console.WriteLine($"Strength: {Strength}");
            Console.WriteLine($"Intelligence: {Intelligence}");
            Console.WriteLine($"Dexterity: {Dexterity}");
            Console.WriteLine($"Health: {Health}");
        }


    }
}