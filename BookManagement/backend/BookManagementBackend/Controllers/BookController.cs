using BookManagementBackend.Data;
using BookManagementBackend.Dto;
using BookManagementBackend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Reflection.Metadata.Ecma335;

namespace BookManagementBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private readonly AppDbContext dbContext;

        public BookController(AppDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        //------------------------------------------------------
        [HttpPost]
        public IActionResult AddBook([FromBody] AddBookDto addBookDto)
        {
            var book = new Book()
            {
                Name = addBookDto.Name,
                Description = addBookDto.Description,
                Author = addBookDto.Author,
                Price = addBookDto.Price
            };


            dbContext.Books.Add(book);

            dbContext.SaveChanges();

            return CreatedAtAction( nameof(AddBook), book.Id ,book);
        }


        [HttpGet]
        public IActionResult GetBooks() {

            var books = dbContext.Books.ToList();

            if (!books.Any()) { NotFound("Book Not Found"); }

            return Ok(books);
        }


        [HttpDelete("{id}")]
        public IActionResult Deletebook(int id)
        {
            //find is more efficient becoz, it serch inmemory 1st
            var book = dbContext.Books.Find(id);

            if (book is null) return NotFound();

            dbContext.Books.Remove(book);

            dbContext.SaveChanges();

            return NoContent();// 204 No content 
        }


        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody] UpdateBookDto updateBookDto) {

            var book = dbContext.Books.Find(id);

            if(book is null) return NotFound();

            book.Name = updateBookDto.Name ?? book.Name;       // default original string
            book.Description = updateBookDto.Description ?? book.Description;
            book.Author = updateBookDto.Author ?? book.Author;
            book.Price = updateBookDto.Price ?? book.Price;     // default original as req is not null

            dbContext.SaveChanges();

            //return NoContent();
            return Ok(book);
        }

      
    }
}
