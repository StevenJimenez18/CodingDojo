using System.ComponentModel.DataAnnotations;
using System;

namespace LogNReg.Validations
{
    public class FutureAttribute : ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            if ((DateTime)value < DateTime.Now)
            {

                return new ValidationResult("Wedding date must be in the future.");
            }
            return ValidationResult.Success;
        }

    }

}