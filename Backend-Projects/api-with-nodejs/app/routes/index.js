const noteRoutes = require('./note-routes');

module.exports = (app, db) => {
  noteRoutes(app, db);
}