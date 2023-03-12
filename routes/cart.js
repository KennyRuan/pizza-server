// Import required modules
const express = require('express');
const bodyParser = require('body-parser');

// Create an instance of the Express app
const app = express();

// Configure middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Define a shopping cart object to store items
const shoppingCart = [];

// Define a route to handle the POST request from the first Jade file
app.post('/menu', (req, res) => {
  // Extract the details of the item from the request body
  const { name, price, ingredients } = req.body;

  // Add the item to the shopping cart object
  shoppingCart.push({ name, price, ingredients });

  // Redirect the user back to the first Jade file
  res.redirect('/');
});

// Define a route to render the second Jade file with the shopping cart contents
app.get('/order', (req, res) => {
  // Render the second Jade file with the shopping cart contents
  res.render('order.jade', { items: shoppingCart });
});

// Start the server listening on a port
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
