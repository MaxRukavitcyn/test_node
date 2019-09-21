let baseUrl = 'http://localhost:3000';
export let iHttp = {
	get(url){
		return new Promise((resolve)=>{
			fetch(baseUrl + url)
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
