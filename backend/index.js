const express = require('express');
const app = express();
const { todoSchema, updateTodoSchema } = require('./types');
const { todo } = require('./db');
const cors = require('cors')


app.use(express.json());
app.use(cors());


app.post('/addTask', async (req, res) => {

    const payload = req.body;
    const validatedPayload = todoSchema.safeParse(payload)

    if (!validatedPayload.success) {
        res.status(411).json({
            msg: "You sent wrong inputs"
        })
        return;
    }
    // Put data into mongodb
    await todo.create({
        title: payload.title,
        description: payload.description,
        completed: false
    })
    res.status(200).json({
        msg: "Succcess"
    })

})

app.put('/completed', async (req, res) => {

    const updatedPayload = req.body;
    const validatedPayload = updateTodoSchema.safeParse(updatedPayload)
    if (!validatedPayload.success) {
        res.status(411).json({
            msg: "You sent wrong inputs"
        })
        return;
    }
    
    await todo.updateOne({
        _id: req.body.id
    }, {
        completed: true
    })
    res.json({
        msg: "Task has been updated"
    })

})

app.get('/task', async (req, res) => {

    const response = await todo.find({});
    res.status(200).json({
        data: response
    })
})

app.listen(3000, () => {
    console.log(`app is running on ${3000}`);
})