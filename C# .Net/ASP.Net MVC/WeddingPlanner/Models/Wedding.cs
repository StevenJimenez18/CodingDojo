using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using LogNReg.Validations;
using LogNReg.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;


namespace LogNReg.Models
{
    public class Wedding
    {
        [Key]
        public int WeddingId { get; set; }

        [Required(ErrorMessage = "Wedder One is required.")]
        [Display(Name = "Wedder One")]
        public string WedderOne { get; set; }

        [Required(ErrorMessage = "Wedder Two is required.")]
        [Display(Name = "Wedder Two")]
        public string WedderTwo { get; set; }

        [Required]
        [Display(Name = "Wedding Date")]
        [Future(ErrorMessage = "Wedding Date is required.")]
        public DateTime Date { get; set; }

        [Required]
        [Display(Name = "Wedding Address")]
        public string Address { get; set; }

        // Foreign Key - One to Many
        public int UserId { get; set; }

        //One to Many- A Wedding can only have one planner
        public User Planner { get; set; }

        //Many to many - A wedding can have many guests
        public List<Rsvp> GuestList { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.Now;

        public DateTime UpdatedAt { get; set; } = DateTime.Now;
    }
}