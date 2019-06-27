const express = require('express');
const paths = express();

paths.get('/', (request, response) => {
	response.sendfile('./resource/index.html');
});
paths.get('/js/main.js', (request, response) => {
	response.sendfile('./resource/js/main.js');
});
paths.get('/js/hui.js', (request, response) => {
	response.sendfile('./resource/js/hui.js');
});
paths.get('/js/builder.js', (request, response) => {
	response.sendfile('./resource/js/builder.js');
});
paths.get('/ts/builder.js', (request, response) => {
	response.sendfile('./resource/ts/builder.js');
});
paths.get('/js/lib/vue.js', (request, response) => {
	response.sendfile('./resource/js/lib/vue.js');
});
paths.get('/js/vue/main.model.js', (request, response) => {
	response.sendfile('./resource/js/vue/main.model.js');
});

module.exports = paths;
