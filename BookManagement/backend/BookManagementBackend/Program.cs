
using BookManagementBackend.Data;
using Microsoft.EntityFrameworkCore;

namespace BookManagementBackend
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            // Register
            builder.Services.AddDbContext<AppDbContext>(options =>
               options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

            // Add CORS policy for all frontends
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("AllowAllOrigins", policy =>
                {
                    policy.AllowAnyOrigin()      // allow requests from any frontend
                           .AllowAnyMethod()      // allow GET, POST, PATCH, DELETE, etc.
                          .AllowAnyHeader();     // allow any headers
                   }); 
            });
           
            
            var app = builder.Build();

 
            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();


            // use cors policy before  app.UseAuthorization();
            app.UseCors("AllowAllOrigins");


            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}
