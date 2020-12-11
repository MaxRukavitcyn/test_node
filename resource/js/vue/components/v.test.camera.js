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
		var video = document.querySelector('video');
		
		if (navigator.getUserMedia) {
			navigator.getUserMedia({audio: true, video: true}, function(stream) {
				video.src = stream;
			}, onFailSoHard);
		} else if (navigator.webkitGetUserMedia) {
			navigator.webkitGetUserMedia('audio, video', function(stream) {
				video.src = window.webkitURL.createObjectURL(stream);
			}, onFailSoHard);
		} else {
			video.src = 'somevideo.webm'; // fallback.
		}
		
		function onFailSoHard() {}
	}
}
