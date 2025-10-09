using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookManagementBackend.Models
{
    public class Book
    {
        [Key]
        [DatabaseGeneratedAttribute(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public required string Name { get; set; }

        public string? Description { get; set; }

        public string? Author { get; set; }

        [Column(TypeName ="decimal(18,2)")]
        public required decimal Price { get; set; }

    }
}
