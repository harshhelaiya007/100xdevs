const express = require('express');
const zod = require('zod');

const app = express();

app.use(express.json());
// This above middleware called everywhere

app.use(calculateRequest);

const arraySchema = zod.array(zod.number());

function authenticationFn(req, res, next) {
    const { username, password } = req.headers;
    if (username != "harsh" || password != "123") {
        res.status(400).json({
            msg: "No accesss"
        })
        return
    }
    next();
}

function kidneyCheck(req, res, next) {
    const { kidneyId } = req.query;

    if (kidneyId != 1 && kidneyId != 2) {
        res.status(400).json({
            msg: "not a right input"
        })
        return
    }
    next();
}

let numberOfRequest = 0;
function calculateRequest(req, res, next) {
    numberOfRequest++;
    res.numberOfRequest;
    next();
}

app.get("/health-checkup", authenticationFn, kidneyCheck, function (req, res) {
    
    const kindney = req.body.kindney;
    const kindneyLength = kindney.length; 
    console.log(arraySchema.safeParse(kindney));
    if (arraySchema.safeParse(kindney).success) {
        res.json({
            msg: "Your Kindney fine as hell",
            numberOfRequest,
            kindneyLength
        })
    }
    res.status(400).json({
        error: arraySchema.safeParse(kindney).error
    })


})

app.all("*", function (req, res) {
    res.status(404).send("Not found 404")
})

app.use(function (err, req, res, next) {
    res.status(401).json({
        msg: "Not working come after sometime",
    })
})

app.listen(3000, function () {
    console.log(`${3000} is app running`);

});