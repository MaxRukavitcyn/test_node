const express = require('express');
const cors = require('cors');
const DB = require('../data/dataBaseTemp');
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
paths.get('/tree', cors(corsOptions), (request, response) => {
	response.send(DB.db[request.query.key]);
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
paths.post('/test/post', cors(corsOptions), (request, response) => {
	let body = JSON.parse(request.body);
	console.log(body);
	DB.db.usersStorage = body;
	response.send('data is received');
});
paths.get('/users', cors(corsOptions), (request, response) => {
	response.send(DB.db.usersStorage);
});
paths.get('/action/list', cors(corsOptions), (req, res)=>{
	res.send(actionList);
});
paths.post('/delete/act', cors(corsOptions), (req, res)=>{
	actionList.splice(actionList.map(a=>a.id).indexOf(parseInt(req.body)),1);
	console.log(req.body);
	res.send('delete');
});
paths.get('/links', cors(corsOptions), (req, res)=>{
	res.send(DB.db.links[req.query.name]);
});


module.exports = paths;
