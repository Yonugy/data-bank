const express = require('express');
const app = express();
const {dialogue} = require("./codyssey/dialogue")

app.get('/', (req, res) => {
    res.json(dialogue);
    console.log(dialogue);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
