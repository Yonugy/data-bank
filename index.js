const express = require('express');
const app = express();
const {dialogue} = require("./codyssey/dialogue")

const allowedOrigins = [
    "http://127.0.0.1:5500"
]

app.get('/', (req, res) => {
    res.json(dialogue);
    console.log(dialogue);
});

app.use(
    cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
}));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});