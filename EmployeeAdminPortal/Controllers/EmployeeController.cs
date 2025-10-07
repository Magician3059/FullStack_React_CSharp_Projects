using EmployeeAdminPortal.Data;
using EmployeeAdminPortal.DTO;
using EmployeeAdminPortal.Models.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.ChangeTracking.Internal;

namespace EmployeeAdminPortal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly ApplicationDbContext dbContext;

        // Add DI of Database
        public EmployeeController(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }


        //-------------------------------------------------


        [HttpPost]
        public IActionResult AddEmployee(AddEmployeeDto newEmp)
        {
            // convert DTO into emp object
            var emp = new Employee()
            { 

                Email = newEmp.Email,
                Name = newEmp.Name,
                Salary = newEmp.Salary,
                Phone = newEmp.Phone
            };

            // add emp to employee list
            dbContext.Employees.Add(emp);
            // save to database 
            dbContext.SaveChanges();

            return Ok(emp);
        }


        [HttpGet]
        public IActionResult GetEmployees()
        {

            // get emps from database
            var emps = dbContext.Employees.ToList();

            if (emps == null || emps.Count == 0) return NotFound();
            // send all 
            return Ok(emps);
        }





        [HttpGet("{id}")]
        public IActionResult GetEmployeeById(int id)
        {

            var emp = dbContext.Employees.Find(id);

            if (emp == null) { return NotFound(); }

            return Ok(emp);
        }


        [HttpDelete("{id}")]
        public IActionResult DeleteEmployee(int id) {

            var emp = dbContext.Employees.Find(id);

            if (emp == null) { return NotFound(); }

            dbContext.Employees.Remove(emp);

            dbContext.SaveChanges();

            return Ok(emp);
        } 


        

    
    }
}
