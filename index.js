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

app.get('/', (req, res) => {
    res.json(dialogue);
    console.log(dialogue);
});

app.get('/abc', (req, res) => {
    res.json(quest);
    console.log(quest);
});

// app.use(
//     cors({
//     origin: function (origin, callback) {
//         if (!origin || allowedOrigins.includes(origin)) {
//             callback(null, true);
//         } else {
//             callback(new Error('Not allowed by CORS'));
//         }
//     }
// }));





const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});