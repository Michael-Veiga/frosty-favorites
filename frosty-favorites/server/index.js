const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

require('dotenv').config();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

app.post('/create', (req, res) => {
  const name = req.body.name;
  const mountain = req.body.mountain;
  const stars = req.body.stars;
  const date = req.body.date;
  const review = req.body.review;

  db.query(
    'INSERT INTO reviews (name, mountain, stars, date, review) VALUES(?,?,?,?,?)',
    [name, mountain, stars, date, review],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send('Values Inserted');
      }
    }
  );
});

app.get('/review', (req, res) => {
  db.query('SELECT * FROM reviews', (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log('Your server is running on port 3001');
});
