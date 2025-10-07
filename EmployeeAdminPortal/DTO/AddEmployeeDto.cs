namespace EmployeeAdminPortal.DTO
{
    public class AddEmployeeDto
    {
        public required String Name { get; set; }
        public required String Email { get; set; }

        public String? Phone { get; set; }  // ? phone number is nullable props. can be null

        public required decimal Salary { get; set; }
    }
}
