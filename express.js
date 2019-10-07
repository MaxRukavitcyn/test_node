const express = require('express');
const bodyParser = require("body-parser");
const apiController = require('./server/core/controllers/apiController');
const resourceController = require('./server/core/controllers/resourceController');
const dbApiController = require('./server/core/controllers/dbApiController');

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(express.static('resource'));
app.use(apiController);
app.use(resourceController);
app.use(dbApiController);
const http = require('http');
const server = http.Server(app);

server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
});
