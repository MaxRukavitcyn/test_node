const express = require('express');
const bodyParser = require("body-parser");
const apiController = require('./controllers/apiController');
const resourceController = require('./controllers/resourceController');

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(apiController);
app.use(resourceController);
// app.use(express.static('../resource'));
app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
});
