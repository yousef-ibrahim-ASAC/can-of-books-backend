'use strict';

const mongoose = require('mongoose');
const booksSchema = require('./books.model');

const userSchema = new mongoose.Schema({
    email: { type: String },
    books: [booksSchema]
});

const userModel = mongoose.model('users', userSchema);

const seedUserData = () => {
    const newUser = new userModel({
        email: 'yousef.y.jalboush@gmail.com',
        books: [
            { name: 'ASME Book' , description:'For mechanical engineering', status:'Available' , url : 'https://images-na.ssl-images-amazon.com/images/I/41MPwsWY-4L._SX258_BO1,204,203,200_.jpg'},
            { name: 'API Book' , description:'For mechanical engineering', status:'Available' , url : 'https://m.media-amazon.com/images/I/51wk-MbYCNL._SL500_.jpg'},
            { name: 'Python Book' , description:'For software engineering', status:'Available' , url : 'https://images-na.ssl-images-amazon.com/images/I/517+o9DVBqL._SX387_BO1,204,203,200_.jpg'}
        ]
    });

    console.log(newUser);

    newUser.save();
}

// seedUserData();

module.exports = {userModel , seedUserData};
