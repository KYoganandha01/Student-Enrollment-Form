const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/school-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const studentSchema = new mongoose.Schema({
  rollNo: { type: String, required: true, unique: true },
  fullName: String,
  class: String,
  birthDate: String,
  address: String,
  enrollmentDate: String
});

const Student = mongoose.model('Student', studentSchema);

// Check for existing student
app.get('/student/:rollNo', async (req, res) => {
  const student = await Student.findOne({ rollNo: req.params.rollNo });
  if (!student) return res.status(404).send(null);
  res.send(student);
});

// Save new student
app.post('/student', async (req, res) => {
  try {
    const newStudent = new Student(req.body);
    await newStudent.save();
    res.send({ message: 'Student saved successfully' });
  } catch (err) {
    res.status(400).send({ error: 'Error saving student' });
  }
});

// Update student
app.put('/student/:rollNo', async (req, res) => {
  const updated = await Student.updateOne(
    { rollNo: req.params.rollNo },
    { $set: req.body }
  );
  res.send({ message: 'Student updated successfully' });
});

app.listen(3000, () => console.log('Server running on port 3000'));
