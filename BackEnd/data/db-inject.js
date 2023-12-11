const { readFileSync } = require("fs");
const mysql = require("mysql");

const db = mysql.createConnection({
  host: "mysql-banlieu-defavorise.alwaysdata.net",
  user: "339741",
  password: "QFAPesd2023!",
  database: "banlieu-defavorise_test",
});
db.connect(function (err) {
  if (err) throw err;
  console.log("Connecté à la base de données MySQL!");
});

const raw = readFileSync(
  "/Users/leobckt/Desktop/Dev/B3/ProjetAPI/BackEnd/data/que-faire-a-paris.json"
);

let data = JSON.parse(raw);

for (d of data) {
  // console.log(d);

  var values = [d["id"], d["title"], d["url"]];
  console.log(values);

  var sql = "INSERT INTO events (id, title, url) VALUES (?, ?, ?)";

  db.query(sql, values, function (err, result) {
    if (err) throw err;
  });
}
