window.log = console.log;

export let globalNinja =  (function () {

	function assert(isTrue, message, failMess){
		let li = document.createElement('li');
		document.getElementById('answer').appendChild(li);
		if(isTrue) {
			li.style.color = 'green';
			li.innerText = message;
		} else {
			li.style.color = 'red';
			li.innerText = failMess || 'fail';
		}
	}
	
})();
