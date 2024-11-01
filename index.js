const express = require('express');
var exphbs = require('express-handlebars');
const path = require('path');

const app = express();
const port = 3000;

// Setup express-handlebars
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');


// Use the routes
app.use('/', require(path.join(__dirname, 'routes/blog.js')));

app.listen(port, () => {
    console.log(`started at http://localhost:${port}`);
});
