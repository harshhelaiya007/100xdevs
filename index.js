const express = require('express')
const fs = require('fs');
const app = express()
const port = 3000

app.use(express.json())

let todoArray = [];

app.post('/create', (req, res) => {
    
    let createTodo = {
        "ID": Math.floor(Math.random() * 1000),
        "Task": req.body.task
    }
    todoArray.push(createTodo);

    fs.writeFile('todo.json', JSON.stringify(todoArray), (err) => {
        if (err) {
            console.error(err);
        } else {
            return
        }
    })
    res.status(200).send("Successfully Task Created")
})

app.get('/', (req, res) => {
    
    fs.readFile("todo.json", 'utf-8', function(error, data) {
        if (error) {
            console.error(error);
        } else {
            res.status(200).send(JSON.parse(data))
        }
    })

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})