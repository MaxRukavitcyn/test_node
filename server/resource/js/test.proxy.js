export class TestProxy {
	test(){
		let handler = {
			get(target, name){
				return name||'no field'
			},
			set(target, prop, value){
				target[prop] = value;
				return true;
			}
		};
		
		let myObject = [{id: 1, name: 'Alex'}];
		
		let proxy = new Proxy(myObject, handler);
		proxy[1] = {id:2, name: 'Max'};
		
		console.log('myObject = ', myObject);
		console.log('proxy = ', proxy)
	}
	getIndex(target){
		let proxy = new Proxy(target, {get(_, index){return index;}});
		
		return proxy;
	}
}
