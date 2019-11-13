// import express from 'express';
//
// const Router = express.Router();
//
// Router.get('/person', (req, res) => {
//   if (req.query.name) {
//     res.send(`You have requested a person ${req.query.name}`);
//   } else {
//     res.send('You have requested a person, my name is Tam!');
//   }
// });
//
// Router.get('/person/:name', (req, res) => {
//   res.send(`You have requested a person ${req.params.name}`);
// });
//
// Router.get('/error', (req, res) => {
//   throw new Error('This is a forced error!');
// })
//
// module.exports = Router;
