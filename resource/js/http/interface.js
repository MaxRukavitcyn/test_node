let baseUrl = location.origin;
if(baseUrl.includes(":8080")) {
	baseUrl = baseUrl.replace(":8080", ":3000")
}
export let iHttp = {
	get(url, params, type){
		let query = '';
		if(params)  {
			query = baseUrl + url + '?' + params;
		} else {
			query = baseUrl + url;
		}
		let method = 'json';
		if(type) {
			method = type;
		}
		return new Promise((resolve)=>{
			fetch(query)
				.then((res) => {
					res[method]().then((data) => {
						resolve(data);
					})
				})
		})
	},
	post(url, data){
		return fetch(baseUrl + url, {
			method: 'post',
			body: JSON.stringify(data)
		})
	}
};

window.iHttp = iHttp;
