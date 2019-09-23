"use strict";
function assert(isTrue, message){
	console.log(isTrue? message : 'false')
}

function Button(){
	this.clicked = false;
	this.click = ()=>{
		this.clicked = true;
		assert(button.clicked, 'button has been clicked');
	}
}

let button = new Button();

let elem = document.getElementById('test');
// let foo = button.click.bind(button);

elem.addEventListener('click', button.click);

const GLOBAL = 'global';
function globalFn() {
	let outer = 'outer';

	function outerFn() {
		let inner = 'inner';
		console.log(outer, GLOBAL);

		function innerFn() {
			console.log(inner, outer, GLOBAL);
		}

		innerFn();
	}
	outerFn()
}
globalFn();
