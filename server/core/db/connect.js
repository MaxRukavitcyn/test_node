const promise = require('bluebird'); // or any other Promise/A+ compatible library;

const initOptions = {
	promiseLib: promise // overriding the default (ES6 Promise);
};
let pgp = require('pg-promise')(initOptions);
let cn = {
	host: 'localhost',
	port: 5432,
	database: 'node_test',
	user: 'postgres',
	password: 4061990
};
// let cn = 'postgres://postgres:4061990@localhost:5432/node_test';
module.exports.client = pgp(cn);
