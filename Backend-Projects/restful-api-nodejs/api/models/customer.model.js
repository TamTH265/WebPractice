import mongoose from 'mongoose';

require('dotenv').config();

mongoose.connect(process.env.DB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(() => console.log('Connected successfully!'))
  .catch((err) => console.log(err));

const CustomerSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    require: true,
    unique: true,
  },
}, {
  versionKey: false,
});

const CustomerModel = mongoose.model('Customer', CustomerSchema, 'Customer');

module.exports = CustomerModel;
