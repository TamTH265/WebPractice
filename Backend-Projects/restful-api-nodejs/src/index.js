import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import path from 'path';

// import customerRouter from './routes/customer.route';

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3300;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));


mongoose.connect(`mongodb://localhost/MongoPractice`,
  { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected successfully!'))
  .catch((err) => console.log(err));

// app.use('/customer', customerRouter);

app.listen(port, () => console.log(`Server is listening on port ${port}!`));
