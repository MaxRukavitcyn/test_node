// const pdb = require("../db/connect");
const {client} = require("../db/db.deploy.connect");
const express = require('express');
const cors = require('cors');

const paths = express();

let corsOptions = {
	origins: ['http://localhost:8080', 'http://localhost'],
	optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
paths.get('/db/test', cors(corsOptions), (request, response) => {
	client.query('select * from test_table').then(data=>{
		response.send(data)
	});
});
paths.post('/db/test/post', cors(corsOptions), (request, response) =>{
	let body = request.body;
	client.query('insert into test_table(first_name, last_name) values ($1, $2) returning id, first_name, last_name', [body.firstName, body.lastName]).then(data=>{
		response.send(data);
	});
});
paths.get('/db/equations', cors(corsOptions), (request, response) =>{
	client.any('select * from equations').then(data => {
		response.send(data);
	})
});

module.exports = paths;
