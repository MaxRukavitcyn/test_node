const express = require('express');
const paths = express();

paths.get('/test/router', function (req, res) {
	res.send('router is working');
});
paths.get('/test', (request, response) => {
	response.send({'firstName':'Max', 'lastName': 'Hand'});
});
let actionList = [];
let id = 0;
paths.post('/add/action',(request, response) => {
	let body = JSON.parse(request.body);
	body['id'] = id++;
	actionList.push(body);
	console.log(body);
	response.send(actionList)
});
paths.get('/action/list', (req, res)=>{
	res.send(actionList);
});
paths.delete('/delete/act', (req, res)=>{
	actionList.splice(actionList.map(a=>a.id).indexOf(parseInt(req.body)),1);
	console.log(req.body);
	res.send('delete');
});


module.exports = paths;
