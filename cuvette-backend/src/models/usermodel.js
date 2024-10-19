// backend/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone_no:{ type: Number, required: true },
  company_name:{ type: String, required: true },
  company_email: { type: String, required: true},
  employee_size:{ type: String, required: true },
  isVerified: { type: Boolean, default: false },
  verificationToken: { type: String },
});

 const userModule= mongoose.model('User ', userSchema);
 module.exports={
  userModule
 }