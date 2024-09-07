const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://harshhelaiya5:LkllKsfKg9Nddrdz@cluster0.cngehgz.mongodb.net/curd');

const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
})

const User  =  mongoose.model('User', UserSchema);

module.exports = {
    User,
}