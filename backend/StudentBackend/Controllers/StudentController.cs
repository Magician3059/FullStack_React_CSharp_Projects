using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using StudentBackend.Data;
using StudentBackend.Dto;
using StudentBackend.Models.Entities;

namespace StudentBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private readonly AppDbContext dbContext;

        public StudentController(AppDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        //-----------------------------------------------------------


        [HttpPost]
        public IActionResult AddStudent([FromBody] AddStudentDto addStudentDto)
        {
            var student = new Student()
            {
    
                Name = addStudentDto.Name,
                Marks = addStudentDto.Marks,
                Report = addStudentDto.Report
            };


            dbContext.Students.Add(student);

            dbContext.SaveChanges();

            return Ok(student);
        }


        [HttpGet]
        public IActionResult GetStudents()
        {
            var students = dbContext.Students.ToList();
            if (!students.Any()) { return NotFound(" No Student Is Found "); }

            return Ok(students);
        }


        [HttpGet("{id}")]
        public IActionResult GetStudent(int id) { 
        
             var student = dbContext.Students.FirstOrDefault(std=>std.Id == id);

            if (student == null) { return NotFound("Student Not Found"); }

            return Ok(student);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteStudent(int id) {

            var student = dbContext.Students.FirstOrDefault(std => std.Id == id);

            if (student == null) { return NotFound("Student Not Found"); }

            dbContext.Students.Remove(student);

            dbContext.SaveChanges();

            return Ok(" Student Deleted "+ student.Name);

        }


        [HttpPatch("{id}")]
        public IActionResult UpdateStudent(int id ,[FromBody] UpdatedStudentDto updatedStudentDto) {

            var student = dbContext.Students.FirstOrDefault(std => std.Id == id);

            if (student == null) { return NotFound("Student Not Found"); }


            if (updatedStudentDto.Name != null) {
               student.Name = updatedStudentDto.Name;
             }

            if (updatedStudentDto.Report != null)
            {
                student.Report = updatedStudentDto.Report;
            }

            if (updatedStudentDto.Marks != null)
            {
                student.Marks = (decimal)updatedStudentDto.Marks;
            }

            dbContext.SaveChanges();

            return Ok(" Student Updated "+ student.Name);
        }
         
    }
}
