let templ = `
		<div>
			<input type="text" v-model="tit"> <br>
			<button @click="submit" >send</button>
		</div>
	
	`;
Vue.component('test-comp', {
	template: templ,
	data() {
		return {
			tit: ''
		}
	},
	methods: {
		submit() {
			this.$emit('submit', this.tit)
		}
	}
});
import {Builder} from "../builder";
import {treeComp} from "./v.tree.comp";
import {sendActionAndRenderList} from '../render.list.action';
import VueRouter from 'vue-router';
import {routes} from "./router";

let router = new VueRouter({
	routes: routes
})
export let vm = new Vue({
	el: '#app',
	router: router,
	components: {'tree-comp': treeComp},
	data: {
		title: 'hui',
		list: [],
		elem: '',
		number: 0,
		showList: true,
	},
	methods: {
		hideList() {
			this.showList = !this.showList;
		},
		handlerKeypress(e) {
			console.log(e);
			let inputNumber = document.getElementById("elementNumber");
			if (e.code === 'ArrowUp')
				inputNumber.focus();
			if (e.code === 'Delete')
				this.removeElement(this.number);
			if (e.code === 'Enter')
				this.changeElement();
		},
		removeElement(i) {
			this.list.splice(i, 1);
		},
		changeElement() {
			Vue.set(this.list, this.number, this.elem)
		},
		sendData(tit) {
			let builder = new Builder();
			let ul = builder.get('ul', 0);
			sendActionAndRenderList(tit, ul, builder);
			
		}
	}
});
