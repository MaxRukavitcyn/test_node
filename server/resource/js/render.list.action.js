'use strict';
let baseUrl = 'http://localhost:3000';
import {Builder} from "./builder";
export function renderList(){
	let builder = new Builder();
	let div = builder.get('div', 1);
	builder.create('ul').to(div);
	let ul = builder.get('ul', 0);
	fetch(baseUrl + '/action/list')
		.then((res) => {
			res.json().then((actionList) => {
				if (actionList.length) {
					updateList(ul, actionList, builder);
				}
				builder.create('button').setText('добавить действие').to(div).on('click', (e) => {
					let actionName = prompt('Введи действие', '');
					sendActionAndRenderList(actionName, ul, builder);
					
				})
			})
		});
}



export function sendActionAndRenderList(actionName, tag, builder) {
	sendActionName(actionName).then((res) => {
		res.json().then((actionList) => {
			console.log(actionList);
			tag.innerHTML = '';
			updateList(tag, actionList, builder);
		})
	});
}

function updateList(parent, list, builder) {
	for (let act of list) {
		builder.create('li').to(parent).setText(act.actionName).on('click', (e) => {
			if (confirm('Удалить?')) {
				parent.removeChild(e.path[0]);
				deleteAct(act.id);
			}
		})
	}
}

function deleteAct(id) {
	fetch(baseUrl + '/delete/act', {
		method: 'post',
		body: id
	}).then((res) => res.text().then((mess) => console.log(mess)))
}

export function getData() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', baseUrl + '/test', true);
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

export function altGetData() {
	fetch(baseUrl + '/test')
		.then((res) => {
			res.json().then((data) => {
				console.log(data);
			})
		})
}

function sendDataAjax() {
	let xhr = new XMLHttpRequest();
	let body = {'id': 'HUI'};
	
	xhr.open("POST", baseUrl + '/testPost', true);
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
	return fetch(baseUrl + '/add/action', {
		method: 'post',
		body: JSON.stringify({actionName: actionName})
	})
}
