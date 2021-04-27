using System.ComponentModel.DataAnnotations;
namespace SampleProject.Models
{
    public class Survey
    {
        [Required]
        [MinLength(2, ErrorMessage = "Must be at least 2 charecters long.")]
        public string FirstName { get; set; }

        [Required]
        [MinLength(2, ErrorMessage = "Must be at least 2 charecters long.")]
        public string LastName { get; set; }

        [Required]
        public string Location { get; set; }

        [Required]
        public string Language { get; set; }

        [MaxLength(20, ErrorMessage = "Must not be greater than 20 charecters long.")]
        public string Comment { get; set; }

    }
}