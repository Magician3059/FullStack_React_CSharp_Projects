using System.ComponentModel.DataAnnotations.Schema;

namespace TaskManagement.Dto
{
    public class AddTaskDto
    {
        public required string ToDoTask { get; set; } = String.Empty; // = "";

        public string? TaskDescription { get; set; }

        public required DateOnly Date { get; set; }
        public required string Time { get; set; }

    }
}
