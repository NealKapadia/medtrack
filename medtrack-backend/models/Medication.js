const mongoose = require('mongoose');

const MedicationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  name: { type: String, required: true },
  dosage: { type: String, required: true },
  reminder: { type: Date },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Medication', MedicationSchema);
