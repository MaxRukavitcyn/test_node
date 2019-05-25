const express = require('express')
const app = express()
const port = 3000
app.get('/', (request, response) => {
    response.sendfile('./resource/index.html');
})
app.get('/test', (request, response) => {
    response.send({'firstName':'Max', 'lastName': 'Hand'});
})
app.get('/js/main.js', (request, response) => {
    response.sendfile('./resource/js/main.js');
})
app.get('/js/builder.js', (request, response) => {
    response.sendfile('./resource/js/builder.js');
})
app.get('/ts/builder.js', (request, response) => {
    response.sendfile('./resource/ts/builder.js');
})

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
});
