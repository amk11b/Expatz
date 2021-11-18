using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Extensions
{
    public static class DateTimeExtensions
    {
        //Calculate their age
        public static int CalculateAge(this DateTime dob)
        {
            var today = DateTime.Today;
            var age = today.Year - dob.Year;
            //If the date of birth is greater than the current day, subtract a year as they have not yet had their birthday this year
            if(dob.Date > today.AddYears(-age)) age--;
            return age;
        }
    }
}