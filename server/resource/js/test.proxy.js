export class TestProxy {
	test(){
		let handler = {
			get(target, name){
				return target[name]||'no field'
			}
		};
		
		let obj = new Proxy({}, handler);
		obj.a = 33;
		console.log(obj.a, obj.b);
	}
}
