const {client} = require("../db/connect");
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
	client.query('select * from equations order by id desc').then(data => {
		let res = data;
		if(!Array.isArray(res)) res = data.rows;
		response.send(res);
	}).catch(e => console.log(e));
});
paths.get('/db/settings', cors(corsOptions), (request, response) =>{
	response.send(process.env.DATABASE_URL)
});
paths.post('/db/add/equation', cors(corsOptions), (request, response) => {
	let body = JSON.parse(request.body);
	client.query('insert into equations (equations) values ($1) returning id', [body.equations]).then(d=>{
		response.send(d);
	}).catch(e => console.log(e));
});
paths.post('/db/delete/equations', cors(corsOptions), (request, response) => {
	let ids = JSON.parse(request.body);
	client.query(`delete from equations where id in(${ids})`);
	response.send('deleted');
});

paths.post('/db/add/snake_user', cors(corsOptions), (request, response) => {
	let user = JSON.parse(request.body);
	client.query(`insert into snake_users (name, scores) values ($1, $2) returning id`, [user.name, user.scores]).then(data => {
		response.send(data);
	});

});

module.exports = paths;
