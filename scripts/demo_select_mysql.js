var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "zengamer21",
    password: "M@j0rM0t0k0!",
    database: "post_grad"
});

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM persons", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});