using BookApp.Shared;
using EntryApp.Models;
using Microsoft.EntityFrameworkCore;
using RedPlus.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(connectionString));
builder.Services.AddDatabaseDeveloperPageExceptionFilter();

builder.Services.AddControllersWithViews();
builder.Services.AddRazorPages();

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(builder =>
    {
        builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
    });
});

#region +
//builder.Services.AddDefaultIdentity<ApplicationUser>(options => options.SignIn.RequireConfirmedAccount = true)
//    .AddEntityFrameworkStores<ApplicationDbContext>();

//builder.Services.AddIdentityServer()
//    .AddApiAuthorization<ApplicationUser, ApplicationDbContext>();

//builder.Services.AddAuthentication()
//    .AddIdentityServerJwt();

//builder.Services.AddControllersWithViews();
//builder.Services.AddRazorPages();

//// https://github.com/dotnet/core/blob/main/release-notes/6.0/known-issues.md#aspnet-core
//builder.Services.Configure<JwtBearerOptions>(
//    "IdentityServerJwtBearer", o => o.Authority = "https://localhost:44448"); 
#endregion

#region Books, Entries 
// EntryApp 관련 의존성(종속성) 주입 관련 코드만 따로 모아서 관리 
builder.Services.AddDependencyInjectionContainerForEntryApp(connectionString);

// BookAppDbContext.cs Inject: New DbContext Add
builder.Services.AddEntityFrameworkSqlServer().AddDbContext<BookAppDbContext>(options => options.UseSqlServer(connectionString));
// IBookRepository.cs Inject: DI Container
builder.Services.AddTransient<IBookRepository, BookRepository>();
#endregion

var app = builder.Build();

// Configure the HTTP request pipeline.
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseMigrationsEndPoint();
}
else
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

app.UseCors();

app.UseAuthentication();
app.UseAuthorization();

app.MapDefaultControllerRoute();
app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");
app.MapRazorPages();

app.MapFallbackToFile("index.html");

app.Run();
