const express = require('express');
const app = express();
const {dialogue} = require("./codyssey/dialogue")
const {quest} = require("./codyssey/quest")
const {door} = require("./codyssey/door")
const {indoor} = require("./codyssey/indoor")
const {npc} = require("./codyssey/npc")


const cors = require('cors');

const corsOptions = {
    origin: ["http://127.0.0.1:5500", "https://the-codyssey.vercel.app"], // Replace with your frontend URL
    methods: 'GET,POST', // Allowed HTTP methods
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.json(dialogue);
    console.log(dialogue);
});

app.get('/quest', (req, res) => {
    res.json(quest);
    console.log(quest);
});

app.get('/door', (req, res) => {
    res.json(door);
    console.log(door);
});

app.get('/indoor', (req, res) => {
    res.json(indoor);
    console.log(indoor);
});

app.get('/npc', (req, res) => {
    res.json(npc);
    console.log(npc);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});