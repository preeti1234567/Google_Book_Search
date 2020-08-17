const db = require("../models");

//Define Methods for the posts Controller

module.exports = {

    //find all
    findAll: function (req, res) {
        db.Post.find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Post.findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }

}