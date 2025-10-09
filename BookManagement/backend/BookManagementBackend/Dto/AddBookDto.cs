using System.ComponentModel.DataAnnotations.Schema;

namespace BookManagementBackend.Dto
{
    public class AddBookDto
    {
        public required string Name { get; set; }

        public string? Description { get; set; }

        public string? Author { get; set; }

        [Column(TypeName = "decimal(18,2)")]
        public required decimal Price { get; set; }
    }
}
