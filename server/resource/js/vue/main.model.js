(function () {
	
	let templ = `
		<div>
			<input type="text" v-model="tit"> <br>
			<button @click="submit" >send</button>
		</div>
	
	`;
	Vue.component('test-comp', {
		template: templ,
		data(){
			return {
				tit: ''
			}
		},
		methods: {
			submit(){
				this.$emit('submit', this.tit)
			}
		}
	});
	
	let vm = new Vue({
		el: '#app',
		data: {
			title: 'hui'
		},
		methods: {
			sendData(tit){
				let builder = new Builder();
				let ul = builder.get('ul', 0);
				sendActionAndRenderList(tit, ul, builder);
				
			}
		}
	})
})();
