const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json())


app.listen(3000, function () {
    console.log(`app running on ${3000}`);
})