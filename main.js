const express = require("express");

const app = express();

var users = [
    {
        name: "John",
        kidneys: [
            { healthy: false }
        ]
    }
]

app.use(express.json());

app.get("/", (req, res) => {

    const numberOfKidneys = users[0].kidneys.length;
    const numberOfHealthyKidneys = 0;
    
    for (let i = 0; i < numberOfKidneys; i++) {
        if (users[0].kidneys.healthy) {
            numberOfHealthyKidneys++;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    
    res.status(200).json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })

})

app.post("/", (req, res) => {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    }) 
    res.json({
        msg: "success"
    })
})

app.put("/", (req, res) => {
    for (let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true;
    }
    res.json({});

})
app.delete("/", (req, res) => {
    const newKidneys = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (users[0].kidneys[i].healthy) {
            newKidneys.push({
                healthy: true
            })
        }
    }
    users[0].kidneys = newKidneys;
    res.json("done");
})

app.listen(3000, () => {
    console.log(`Listing App on ${3000}`);
})