namespace cardCreator.Models
{
    public class Character
    {
        public string name;
        public string image;
        public string catchphrase;

        public Character(string name, string image, string catchphrase)
        {
            this.name = name;
            this.image = image;
            this.catchphrase = catchphrase;
        }
    }
}