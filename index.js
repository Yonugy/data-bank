const express = require('express');
const app = express();
const {dialogue} = require("./codyssey/dialogue")

app.get('/', (req, res) => {
    res.json(dialogue);
    console.log(dialogue);
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
