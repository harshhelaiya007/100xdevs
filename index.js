const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://harshhelaiya5:LkllKsfKg9Nddrdz@cluster0.cngehgz.mongodb.net/userappnew');

const User = mongoose.model("User", {
    name: String,
    username: String,
    password: String,
    token: String,
})

const app = express();

app.use(express.json());

app.use(cors());

const ALL_USERS = [
    {
        username: "harkirat@gmail.com",
        password: "123",
        name: "harkirat singh",
    },
    {
        username: "raman@gmail.com",
        password: "123321",
        name: "Raman singh",
    },
    {
        username: "priya@gmail.com",
        password: "123321",
        name: "Priya kumari",
    },
    {
        username: "harshhelaiya5@gmail.com",
        password: "Harsh@007",
        name: "Harsh Helaiya",
    },
];

function userExists(username, password) {
    // write logic to return true or false if this user exists
    // in ALL_USERS array

    let userExist = false;
    ALL_USERS.forEach(function (user) {
        if (user.username == username && user.password == password) {
            userExist = true;
        }
    })
    return userExist;
}

app.post("/signin", function (req, res) {
    const { name, username, password } = req.body;

    if (!userExists(username, password)) {
        return res.status(403).json({
            msg: "User doesnt exist in our in memory db",
        });
    }

    var token = jwt.sign({ username: username }, jwtPassword);
    const user = new User({
        name: name,
        username: username,
        password: password,
        token: token
    })
    user.save().then(function () {
        return res.json({
            token,
            msg: "User Created Successfully"
        });
    })
});

app.get("/users", function (req, res) {
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;
        res.status(200).json({
            username
        })
        // return a list of users other than this username
    } catch (err) {
        return res.status(403).json({
            msg: "Invalid token",
        });
    }
});

app.listen(3000)