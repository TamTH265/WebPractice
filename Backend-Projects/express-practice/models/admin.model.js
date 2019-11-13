import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const Admin = mongoose.model('Admin', adminSchema, 'Admins');

module.exports = Admin;