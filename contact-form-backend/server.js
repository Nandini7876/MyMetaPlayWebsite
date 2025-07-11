
  const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql2");

const app = express();
const PORT = 5000;


app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "NAN@123raj",
  database: "contact_form_db"
});

db.connect((err) => {
  if (err) {
    console.error("DB connection failed:", err);
  } else {
    console.log("Connected to MySQL database");
  }
});

app.post("/api/contact", (req, res) => {
  const { firstName, lastName, email, message } = req.body;

  const sql = `INSERT INTO contacts (first_name, last_name, email, message) VALUES (?, ?, ?, ?)`;
  db.query(sql, [firstName, lastName, email, message], (err, result) => {
    if (err) {
      console.error("Insert error:", err);
      return res.status(500).send("Database error");
    }
    res.status(200).send("Form submitted successfully");
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
