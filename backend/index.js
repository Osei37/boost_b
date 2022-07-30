const express = require('express')
const mysql = require('mysql2')
const app = express()
const port = process.env.PORT || 3002

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'testuser001',
    password: 'ALV4+king37',
    database: 'comic'
});

app.get('/', (req, res) => {
    res.send('Hello World!')
})
  
app.get("/api", (req, res) => {
    connection.query(
        'SELECT * FROM `list`',
        function(err, results, fields) {
          if(err) {
            console.log("接続終了(異常)");
            throw err;
          }
          res.json({message: results[0].title});
        }
      );
    console.log("接続終了(正常)");
});

app.listen(port, () => {
console.log(`listening on *:${port}`);
})
