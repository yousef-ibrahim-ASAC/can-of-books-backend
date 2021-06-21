const express = require('express'); // require the express package
const app = express(); // initialize your express app instance
const mongoose = require('mongoose');
require('dotenv').config();
const PORT = process.env.PORT;
const cors = require('cors'); // enable the communication between the frontend and the backend
app.use(cors());

app.get('/', (req, res) => {
    res.send('Your API Server is running now');
});

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});
