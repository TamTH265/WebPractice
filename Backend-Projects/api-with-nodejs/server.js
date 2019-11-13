const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const assert = require('assert');

const db = require('./config/db');
const mainConnect = require('./app/routes/index');

const app = express();
const port = 3300;

const dbName = 'Notable';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

MongoClient.connect(db.url, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}, (err, client) => {
  if (err) {
    return new Error(err);
  }
  assert.equal(null, err);
  const db = client.db(dbName);
  mainConnect(app, db);
  app.listen(port, () => console.log(`Server is listening on port ${port}!`));
})
