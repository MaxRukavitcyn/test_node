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
			title: 'hui',
			list: [],
			elem: '',
			number: 0
		},
		watch: {
			list(newVal, oldVal){
				console.log(newVal)
			}
		},
		methods: {
			handlerKeypress(e){
				console.log(e);
				if(e.code === 'ArrowDown') {
					let input = document.getElementById("element");
					input.focus();
				}
				if(e.code === 'ArrowUp') {
					let input = document.getElementById("elementNumber");
					input.focus();
				}
				if(e.code === 'Delete') {
					this.removeElement(this.number)
				}
				
			},
			removeElement(i){
				this.list.splice(i,1);
			},
			changeElement(){
				Vue.set(this.list, this.number, this.elem)
			},
			sendData(tit){
				let builder = new Builder();
				let ul = builder.get('ul', 0);
				sendActionAndRenderList(tit, ul, builder);
				
			}
		}
	});
	window.vm = vm;
})();
