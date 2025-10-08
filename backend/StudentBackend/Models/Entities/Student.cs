using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace StudentBackend.Models.Entities
{
    public class Student
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public required string Name { get; set; }

        [Column(TypeName = "decimal(18,2)")]  // Or use [Precision(18,2)] in EF Core 7+
        public required decimal Marks { get; set; }

        public String? Report {  get; set; }
    }
}
