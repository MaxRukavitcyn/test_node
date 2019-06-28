const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const apiController = require('./controllers/apiController');
const resourceController = require('./controllers/resourceController');

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(apiController);
app.use(resourceController);

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
});