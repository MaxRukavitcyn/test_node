const { Client } = require('pg');

const client = new Client({
	connectionString: process.env.DATABASE_URL,
	ssl: process.env.IS_REMOTE,
});
client.connect();
module.exports.client = client;
