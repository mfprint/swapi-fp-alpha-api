const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StarshipSchema = new Schema({
    id: Schema.ObjectId,
    name: String,
    model: String,
    originalModel: String,
    starship_class: String,
    manufacturer: String,
    cost_in_credits: String,
    length: String,
    crew: String,
    passengers: String,
    max_atmosphering_speed: String,
    hyperdrive_rating: String,
    MGLT: String,
    cargo_capacity: String,
    consumables: String,
    url: String,
});

const Starship = mongoose.model('Starship', StarshipSchema);

module.exports = Starship;