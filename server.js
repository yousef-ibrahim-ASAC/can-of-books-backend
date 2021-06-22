// frameworks are code that executes or runs your own code
// libraries are code that gets executed by your own code

const express = require('express'); // require the express package
const app = express(); // initialize your express app instance
const mongoose = require('mongoose');
require('dotenv').config();
const PORT = process.env.PORT;
const {getBooks, creatBook , updateBook, deleteBook} = require('./controller/books.controller');
// const {seedUserData} = require('./models/user.model');
const cors = require('cors'); // enable the communication between the frontend and the backend

app.use(cors());

// middleware : will check the data before it go to the route
app.use(express.json());  // this method is used to decode our request body sent by the post or put methods

mongoose.connect('mongodb://localhost:27017/myFavoriteBooks',
{ useNewUrlParser: true, useUnifiedTopology: true }
);


app.get('/', (req, res) => {
    res.send('Your API Server is running now');
});


// seedUserData();
// (REST or HTTP METHODS )={get , post , put , delete}
app.get('/books', getBooks );  // Read route, get all the books by the user email

app.post('/book' , creatBook);  // Create route, which will receive new books to be added for the user

app.put('/book/:book_idx' , updateBook);  // Update route, will will receive the book id that we want to update, and its info in the body payload.

app.delete('/book/:book_idx' , deleteBook);  // Delete route, which will delete the book by its index



app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});

