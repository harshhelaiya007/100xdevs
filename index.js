const express = require("express");

const app = express();

app.use(express.json())

app.post("/postMe", function(req, res) {
    const name = req.body.name;
    res.send(greetPeople(name))
})

app.get("/", (req, res) => {
    res.status(200).json({
        "Message": "Got All the Data Successfully."
    })
})

app.listen(3000, () => {
    console.log('App is Running in 3000');
})


function greetPeople(name) {
    return `${name} Hi Looking for me!!`
}