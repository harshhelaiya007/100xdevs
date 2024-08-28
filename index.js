// const jwt = require("jsonwebtoken");

// const value = {
//     fullName: "Harsh Helaiya",
//     accountNumber: 52515251
// }

// const jwtToken = jwt.sign(value, '123');
// console.log(jwtToken);

// // OUTPUT
// const output = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmdWxsTmFtZSI6IkhhcnNoIEhlbGFpeWEiLCJhY2NvdW50TnVtYmVyIjo1MjUxNTI1MSwiaWF0IjoxNzI0Nzc1OTA5fQ.j3YcIA7EejjQmr1rPCSc5FDlPw__HBWv7LDTL3FuTRo"


// const jwtDecode = jwt.decode(output,'1234');
// console.log(jwtDecode);

// let a;
// try {
//     console.log(a.length);
//     console.log('sdkfasfd');
// } catch (error) {
//     console.log(error);
//     console.log('hi rhere');    
// }

const express = require("express");
const app = express();

function idOldEnough(age) {
    if (age >= 14) {
        return true;
    } else {
        return false;
    }
}

function isOldEnoughMiddleware(req, res, next) {
    let isAge = req.query.age;

    if (isAge >= 14) {
        next();
    } else {
        res.status(411).json({
            msg: "Sorry your age is below 14! Only 14+ age allowed"
        })
    }
}

function isTicketMiddleware(req, res, next) {
    let ticket = req.query.ticket;

    if (ticket.toLowerCase() == "free") {
        next();
    } else {
        res.status(411).json({
            msg: "Access Denied!"
        })
    }

}

app.use(isOldEnoughMiddleware, isTicketMiddleware);

app.get("/ride1", isOldEnoughMiddleware, function (req, res) {
    res.status(200).json({
        msg: "You rode first ride!"
    })
})

app.listen(3000);