const express = require('express'); // require the express package
const app = express(); // initialize your express app instance
const mongoose = require('mongoose');
require('dotenv').config();
const PORT = process.env.PORT;
// const seedUserData = require('./models/user.model');
const cors = require('cors'); // enable the communication between the frontend and the backend
// const booksSchema = require('./models/books.model');


app.use(cors());


mongoose.connect('mongodb://localhost:27017/myFavoriteBooks',
{ useNewUrlParser: true, useUnifiedTopology: true }
);


const getBooks = require('./controller/books.controller');


app.get('/', (req, res) => {
    res.send('Your API Server is running now');
});

app.get('/books', getBooks );

// const userSchema = new mongoose.Schema({
//     email: { type: String },
//     books: [booksSchema]
// });

// const userModel = mongoose.model('users', userSchema);

// const seedUserData = () => {
//     const newUser = new userModel({
//         email: 'ibrahimalhamshari742@gmail.com',
//         books: [
//             { name: 'ASME Book' , description:' For mechanical engineering', status:'Available'},
//             { name: 'API Book' , description:' For mechanical engineering', status:'Available'},
//             { name: 'Python Book' , description:' For software engineering', status:'Available'}
//         ]

//     });

//     newUser.save();
// }

// seedUserData();

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});

