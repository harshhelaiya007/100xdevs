const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://harshhelaiya5:LkllKsfKg9Nddrdz@cluster0.cngehgz.mongodb.net/todo');

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}