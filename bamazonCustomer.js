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
  //console.log("connected as id " + connection.threadId + "\n");
  listProducts();
  
});

function listProducts() {
   connection.query("select * from products", function(err, res) {
       for(var i = 0; i < res.length; i++) {
           console.log("\n\t" + "ID " + res[i].id + " | " + res[i].product + " | "  + res[i].price);

       }
       userPrompt();
       
   })
};
function userPrompt() {
inquirer.prompt([
    
    {
        type: "input",
        name: "userId",
        message: "What is the ID of the product you would like to buy?"
    },

    {
        type: "input",
        name: "userQuantity",
        message: "How many units would you like to buy?"
    }


   ]).then(function(response) {
       var id = response.userId;
       var quantity = response.userQuantity;
       connection.query("select stock, price from products where id = ? ", [id], function(err, res) {
        
        for (var j = 0; j < res.length; j++) {
            var stockDB = res[j].stock;
            var priceDB = res[j].price;
        }
        if (quantity <= stockDB) {
            connection.query("update products set stock = stock - ? where id = ? ", [quantity, id], function(err2, res2) {
            var total = priceDB * quantity;
            console.log("Your total is: " + total);
        })


        }
        else {console.log("insufficient stock");}
       })
   })


}