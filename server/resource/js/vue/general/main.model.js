import VueRouter from 'vue-router';
import {routes} from "./router";
import {vHeader} from "./v.header";
import {treeData} from "../data/store.data";
import {iHttp} from "../../http/interface";

let router = new VueRouter({
	routes: routes
});

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
		treeData: {},
		title: 'hui',
		list: [],
		elem: '',
		number: 0,
		showList: true,
	},
	beforeCreate(){
		iHttp.get('/tree').then(d=>this.treeData = d);
		iHttp.post('/test/post', {id: 1, message: 'Hello World!!!'}).then(d=>{
			log('good');
			iHttp.get('/users').then(d=>log(d));
		})
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
