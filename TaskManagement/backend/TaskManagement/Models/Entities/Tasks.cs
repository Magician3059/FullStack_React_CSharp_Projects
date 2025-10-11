
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TaskManagement.Models.Entities
{
    public class Tasks
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public required string ToDoTask { get; set; } = String.Empty; // = "";

        public string? TaskDescription { get; set; }

     
        public required DateOnly Date { get; set; } // date-time but, i want only date

        public required string Time { get; set; }

    }
}
