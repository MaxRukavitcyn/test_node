export class MapperData {
	
	mapper(input){
		let res = {};
		
		let children = input.filter(a=>a.pId===input[0].id);
		if(children.length){
			res['name']=input[0].name;
			res['children']=children;
		} else {
			res['name']=input[0].name;
		}
		for(let i=0;i<2;i++){
			children = input.filter(a=>a.pId===input[i+1].id);
			if(children.length){
				res['children'][i]['name']=input[i+1].name;
				res['children'][i]['children']=children;
			} else {
				res['children'][i]['name']=input[i+1].name;
			}
		}
		children = input.filter(a=>a.pId===input[3].id);
		if(children.length){
			res['children'][i]['name']=input[i+1].name;
			res['children'][i]['children']=children;
		} else {
			res['children'][i]['name']=input[i+1].name;
		}

		return res;
	}
}
