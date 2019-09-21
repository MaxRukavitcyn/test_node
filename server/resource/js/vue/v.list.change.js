let template = `<div>
					<ul>
						<li v-for="(l, i) in list" @click="printIndex(i)">
							{{l.name}}
							<div>
<!--								<input type="text" v-model:value="l.name">-->
									<v-text-field style="width: 20%" v-model="l.name"></v-text-field>
							</div>
						</li>
					</ul>
<!--					<input type="button" @click="addUser" value="добавить">-->
				
				</div>`;

export let vListChange = {
	name: 'v-list-change',
	template,
	data() {
		return {
			list: [{id: 1, name: 'Alex'},{id: 2, name: 'Pety'},{id: 3, name: 'Max'},{id: 4, name: 'Anton'}]
		}
	},
	methods: {
		printIndex(i){
			let proxy = new Proxy([], {set(t,i,v){console.log(i);return true}});
			proxy[i] = {}
		},
		addUser(){
			this.list.push({id: this.list.length-1, name: 'asdasdasd'})
		}
	}
};
