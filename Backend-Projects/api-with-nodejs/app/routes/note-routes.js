const ObjectID = require('mongodb').ObjectID;

module.exports = (app, db) => {
  app.get('/notes/:id', (req, res) => {
    const { id } = req.params;
    const details = { '_id': new ObjectID(id) };
    db.collection('notes').findOne(details, (err, item) => {
      if (err) {
        res.send({ 'err': 'err has occured' });
      } else {
        res.send(item);
      }
    });
  });

  app.delete('/notes/:id', (req, res) => {
    const { id } = req.params;
    const details = { '_id': new ObjectID(id) };
    db.collection('notes').deleteOne(details, (err, item) => {
      if (err) {
        res.send({ 'err': 'err has occured' });
      } else {
        res.send('Deleted Successfully!');
      }
    });
  });

  app.put('/notes/:id', (req, res) => {
    const { id } = req.params;
    const details = { '_id': new ObjectID(id) };
    const note = { text: req.body.body, title: req.body.title };
    db.collection('notes').update(details, note, (err, item) => {
      if (err) {
        res.send({ 'err': 'err has occured' });
      } else {
        res.send('Updated information Successfully!');
      }
    });
  });

  app.post('/notes', (req, res) => {
    const note = { text: req.body.body, title: req.body.title };
    db.collection('notes').insertOne(note, (err, result) => {
      if (err) {
        res.send({ 'err': 'err has occured' });
      } else {
        res.send(result.ops[0]);
      }
    });
  });
};
