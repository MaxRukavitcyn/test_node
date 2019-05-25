'use strict';
window.onload = () => {
	let builder = new Builder();
	let div = builder.get('div', 0);
	builder.create('ul').to(div);
	let ul = builder.get('ul', 0);
	fetch('/action/list')
		.then((res) => {
			res.json().then((actionList) => {
				if(actionList.length){
					for(let act of actionList){
						builder.create('li').to(ul).setText(act.actionName).on('click', (e) => {
							if (confirm('Удалить?')) {
								ul.removeChild(e.path[0]);
								deleteAct(act.id);
							}
						})
					}
				}
				builder.create('button').setText('добавить действие').to(div).on('click', (e) => {
					let actionName = prompt('Введи действие', '');
					sendActionName(actionName);
					builder.create('li').to(ul).setText(actionName).on('click', (e) => {
						if (confirm('Удалить?')) {
							ul.removeChild(e.path[0]);
							// deleteAct(id);
						}
					});
				})
				console.log(actionList);
			})
		})

};

function deleteAct(id) {
	fetch('/delete/act', {
		method: 'delete',
		body: id
	}).then((res)=>res.text().then((mess)=>console.log(mess)))
}

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
	let body = {'id':'HUI'};
	
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

function sendActionName(actionName) {
	fetch('/add/action', {
		method: 'post',
		body: JSON.stringify({actionName: actionName})
	}).then((res) => {
		res.text().then(function (data) {
			console.log(data);
		});
	})
}
