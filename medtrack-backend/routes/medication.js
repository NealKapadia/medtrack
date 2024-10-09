const express = require('express');
const Medication = require('./models/Medication');
const router = express.Router();

// Add Medication
router.post('/add', async (req, res) => {
  const { userId, name, dosage, reminder } = req.body;
  try {
    const newMedication = new Medication({ userId, name, dosage, reminder });
    await newMedication.save();
    res.json(newMedication);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;
