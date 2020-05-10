const Starship = require('../../models/Starship');
const ObjectId = require('mongoose').Types.ObjectId;

/*
 *
 */
module.exports.addStarship = async (req, res, next) => {
    var {
        name, model, starship_class,
        manufacturer, cost_in_credits, length, crew,
        passengers, max_atmosphering_speed, hyperdrive_rating, MGLT,
        cargo_capacity, consumables,
        url, originalModel
    } = req.body;

    try {
        var starshipInDB = await Starship.findOne({ originalModel });
        var starship;
    
        if (starshipInDB === null) { // Case when starship is completely new in DB
            starship = new Starship({
                name, model, starship_class, originalModel,
                manufacturer, cost_in_credits, length, crew,
                passengers, max_atmosphering_speed, hyperdrive_rating, MGLT,
                cargo_capacity, consumables, url,
            });
        }
        else {
            starship = starshipInDB;
            starship.name = name;
            starship.model = model;
            starship.starship_class = starship_class;
            starship.manufacturer = manufacturer;
            starship.cost_in_credits = cost_in_credits;
            starship.length = length;
            starship.crew = crew;
            starship.passengers = passengers;
            starship.max_atmosphering_speed = max_atmosphering_speed;
            starship.hyperdrive_rating = hyperdrive_rating;
            starship.MGLT = MGLT;
            starship.cargo_capacity = cargo_capacity;
            starship.consumables = consumables;
            starship.url = url;
        }
    
        starship.save()
            .then(value => {
                res.send({ id: starship._id.toString() });
            }).catch(err => {
                console.log(err);
                res.sendStatus(500);
            });
    }
    catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}

/*
 *
 */
module.exports.getStarshipInfo = async (req, res, next) => {
    var { starship } = req.params;

    try {
        var starshipDoc = await Starship.findOne({ _id: ObjectId(starship)});
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
module.exports.updateStarship = async (req, res, next) => {
    var {
        name, model, starship_class,
        manufacturer, cost_in_credits, length, crew,
        passengers, max_atmosphering_speed, hyperdrive_rating, MGLT,
        cargo_capacity, consumables,
        url, originalModel
    } = req.body;

    try {
        var starship = await Starship.findOne({ originalModel });
        
        starship.name = name;
        starship.model = model;
        starship.starship_class = starship_class;
        starship.manufacturer = manufacturer;
        starship.cost_in_credits = cost_in_credits;
        starship.length = length;
        starship.crew = crew;
        starship.passengers = passengers;
        starship.max_atmosphering_speed = max_atmosphering_speed;
        starship.hyperdrive_rating = hyperdrive_rating;
        starship.MGLT = MGLT;
        starship.cargo_capacity = cargo_capacity;
        starship.consumables = consumables;
        starship.url = url;
    
        starship.save()
            .then(value => {
                res.send({ id: starship._id.toString() });
            }).catch(err => {
                console.log(err);
                res.sendStatus(500);
            });
    }
    catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}

/*
 *
 */
module.exports.removeStarship = async (req, res, next) => {
    var { starship } = req.params;

    try {
        var deletionResult = await Starship.deleteOne({ _id: ObjectId(starship) });
        
        if (deletionResult.deletedCount > 0) {
            res.sendStatus(200);
        }
        else {
            res.sendStatus(204);
        }
    }
    catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
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

/*
 *
 */
module.exports.verifyModification = async (req, res, next) => {
    var { model } = req.params;
    console.log('model', model);

    try {
        var starshipDoc = await Starship.findOne({ originalModel: model });
        res.send({ id: starshipDoc && starshipDoc._id && starshipDoc._id.toString() || -1 });
    }
    catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}