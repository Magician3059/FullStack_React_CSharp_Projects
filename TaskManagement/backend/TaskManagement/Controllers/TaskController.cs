using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TaskManagement.Data;
using TaskManagement.Dto;
using TaskManagement.Models.Entities;

namespace TaskManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TaskController : ControllerBase
    {
        private readonly AppDbContext dbContext;

        public TaskController(AppDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        //------------------------------------------------

        [HttpPost]
        public IActionResult AddTask(AddTaskDto addTaskDto) {

            var task = new Tasks()
            {
                ToDoTask = addTaskDto.ToDoTask,
                TaskDescription = addTaskDto.TaskDescription ?? "",
                Date = addTaskDto.Date,
                Time = addTaskDto.Time,
            };


            dbContext.Tasks.Add(task);

            dbContext.SaveChanges();


            return CreatedAtAction(nameof(AddTask), task);
        }


        [HttpGet]
        public IActionResult GetTasks() {


            var tasks = dbContext.Tasks.ToList();

            if (!tasks.Any()) { NotFound(" No Task Found ");  };

            return Ok(tasks);
        }


        [HttpDelete("{id}")]
        public IActionResult DeleteTask(int id) {

            var task = dbContext.Tasks.Find(id);

            if (task == null) { return NotFound("Task Not Found "); }

            dbContext.Tasks.Remove(task);

            dbContext.SaveChanges();

            //return NoContent();
            return Ok(" Task Deleted "+ task);
        }

    }
}
