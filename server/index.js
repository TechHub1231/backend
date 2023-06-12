// Third Party Dependencies.
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');


// Local Dependencies.
const app = express();

// Middlewares.
app.use(express.json())
app.use(cors( 
    {origin: "*"}
));
app.use(morgan('dev'));
app.use(bodyParser.json());

app.get("/api", (req, res) => {
    res.send("Hello World");
});

// Routes.
app.use('/api', require('./routes'));


module.exports = {
    app
};
