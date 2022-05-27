

// Require Libraries
const express = require('express');

// App Setup
const app = express();

// Middleware
const { engine }  = require('express-handlebars');

app.engine('handlebars', engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// ROUTES
app.get('/', (req, res) => {
    res.render('home')
})

// Start Server

app.listen(3000, () => {
  console.log('Gif Search listening on port localhost:3000!');
});