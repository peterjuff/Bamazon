var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "bamazon"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  listProducts();
  
});

function listProducts() {
   connection.query("select * from products", function(err, res) {
       for(var i = 0; i < res.length; i++) {
           console.log(res[i].id + " | " + res[i].product + " | " + res[i].department + " | " + res[i].price + " | " + res[i].stock);
       }
   })
    //console.log("works");
};