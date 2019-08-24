let template = `<div>
					<div>
						<div class="select-wrapper select">
							<input @click="open" readonly :value="val">
							<span v-if="val" style="position: relative;top: -17px;left: 195px;cursor: pointer; color: red" @click="clean">x</span>
						</div>
						<input style="position: relative;top: -30px;left: 225px;" type="button" value="send to alert" @click="send">
						<div v-show="show" style="width: 210px;position: relative;top: -15px;border: black 1px solid;">
						<span v-if="!model || model.list.length === 0" style="position: relative;left: 60px;">нет данных</span>
							<ul class="select-list">
								<li v-for="(l, index) in list">
									<div class="select-list-outer-div target" @click="target(l.name)">
										<div style="position: relative;left: -3px;">
											<span style="position: relative; left: 10px;">{{l.name}}</span>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
					
				</div>`;


export let vSelect = {
	name: 'v-select',
	props: ['model'],
	template,
	data() {
		return {
			show: false,
			val: ''
		}
	},
	computed: {
		list(){
			if(this.model)
				return this.model.list;
		}
	},
	methods: {
		target(value){
			this.val = value
		},
		send(){
			alert(this.val);
		},
		clean(){
			this.val = '';
		},
		open(){
			this.show = !this.show;
		}
	}
};