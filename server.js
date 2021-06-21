const express = require('express'); // require the express package
const app = express(); // initialize your express app instance
const mongoose = require('mongoose');
require('dotenv').config();
const PORT = process.env.PORT;
const seedUserData = require('./models/user.model');
const cors = require('cors'); // enable the communication between the frontend and the backend
const seedUserData = require('./')

app.use(cors());


mongoose.connect('mongodb://localhost:27017/myFavoriteCats',
{ useNewUrlParser: true, useUnifiedTopology: true }
);


const getBooks = require('./controller/books.controller');


app.get('/', (req, res) => {
    res.send('Your API Server is running now');
});

app.get('/books', getBooks )

seedUserData();

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});

