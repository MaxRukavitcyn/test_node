const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());

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
let actionList = [];
let id = 0;
app.post('/add/action',(request, response) => {
  let body = JSON.parse(request.body);
  body['id'] = id++;
  actionList.push(body);
  console.log(body);
  response.send('good')
})
app.get('/action/list', (req, res)=>{
    res.send(actionList);
})
app.delete('/delete/act', (req, res)=>{
    actionList.splice(actionList.map(a=>a.id).indexOf(parseInt(req.body)),1);
    console.log(req.body);
    res.send('delete');
})

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
});
