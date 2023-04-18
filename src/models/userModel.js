const  mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: String,
    name: String,
    city: String
});

const user = mongoose.model('User', userSchema);

module.exports = user;