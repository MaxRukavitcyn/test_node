const express = require('express');
const cors = require('cors');
const DB = require('../data/dataBaseTemp');
const paths = express();
const multer = require("multer")
let upload = multer({dest: "uploads/"});
let type = upload.single("test.jpg")
const fs = require("fs");
const nodemailer = require('nodemailer');
const path = require('path');

let corsOptions = {
	origins: ['http://localhost:8080', 'http://localhost'],
	optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
 function send_email(filename) {
	let transporter = nodemailer.createTransport({
		host: 'smtp.mail.ru',
		port: 587,
		secure: false,
		auth: {
			user: 'maxrukav@mail.ru',
			pass: 'na4061990hui',
		},
	})
	
	let result = transporter.sendMail({
		from: 'maxrukav@mail.ru',
		to: 'maxrukav@mail.ru',
		subject: 'Message from Node js',
		text: 'This message was sent from Node js server.',
		attachments: [{ filename: filename + '.jpg', path: path.resolve(__dirname, '../../../uploads', filename)}]
	})
	
	console.log(result);
	setTimeout(()=>{
		fs.unlinkSync(path.resolve(__dirname, '../../../uploads', filename))
	}, 10000)
	
}


paths.post('/upload/image', cors(corsOptions), type, function(req, res) {
	console.log('upload')
	let filedata = req.file;
    console.log(filedata);
    if(!filedata)
        res.send("Ошибка при загрузке файла");
    else
        res.send("Файл загружен");
	// var tmp_path = req.file.path;
	// var target_path = 'uploads/' + req.file.originalname;
	// fs.readFile(tmp_path, function(err, data) {
	// 	fs.writeFile(target_path, data, function (err) {
	// 		res.render('complete');
	// 	})
	// })
	send_email(filedata.filename)
})

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
