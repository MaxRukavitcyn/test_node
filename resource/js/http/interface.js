let baseUrl = location.origin;
export let iHttp = {
	get(url, params){
		let query = '';
		if(params)  {
			query = baseUrl + url + '?' + params;
		} else {
			query = baseUrl + url;
		}
		return new Promise((resolve)=>{
			fetch(query)
				.then((res) => {
					res.json().then((data) => {
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
