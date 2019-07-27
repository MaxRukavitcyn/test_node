import {testComp} from "./test.comp";

Vue.component('test-comp2', {
	template: `<div>
					<slot :user="user">{{defMess}}</slot>
             </div>`,
	data(){
		return {
			user: {firstName: 'Maxim', lastName: 'Hand'},
			defMess: 'user not defined'
		}
	}
});


export let vm2 = new Vue({
	el:'#app2',
	components: {'test-comp': testComp},
	data: {
		mess: 'webpack working!',
		testModel: 0
	}
})
