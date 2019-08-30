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
	function getRepeats(words){
		let res={};
		words.forEach((a,i)=>{
			let count=1;
			words.forEach((b,j)=>{
				if(a===b && i!==j){
					count++;
				}
			});
			res[a]=count;
		});
		return res;
	}
	
	function getZippedArrays(keys, values) {
		let res = {};
		keys.forEach((k,i)=>{
			if(values[i])
				res[k] = values[i];
		});
		return res;
	}
	
	function getSortedArray(array, key) {
		return array.sort((a,b)=>a[key]>=b[key]? 1 : -1);
	}
	
	function getData(keys, values) {
		let res = [];
		values.forEach(val=>{
			res.push(getZippedArrays(keys, val))
		});
		return res;
	}
	let keys = ['имя', 'любимый цвет', 'любимое блюдо'];
	let values = [
		['Василий', 'красный', 'борщ'],
		['Мария'],
		['Иннокентий', 'жёлтый', 'пельмени', '18', 'Азовское']
	];
	log(getData(keys, values))
})();
