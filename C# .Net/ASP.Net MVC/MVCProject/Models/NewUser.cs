using System.ComponentModel.DataAnnotations;

namespace SampleProject.Models
{
    public class NewUser
    {
        [Required]
        [MinLength(3, ErrorMessage = "First Name must be at least 3 charecters.")]
        [Display(Name = "First Name:")]
        public string FirstName { get; set; }

        [Required]
        [MinLength(3, ErrorMessage = "First Name must be at least 3 charecters.")]
        [Display(Name = "Last Name:")]
        public string LastName { get; set; }

        [EmailAddress]
        [Required]

        public string Email { get; set; }

        [DataType(DataType.Password)]
        [Required]
        [MinLength(8, ErrorMessage = "Password must be at least 8 charecters.")]

        public string Password { get; set; }

        [DataType(DataType.Password)]
        [Required]
        [Compare("Password")]

        public string ConfirmPassword { get; set; }
    }
}