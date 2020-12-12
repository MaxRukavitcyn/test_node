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
	},
	sendBlob(url, data) {
		var formData = new FormData(),
			blobImage = data

		formData.append('xhr', 'works!');
		formData.append('test.jpg', blobImage, 'test.jpg');

		var xhr = new XMLHttpRequest();
		xhr.open('POST', baseUrl + url, true);
		xhr.onload = function(e){
			console.log('selfreaded ', xhr);
			// form.append(xhr.responseText);
		};
		xhr.send(formData);
	}
};

window.iHttp = iHttp;
