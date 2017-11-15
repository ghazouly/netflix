'use strict';

var mongoose = require('mongoose'),
    Movies = mongoose.model('Movies');

exports.list_all_movies = function(req, res) {
    Movies.find({}, function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};
