const express = require('express');
const app = express();
const {dialogue} = require("./codyssey/dialogue")
const {quest} = require("./codyssey/quest")


const allowedOrigins = [
    "http://127.0.0.1:5500"
]

const cors = require('cors');

const corsOptions = {
    origin: 'http://127.0.0.1:5500', // Replace with your frontend URL
    methods: 'GET,POST', // Allowed HTTP methods
};

app.use(cors(corsOptions));

app.get('/dialogue', (req, res) => {
    res.json(dialogue);
    console.log(dialogue);
});

app.get('/quest', (req, res) => {
    res.json(quest);
    console.log(quest);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
}););