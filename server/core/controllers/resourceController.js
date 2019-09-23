const express = require('express');
const path = require('path');
const paths = express();

// paths.get('/', (request, response) => {
// 	response.sendfile(path.resolve('../resource/index.html')); //path.resolver разрешает относительные пути
// });
// paths.get('/icons/favicon.ico', (request, response) => {
// 	response.sendfile(path.resolve('../resource/icons/favicon.ico'));
// })
paths.get('/dist/bundle.js', (request, response) => {
	response.sendfile(path.resolve('../resource/dist/bundle.js'));
});
paths.get('/js/main.js', (request, response) => {
	response.sendfile(path.resolve('../resource/js/main.js'));
});
// paths.get('/js/hui.js', (request, response) => {
// 	response.sendfile('./resource/js/hui.js');
// });
paths.get('/js/builder.js', (request, response) => {
	response.sendfile(path.resolve('../resource/js/builder.js'));
});
// paths.get('/ts/builder.js', (request, response) => {
// 	response.sendfile('./resource/ts/builder.js');
// });
paths.get('/js/lib/vue.js', (request, response) => {
	response.sendfile(path.resolve('../resource/js/lib/vue.js'));
});
paths.get('/js/ninja/simple.js', (request, response) => {
	response.sendfile(path.resolve('../resource/js/ninja/simple.js'));
});
paths.get('/js/vue/general/main.model.js', (request, response) => {
	response.sendfile(path.resolve('../resource/js/vue/general/main.model.js'));
});
paths.get('/css/all.css', (request, response) => {
	response.sendfile(path.resolve('../resource/css/all.css'));
});

module.exports = paths;
