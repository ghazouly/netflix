'use strict';
module.exports = function(app) {
    var Movies = require('../controllers/MovieApiController');

    // todoList Routes
    app.route('/movies')
        .get(Movies.list_all_movies);
};
