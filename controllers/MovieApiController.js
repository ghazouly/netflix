'use strict';

var Movies = { "data" : {
                        "1": {
                            "_id": "1",
                            "name": "Interstellar",
                            "path": "films_interstellar.mp4",
                            "rate": 5
                        },
                        "2": {
                            "_id": "2",
                            "name": "Interstellar",
                            "path": "films_interstellar.mp4",
                            "rate": 5
                        },
                        "3": {
                            "_id": "3",
                            "name": "Interstellar",
                            "path": "films_interstellar.mp4",
                            "rate": 5
                        }
                    },
                "msg" : "",
                "code"  : 200
};

exports.list_all_movies = function(req, res) {
    res.json(Movies);
};