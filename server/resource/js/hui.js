"use strict";
function assert(isTrue, message) {
	if(isTrue) console.log(message);
	else console.log('it is false')
}

class Array2 {
	constructor(array){
		this.array = array.slice()
	}
	forEach(callback){
		for(let i=0; i<this.array.length; i++){
			callback(this.array[i])
		}
	}
	map(callback){
		let res = [];
		for(let i=0; i<this.array.length; i++){
			res.push(callback(this.array[i]))
		}
		return res;
	}
}
let f = (res, key)=>key.split('.').reduce((acc, key)=>acc && acc[key]? acc[key] : undefined, res);
let emp1 = f(sor, 'emp2.f1.q1');
console.log(emp1);

emp1 = sor.emp2.f1.q1;
console.log(emp1);

console.log(f(sor, 'emp4.f1.q1')); //undefined

// console.log(sor.emp4.f1.q1) //error
