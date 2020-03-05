//employees//
function Employee (name, email, password) {
 this.name = name;
 this.email = email;
 this.password = password;
};

var mose = new Employee("Moses", "mosesmwangi286@gmail.com", "i286m");

var mark = new Employee("Mark", "nyttocreator@gmail.com", "12345");

var jose = new Employee("Joseph", "josenyingi@gmail.com", "jose123");

var charles = new Employee("Charles", "wcndirangu@gmail.com", "3s8h7@0F");

//employer<//
var boss = {
  "name": "Moha",
  "email": "nhg",
  "password": "454n"
};

function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "Moha" && password == "454n") {
alert ("Login successfully");
window.location = "index.html"; // Redirecting to other page.
  }
else if (username == "Moses" && password == "moses") {
  windows.location ="employee.html"
}
}
