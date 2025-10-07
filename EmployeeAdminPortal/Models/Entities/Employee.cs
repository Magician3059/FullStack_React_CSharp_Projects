using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Reflection.Metadata.Ecma335;
using System.Runtime.CompilerServices;

namespace EmployeeAdminPortal.Models.Entities
{
    public class Employee
    {

        [Key]                   // primary key
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)] // auto-increment
        public int Id { get; set; }
        public required String Name { get; set; }
        public required String Email { get; set; }

        public String? Phone {  get; set; }  // ? phone number is nullable props. can be null

        [Column(TypeName = "decimal(18,2)")]
        public decimal Salary { get; set; }

    }
}
