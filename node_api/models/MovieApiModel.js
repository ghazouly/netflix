'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var MovieSchema = new Schema({
    name: {
        type: String,
        required: 'Kindly enter the name of the Movie'
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
    path: {
        type: String,
        required: 'Kindly enter the path of the Movie'
    }
});

module.exports = mongoose.model('Movies', MovieSchema);