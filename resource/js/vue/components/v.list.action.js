let baseUrl = location.origin;
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
<!--        			<v-input type="text" v-model="tit">-->
        			<v-text-field
        			  style="width: 20%"
		              v-model="tit"
		              :rules="nameRules"
		              :counter="100"
		              label="название дела"
		              required
		            ></v-text-field>
        			<br>
					<v-btn @click="sendData" >send</v-btn>
				</div>`;

import {Builder} from "../../builder";
import {sendActionAndRenderList} from "../../render.list.action";

export let vListAction = {
	name: 'v-list-action',
	template,
	data() {
		return {
			tit: '',
			list: [],
			nameRules: [
				v => !!v || 'Name is required',
				v => v.length <= 100 || 'Name must be less than 10 characters',
			],
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
