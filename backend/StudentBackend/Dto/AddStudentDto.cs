namespace StudentBackend.Dto
{
    public class AddStudentDto
    {
        public required string Name { get; set; }

        public required decimal Marks { get; set; }

        public String? Report { get; set; }
    }
}
