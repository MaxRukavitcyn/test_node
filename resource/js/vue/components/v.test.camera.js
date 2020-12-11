let template = `
	<div>
		<video id="video" height="500px" width="500px" autoplay></video>
	</div>
`;

export let vTestCamera = {
	template,
	data() {
		return {}
	},
	mounted() {
		let video = document.getElementById('video');
		// Выбирает разрешение камеры близкое к 1280x720.
		let constraints = { audio: false, video: { width: 1280, height: 720 } };
		
		navigator.mediaDevices.getUserMedia(constraints)
			.then(function(mediaStream) {
				var video = document.querySelector('video');
				video.srcObject = mediaStream;
				video.onloadedmetadata = function(e) {
					video.play();
				};
			})
			.catch(function(err) { console.log(err.name + ": " + err.message); }); // always check for errors at the end.
	}
}
