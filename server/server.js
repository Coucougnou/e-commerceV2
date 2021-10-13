const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express()

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

// GET - Retrieve data from the server
app.get('/', (req, res) => {
    res.json("Hello Amazon Clone")
});

// POST - Send data from front end to backend
app.post('/', (req, res) => {
    console.log(req.body.name);
});

app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Listening on port 3000");
    }
});