import {vTreeComp} from "./v.tree.comp";
import VueRouter from 'vue-router';
import {routes} from "./router";
import {vListAction} from "./v.list.action";
import {vListChange} from "./v.list.change";
let router = new VueRouter({
	routes: routes
})

let treeData = {
	name: 'My Tree',
	children: [
		{ name: 'hello' },
		{ name: 'wat' },
		{
			name: 'child folder',
			children: [
				{
					name: 'child folder',
					children: [
						{ name: 'hello' },
						{ name: 'wat' }
					]
				},
				{ name: 'hello' },
				{ name: 'wat' },
				{
					name: 'child folder',
					children: [
						{ name: 'hello' },
						{ name: 'wat' }
					]
				}
			]
		}
	]
};


export let vm = new Vue({
	el: '#app',
	router: router,
	components: {
		'tree-item': vTreeComp,
		'v-list-change': vListChange,
		'v-list-action': vListAction
	},
	data: {
		treeData: treeData,
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
		}
	}
});
