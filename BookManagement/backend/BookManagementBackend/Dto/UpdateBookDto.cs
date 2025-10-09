using System.ComponentModel.DataAnnotations.Schema;

namespace BookManagementBackend.Dto
{
    public class UpdateBookDto
    {
        public string? Name { get; set; }

        public string? Description { get; set; }

        public string? Author { get; set; }

        [Column(TypeName = "decimal(18,2)")]
        public decimal? Price { get; set; }
    }
}
