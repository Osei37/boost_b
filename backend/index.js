const express = require('express')
const mysql = require('mysql2')
const app = express()
const port = process.env.PORT || 3004

app.use(express.urlencoded({ extended: true }));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'testuser001',
    password: 'ALV4+king37',
    database: 'comic'
});

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.post("/api", (req, res) => {
  const sql = "SELECT * FROM list where title = ?";
  connection.query(
    sql,
    req.body.title,
    function(err, results, fields) {
      if(err) {
        console.log("接続終了(異常)");
        throw err;
      }
      res.json({message: results[0]});
    }
  );
});

app.listen(port, () => {
console.log(`listening on *:${port}`);
})
