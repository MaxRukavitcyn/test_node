"use strict";
function assert(isTrue, message){
	console.log(isTrue? message : 'false')
}

function Button(){
	this.clicked = false;
	this.click = function(){
		this.clicked = true;
		assert(button.clicked, 'button has been clicked');
	}
}

let button = new Button();

let elem = document.getElementById('test');
let foo = button.click.bind(button);

elem.addEventListener('click', foo);
