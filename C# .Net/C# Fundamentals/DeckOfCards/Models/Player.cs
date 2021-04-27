using System;
using System.Collections.Generic;
namespace DeckOfCards.Models
{
    public class Player
    {
        public string Name;
        public List<Card> Hand;

        public Player(string name)
        {
            Name = name;
            Hand = new List<Card>();
        }


        public Card Draw(Deck cards)
        {
            Card c = cards.Deal();
            Hand.Add(c);
            return c;
        }

        public Card Discard(int idx)
        {
            Card c = Hand[idx];
            if (c == null)
            {
                Console.WriteLine("No Card found.");
                return null;
            }
            else
            {
                Hand.RemoveAt(idx);
                return c;
            }
        }

    }
}