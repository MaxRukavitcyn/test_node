window.log = console.log;

export let globalNinja =  function () {

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
	function fail (mess) {
		assert(false, '', mess);
	}
	//Promises
	let myName = 'Max';
	assert(myName === 'Max', 'Start');
	let testImmediatePromise = new Promise((resolve, reject) => {
		assert(true, 'into executor');
		resolve('into immediate resolver');
	});
	assert(true, 'out promise');
	testImmediatePromise.then(mess => assert(true, mess));
	fail('end first part of code');
	
	assert(myName === 'Max', 'start second part');
	let testDelayPromise = new Promise((resolve, reject) => {
		assert(myName === 'Max', 'into delay promise');
		setTimeout(() => resolve('resolve delay promise'), 5000);
	});
	assert(true, 'out delay promise');
	testDelayPromise.then(mess => assert(myName === 'Max', mess));
	fail('end all parts');
};
