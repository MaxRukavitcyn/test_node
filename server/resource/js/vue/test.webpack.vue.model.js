import {testComp} from "./test.comp";

Vue.component('test-comp2', {
	template: `<div>test-comp2 working!!!</div>`
});


export let vm2 = new Vue({
	el:'#app2',
	components: {'test-comp': testComp},
	data: {
		mess: 'webpack working!',
		testModel: 0
	}
})
