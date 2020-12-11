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
		navigator.webkitGetUserMedia('audio, video', function(localMediaStream) {
			var video = document.getElementById('video');
			video.src = window.webkitURL.createObjectURL(localMediaStream);
		}, onFailSoHard);
		
		function onFailSoHard() {}
	}
}
