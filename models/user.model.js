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
        email: 'ibrahimalhamshari742@gmail.com',
        books: [
            { name: 'ASME Book' , description:'For mechanical engineering', status:'Available'},
            { name: 'API Book' , description:'For mechanical engineering', status:'Available'},
            { name: 'Python Book' , description:'For software engineering', status:'Available'}
        ]
    });

    console.log(newUser);

    newUser.save();
}

// seedUserData();

module.exports = {userModel , seedUserData};