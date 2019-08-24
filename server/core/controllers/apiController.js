const express = require('express');
const cors = require('cors');
const paths = express();

let corsOptions = {
	origins: ['http://localhost:8080', 'http://localhost'],
	optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

paths.get('/test/router', cors(corsOptions), function (req, res) {
	res.send('router is working');
});
paths.get('/test', cors(corsOptions), (request, response) => {
	response.send({'firstName':'Max', 'lastName': 'Hand'});
});
let actionList = [];
let id = 0;
paths.post('/add/action', cors(corsOptions), (request, response) => {
	let body = JSON.parse(request.body);
	body['id'] = id++;
	actionList.push(body);
	console.log(body);
	response.send(actionList)
});
paths.get('/action/list', cors(corsOptions), (req, res)=>{
	res.send(actionList);
});
paths.post('/delete/act', cors(corsOptions), (req, res)=>{
	actionList.splice(actionList.map(a=>a.id).indexOf(parseInt(req.body)),1);
	console.log(req.body);
	res.send('delete');
});


module.exports = paths;
