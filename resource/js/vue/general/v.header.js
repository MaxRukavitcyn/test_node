let template = `
	<div>
	    <v-tabs background-color="blue lighten-4">
	    	<v-tab text v-for="tab in tabs" :to="tab.path">{{tab.title}}</v-tab>
	    </v-tabs>
    </div>
`;
export let vHeader = {
	template,
	data() {
		return {
			tabs: [
				{title: 'Дерево', path: '/tree'},
				{title: 'Список', path: '/list/name'},
				{title: 'Дерево свое хрень', path: '/tree/custom'},
				{title: 'Список дел', path: '/list/action'},
				{title: 'Фильмотека', path: '/test/page'},
				{title: 'Карусель', path: '/carusel'},
				{title: 'Уравнения', path: '/liner/equations'},
				{title: 'Змейка', path: '/snake'},
				{title: 'Калькулятор', path: '/calc'},
				{title: 'Тест вебки', path: '/test_camera'},
				{title: 'Крестики-нолики', path: '/cross_and_zero'}
			]
		}
	}
}
