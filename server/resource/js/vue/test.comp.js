export let testComp = {
	name: 'test-comp',
	props: ['css'],
	data(){
		return {
			mess:''
		}
	},
	model: {
		prop: 'testProp',
		event: 'change'
	},
	template: `<div :style="css" @click="changeTestProp">
					test-comp working!!!
					<input type="text" v-model="mess"/>
					{{mess}}
				</div>`,
	methods: {
		changeTestProp(){
			this.testProp = (Math.random()*10).toFixed();
			this.$emit('change', this.testProp);
			console.log(this.testProp );
		}
	}
};
