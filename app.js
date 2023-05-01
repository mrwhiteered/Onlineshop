const sqlite3 = require('sqlite3').verbose();

// create a new database file
const db = new sqlite3.Database('mydatabase.db');

// create a new table
db.run('CREATE TABLE users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT)');

// insert some data
db.run('INSERT INTO users (name, email) VALUES (?, ?)', ['John Doe', 'john@example.com']);
db.run('INSERT INTO users (name, email) VALUES (?, ?)', ['Jane Doe', 'jane@example.com']);

// query the data
db.all('SELECT * FROM users', (err, rows) => {
  if (err) {
    console.error(err);
  } else {
    console.log(rows);
  }
});

// close the database connection
db.close();