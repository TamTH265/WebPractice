import express from 'express';
import path from 'path';
import mongoose from 'mongoose';

import AdminRouter from '../routes/admin.route';

const app = express();
const port = 3300;

mongoose.connect('mongodb://localhost/MongoPractice',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

const db = mongoose.connection;

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '..', 'views'));

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req, res) => res.render('index'));

app.use('/admin', AdminRouter);

app.listen(port, () => console.log(`Server is listening on port ${port}!`));