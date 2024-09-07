const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('dummy');

const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
})

const User  =  mongoose.model('User', UserSchema);

module.exports = {
    User,
}