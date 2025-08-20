// @ts-check

const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // your mysql username
    password: '', // your mysql password
    database: 'student_db'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to MySQL database.');
});

// GET all students
app.get('/students', (req, res) => {
    let sql = 'SELECT * FROM students';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});

// GET a single student by ID
app.get('/students/:id', (req, res) => {
    let sql = `SELECT * FROM students WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

// POST a new student
app.post('/students', (req, res) => {
    let newStudent = {name: req.body.name, course: req.body.course, year: req.body.year};
    let sql = 'INSERT INTO students SET ?';
    db.query(sql, newStudent, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

// PUT to update a student
app.put('/students/:id', (req, res) => {
    let sql = `UPDATE students SET name = '${req.body.name}', course = '${req.body.course}', year = ${req.body.year} WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

// DELETE a student
app.delete('/students/:id', (req, res) => {
    let sql = `DELETE FROM students WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send('Student deleted...');
    });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
