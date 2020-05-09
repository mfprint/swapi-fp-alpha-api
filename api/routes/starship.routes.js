const Starship = require('../../models/Starship');
const ObjectId = require('mongoose').Types.ObjectId;

/*
 *
 */
module.exports.addStarship = async (req, res, next) => {

}

/*
 *
 */
module.exports.getStarshipInfo = async (req, res, next) => {
    var { starship } = req.params;

    try {
        var starshipDoc = await Starship.find({ _id: ObjectId(starship)})
        res.send(starshipDoc);
    }
    catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}

/*
 *
 */
module.exports.updateStarship = (req, res, next) => {

}

/*
 *
 */
module.exports.removeStarship = (req, res, next) => {

}

/*
 *
 */
module.exports.getStarshipsList = async (req, res, next) => {
    try {
        var starshipDocs = await Starship.find({});
        res.send(starshipDocs);
    }
    catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}