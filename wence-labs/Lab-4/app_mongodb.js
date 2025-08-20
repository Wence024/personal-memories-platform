// @ts-check

const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// MongoDB Connection
const url = 'mongodb://localhost:27017';
const dbName = 'student_db';
const client = new MongoClient(url);

let db;

client.connect().then(client => {
    console.log('Connected to MongoDB');
    db = client.db(dbName);
}).catch(err => console.error(err));


// GET all students
app.get('/students', async (req, res) => {
    try {
        const students = await db.collection('students').find().toArray();
        res.json(students);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET a single student by ID
app.get('/students/:id', async (req, res) => {
    try {
        const student = await db.collection('students').findOne({ _id: new ObjectId(req.params.id) });
        res.json(student);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST a new student
app.post('/students', async (req, res) => {
    const student = {
        name: req.body.name,
        course: req.body.course,
        year: req.body.year
    };

    try {
        const newStudent = await db.collection('students').insertOne(student);
        res.status(201).json(newStudent);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// PUT to update a student
app.put('/students/:id', async (req, res) => {
    try {
        const updatedStudent = await db.collection('students').updateOne(
            { _id: new ObjectId(req.params.id) },
            { $set: { name: req.body.name, course: req.body.course, year: req.body.year } }
        );
        res.json(updatedStudent);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE a student
app.delete('/students/:id', async (req, res) => {
    try {
        await db.collection('students').deleteOne({ _id: new ObjectId(req.params.id) });
        res.json({ message: 'Student deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


const port = 3001;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});