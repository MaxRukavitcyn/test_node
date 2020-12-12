import {iHttp} from "../../http/interface";

let template = `
	<div>
		<video id="video" height="500px" width="500px" autoplay></video>
		<a href="#" id="capture" class="booth-capture-button">Сфотографировать</a>
	   <canvas style="display: none" id="canvas" width="400" height="300"></canvas>
	   <img src="image/png" id="photo" alt="Ваша фотография">
	</div>
`;

export let vTestCamera = {
	template,
	data() {
		return {}
	},
	created() {
		// Выбирает разрешение камеры близкое к 1280x720.
		let constraints = {audio: false, video: {width: 1280, height: 720}};
		let context = this;
		
		navigator.mediaDevices.getUserMedia(constraints)
			.then(function (mediaStream) {
				let video = document.getElementById('video'),
					canvas = document.getElementById('canvas'),
					context = canvas.getContext('2d'),
					photo = document.getElementById('photo');
				
				video.srcObject = mediaStream;
				video.onloadedmetadata = function (e) {
					video.play();
				};
				document.getElementById('capture').addEventListener('click', function () {
					context.drawImage(video, 0, 0, 400, 300);
					let imgStr = canvas.toDataURL('image/png');
					// let parts = imgStr.split(',')
					photo.setAttribute('src', imgStr);
					// iHttp.sendBlob('/upload/image', b64toBlob(parts[1], parts[0], null));
					canvas.toBlob(function (blob){
						iHttp.sendBlob('/upload/image', blob, null)
					}, 'image/png');
					
				})
			})
			.catch(function (err) {
				console.log(err.name + ": " + err.message);
			}); // always check for errors at the end.
	},
	methods: {
	
	}
}

function b64toBlob(b64Data, contentType, sliceSize) {
	contentType = contentType || '';
	sliceSize = sliceSize || 512;
	
	var byteCharacters = atob(b64Data);
	var byteArrays = [];
	
	for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
		var slice = byteCharacters.slice(offset, offset + sliceSize);
		
		var byteNumbers = new Array(slice.length);
		for (var i = 0; i < slice.length; i++) {
			byteNumbers[i] = slice.charCodeAt(i);
		}
		
		var byteArray = new Uint8Array(byteNumbers);
		
		byteArrays.push(byteArray);
	}
	
	var blob = new Blob(byteArrays, {type: contentType});
	return blob;
}
