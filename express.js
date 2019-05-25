const express = require('express')
const app = express()
const port = 3000
app.get('/', (request, response) => {
    response.sendfile('index.html');
})
app.get('/test', (request, response) => {
    response.send({'firstName':'Max', 'lastName': 'Hand'});
})
app.get('/main.js', (request, response) => {
    response.sendfile('main.js');
})
app.get('/js/builder.js', (request, response) => {
    response.sendfile('./js/builder.js');
})

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
});
