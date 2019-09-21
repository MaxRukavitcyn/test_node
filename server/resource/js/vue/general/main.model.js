import VueRouter from 'vue-router';
import {routes} from "./router";
import {vHeader} from "./v.header";

let router = new VueRouter({
	routes: routes
});

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

let template = `
	<v-app>
        <v-content>
            <v-container>
                <v-header></v-header>
                <router-view></router-view>
            </v-container>
        </v-content>
    </v-app>
`;

export let vm = new Vue({
	el: '#app',
	template,
	router: router,
	vuetify: new Vuetify(),
	components: {
		'v-header': vHeader,
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
