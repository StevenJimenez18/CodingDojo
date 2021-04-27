using System;
using DeckOfCards.Models;
namespace DeckOfCards
{
    class Program
    {
        static void Main(string[] args)
        {
            // Card test = new Card("Sapdes", 1);
            // test.Display();
            Deck GameTime = new Deck();
            GameTime.Shuffle();
            GameTime.Showcards();
            Card dealt = GameTime.Deal();
            dealt.Display();
        }
    }
}
