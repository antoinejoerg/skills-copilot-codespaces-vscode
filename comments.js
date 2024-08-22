//Create web server
const express = require('express');
const app = express();

//Create a router
const router = express.Router();

// Create a route
router.get('/comments', (req, res) => {
  res.send('Comments');
});

// Create a subrouter
const subrouter = express.Router();
subrouter.get('/new', (req, res) => {
  res.send('New comment');
});

// Use the subrouter
router.use('/comments', subrouter);

// Use the router
app.use(router);

// Start the server
app.listen(3000, () => {
  console.log('Server started');
});