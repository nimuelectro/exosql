var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
 database: "cproh"
 

});
// Pour créer la table
/*con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
 var sql = "CREATE TABLE users (id INT NOT NULL UNIQUE AUTO_INCREMENT, firstname VARCHAR(255) NOT NULL, lasttname VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, age INT, companyName VARCHAR(255) )";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});*/

// Pour insérer dans la table
/*con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO users (firstname, lasttname, email, age) VALUES ('Nicolas', 'Dev', 'nico@simplon', 31), ('Florent', 'Dev', 'flo@simplon', 32), ('Matthieu', 'Dev', 'mat@simplon', 34)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("3 record inserted");
  });
});*/

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "SELECT email FROM users ORDER BY age";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});