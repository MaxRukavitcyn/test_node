window.log = console.log;

export let globalNinja =  (function () {

	function assert(isTrue, message){
		let li = document.createElement('li');
		document.getElementById('ninja').appendChild(li);
		if(!isTrue) {
			li.style.color = 'green';
			li.innerText = message;
		} else {
			li.style.color = 'red';
			li.innerText = 'fail';
		}
	}
	
})();
