const express = require('express')
const mysql = require('mysql2')
const app = express()
const port = process.env.PORT || 3001

app.use(express.urlencoded({ extended: true }));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ALV4+king37',
    database: 'test'
});

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.post("/apibscore", (req, res) => {
  const sql = "SELECT * FROM info where season = ? and category = ?";
  connection.query(
    sql,
    [req.body.season, req.body.category],
    function(err, results, fields) {
      if(err) {
        console.log("接続終了(異常)");
        throw err;
      }
      res.json({message: results});
    }
  );
});

app.listen(port, () => {
console.log(`listening on *:${port}`);
})
