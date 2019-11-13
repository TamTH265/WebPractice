import express from 'express';

import CustomerModel from '../models/customer.model';

const Router = express.Router();

// Create a new customer
Router.post('/create', (req, res) => {
  const promise = CustomerModel.create(req.body);

  promise.then((newCustomer) => {
    if (!newCustomer) {
      return res.sendStatus(400);
    }
    console.log(`${newCustomer.name} is created successfully!`);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end();
    return true;
  });
});

// Get information of a customer
Router.get('/detail', (req, res) => {
  const { name } = req.query;
  CustomerModel.findOne({ name }, (err, customer) => {
    if (!customer) {
      return res.sendStatus(400);
    }
    const { email } = customer;
    res.send({ name, email });
    return true;
  });
});

module.exports = Router;
