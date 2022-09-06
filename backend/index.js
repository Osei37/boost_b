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
  // 0 は全てのデータを取得する
  let sql_list = []
  let query_list = []
  const season = req.body.season;
  const category = req.body.category;
  const home = req.body.home;
  const away = req.body.away;
  const day = req.body.day;
  const setsu = req.body.setsu;

  query_list.push("SELECT * FROM info");
  if (season!="0") {
    query_list.push("season = ?");
    sql_list.push(season);
  }
  if (category!="0") {
    query_list.push("category = ?");
    sql_list.push(category);
  }
  if (home!="0") {
    query_list.push("home = ?");
    sql_list.push(home);
  }
  if (away!="0") {
    query_list.push("away = ?");
    sql_list.push(away);
  }
  if (day!="0") {
    query_list.push("day = ?");
    sql_list.push(day);
  }
  if (setsu!="0") {
    query_list.push("setsu = ?");
    sql_list.push(setsu);
  }
  if (query_list.length>1) {
    query_list[0] += " WHERE " + query_list.slice(1).join(" AND ");
  }
  query_list[0] += " LIMIT 10";

  connection.query(
    query_list[0],
    sql_list,
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
