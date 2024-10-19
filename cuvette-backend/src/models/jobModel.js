const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  experienceLevel: { type: String, required: true },
  endDate: { type: Date, required: true },
  user_id: {  type:Number,ref: 'User' },
});

const jobModule = mongoose.model('Job', jobSchema);
module.exports = { jobModule };