'use strict';

const mongoose = require('mongoose');

const booksSchema = new mongoose.Schema({
    name: { type: String },
    description: { type: String },
    status: { type: String },
    url: { type: String }
});

module.exports = booksSchema;
