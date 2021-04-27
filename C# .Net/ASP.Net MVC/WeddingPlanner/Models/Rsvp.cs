using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using LogNReg.Validations;
using LogNReg.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace LogNReg.Models
{
    public class Rsvp
    {
        [Key]
        public int RsvpId { get; set; }

        public int UserId { get; set; }


        public int WeddingId { get; set; }


        public User Guest { get; set; }

        public Wedding RSVP { get; set; }
    }
}