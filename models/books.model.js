'use strict';

const mongoose = require('mongoose');

const booksSchema = new mongoose.Schema({
    name: { type: String }
});

module.exports = booksSchema;