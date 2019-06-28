import {testComp} from "./test.comp";

Vue.component('test-comp2', {
	template: `<div>test-comp2 working!!!123123123</div>`
});


export let vm2 = new Vue({
	el:'#app2',
	components: {'test-comp': testComp},
	data: {
		mess: 'webpack working!'
	}
})
