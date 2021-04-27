using System.ComponentModel.DataAnnotations;
namespace SampleProject.Models
{
    public class LoginUser
    {
        [EmailAddress]

        [Required]
        public string LoginEmail { get; set; }

        [DataType(DataType.Password)]

        [Required]
        public string LoginPassword { get; set; }

    }
}