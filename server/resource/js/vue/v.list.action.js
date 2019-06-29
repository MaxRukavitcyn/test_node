let baseUrl = 'http://localhost:3000';
let template = ` <div>
        				<div class="buisness-list">
            				<h1>Список дел:</h1>
            				<div>
            					<ul>
            						<li v-for="l in list">{{l.actionName}}</li>
								</ul>
							</div>
        				</div>
        			<br>
        			<input type="text" v-model="tit">
        			<br>
					<button @click="sendData" >send</button>
				</div>`;

import {Builder} from "../builder";
import {sendActionAndRenderList} from "../render.list.action";

export let vListAction = {
	name: 'v-list-action',
	template,
	data() {
		return {
			tit: '',
			list: []
		}
	},
	created(){
		fetch(baseUrl+'/action/list').then(
			res=>res.json()
				.then(list=>this.list = list));
	},
	methods: {
		sendData() {
			let builder = new Builder();
			let ul = builder.get('ul', 0);
			sendActionAndRenderList(this.tit, ul, builder);
			
		}
	}
}
