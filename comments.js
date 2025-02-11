// Create web server

// Import the express library
const express = require('express');

// Create an express application
const app = express();

// Import the body-parser library
const bodyParser = require('body-parser');

// Tell the express application to use body-parser
app.use(bodyParser.json());

// Create an array of comments
const comments = [
  { username: 'alice', comment: 'I love your blog!', timestamp: new Date() },
  { username: 'bob', comment: 'Good post', timestamp: new Date() }
];

// Create a route for GET /comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Create a route for POST /comments
app.post('/comments', (req, res) => {
  const newComment = {
    username: req.body.username,
    comment: req.body.comment,
    timestamp: new Date()
  };

  comments.push(newComment);

  res.json(newComment);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// End of comments.js
