'use strict';


const { userModel } = require('../models/user.model');

const getBooks = (request, response) => {

    const { email } = request.query;
    userModel.find({ email }, (error, user) => {
        if (error) {
            response.send(error)
        } else {
            response.json(user)
        }
    });
}

const creatBook = (request, response) => {
    // we need to get the email of the person and the name of the book, to add to that person
    const { email, bookName , description , status , url } = request.body;  // the email and the name will saved from the request.

    userModel.findOne({ email: email }, (error, userData) => {  // will chek if the email found or not.
        if (error) {
            response.send(error);
        } else {
            // here we are going to add the new cat
            console.log(userData.books);
            userData.books.push({ 
                name: bookName,
                description, 
                status,
                url
            });
            userData.save();
            response.json(userData);
        }
    })
}


const updateBook = (request, response) => {
    const index = request.params.book_idx;
    // const {email} = request.query;
    const { email , bookName , description , status , url } = request.body;

    console.log(request.query);
    userModel.findOne({ email: email }, (error, userData) => {
        if (error) {
            response.send(error);
        } else {
            userData.books.splice(index, 1, { 
                name: bookName ,
                description, 
                status,
                url
            });
            userData.save();
            response.send(userData);
        }
    });
}

const deleteBook = (request, response) => {
    const index = request.params.book_idx;
    const { email }  = request.query;
    // console.log(request.query);

    userModel.findOne({ email: email }, (error, userData) => {

        if (error) {
            response.send(error);
        } else {      
            userData.books.splice(index, 1);
            userData.save();
            response.send(userData);
        }
    });
}


module.exports = { getBooks, creatBook, updateBook, deleteBook };
