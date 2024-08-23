const express = require("express");
const { fileURLToPath } = require("url");

const app = express();

app.use(express.json())

app.post("/postMe", function (req, res) {
    const name = req.body.name;
    res.send(greetPeople(name))
})

app.get("/", (req, res) => {
    res.status(200).json({
        "Message": "Got All the Data Successfully."
    })
})

// app.listen(3000, () => {
//     console.log('App is Running in 3000');
// })


function greetPeople(name) {
    return `${name} Hi Looking for me!!`
}


// Maps, Filters and Arrow Fn
const Fn = () => {
    console.log('Hello World');

}
Fn();
let array = [1, 2, 3, 4, 5];
const newArray = [];
const newArray1 = array.map((item) => {
    return item * 2;
})
for (let index = 0; index < array.length; index++) {
    newArray.push(array[index] * 2)
}
console.log(newArray);
console.log(newArray1);

const mapArray = ['Harsh', 'Akshay','Yash','Nikunj','Anuj'];
const newMapArray = mapArray.map((name) =>{ 
    return name.includes('a');
})
console.log(newMapArray);

const filterArray = array.filter((item) => {
    return item % 2 == 0
})

console.log(filterArray);

// Maps, Filters and Arrow Fn