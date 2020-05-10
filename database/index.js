const mongoose = require('mongoose');

/*
 * Connect to the database
 * Returns a promise with the connection
 */
module.exports.connect = async () => {
    const dbUser = process.env.DB_USER;
    const dbPass = process.env.DB_PASS;
    const uri = `mongodb+srv://${dbUser}:${dbPass}@cluster0-ljral.mongodb.net/SWAPI?retryWrites=true&w=majority`;

    return mongoose.connect(uri, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }).then(result => {
        // console.log(result);
        console.log('✅ Connected to MongoDB.');
    }).catch(error => {
        // console.error(error);
        console.log('❌ Error connecting to MongoDB.');
    });
}