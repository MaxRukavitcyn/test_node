require('dotenv').config();
const express = require('express');
const bodyParser = require("body-parser");
const apiController = require('./server/core/controllers/apiController');
const resourceController = require('./server/core/controllers/resourceController');
const dbApiController = require('./server/core/controllers/dbApiController');
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(express.static('resource'));
app.use(apiController);
app.use(resourceController);
app.use(dbApiController);
const http = require('http');
const server = http.Server(app);

server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
});


//create socket for chat
const io = require('socket.io').listen(server);
// Массив со всеми подключениями
connections = [];

// Функция, которая сработает при подключении к странице
// Считается как новый пользователь
io.sockets.on('connection', function(socket) {
    console.log("Успешное соединение");
    // Добавление нового соединения в массив
    connections.push(socket);
    
    // Функция, которая срабатывает при отключении от сервера
    socket.on('disconnect', function(data) {
        // Удаления пользователя из массива
        connections.splice(connections.indexOf(socket), 1);
        console.log("Отключились");
    });
    
    // Функция получающая сообщение от какого-либо пользователя
    socket.on('send mess', function(data) {
        // Внутри функции мы передаем событие 'add mess',
        // которое будет вызвано у всех пользователей и у них добавиться новое сообщение
        io.sockets.emit('add mess', {mess: data.mess, name: data.name, className: data.className});
    });
    
});

