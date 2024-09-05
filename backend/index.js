const express = require('express');
const app = express();

app.use(express.json());


app.post('/addTask', (req, res) => {
    

})

app.put('/completed', (req, res) => {

    
})

app.get('/tasklist', (req, res) => {
    

})

app.listen(3000, () => {
    console.log(`app is running on ${3000}`);
})