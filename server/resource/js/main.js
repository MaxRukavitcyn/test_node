'use strict';
window.onload = () => {
	var builder = new Builder();
	let div = builder.get('div', 0);
	builder.create('ul').to(div);
	let ul = builder.get('ul', 0);
	builder.create('button').setText('добавить действие').to(div).on('click', (e) => {
		let actionName = prompt('Введи действие', '');
		builder.create('li').to(ul).setText(actionName).on('click', (e) => {
			if (confirm('Удалить?')) {
				ul.removeChild(e.path[0]);
			}
		});
	})
};

function getData() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'test', true);
	xhr.send();
	xhr.onreadystatechange = function () {
		if (xhr.readyState !== 4) return;
		if (xhr.status !== 200) {
			alert(xhr.status + ': ' + xhr.statusText);
		} else {
			console.log(JSON.parse(xhr.responseText));
		}
	}
}

function altGetData() {
	fetch('/test')
		.then((res) => {
			res.json().then((data) => {
				console.log(data);
			})
		})
}

function sendDataAjax() {
	let xhr = new XMLHttpRequest();
	let body = "{id:'HUI'}";
	
	xhr.open("POST", '/testPost', true);
	// xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	
	xhr.onreadystatechange = function () {
		if (xhr.readyState !== 4) return;
		if (xhr.status !== 200) {
			alert(xhr.status + ': ' + xhr.statusText);
		} else {
			console.log(xhr.responseText);
		}
	};
	xhr.send(body);
}

function sendData() {
	fetch('/testPost', {
		method: 'post',
		body: 'id=HUI'
	}).then((res) => {
		res.text().then(function (data) {
			console.log(data);
		});
	})
}
