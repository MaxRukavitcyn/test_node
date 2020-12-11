let template = `
	<v-toolbar dense style="background: aliceblue">
        <v-toolbar-title v-text="'Application'"></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn text v-for="btn in buttons" :to="btn.path">{{btn.title}}</v-btn>
        </v-toolbar-items>
    </v-toolbar>
`;
export let vHeader = {
	template,
	data() {
		return {
			buttons: [
				{title: 'Дерево', path: '/tree'},
				{title: 'Список', path: '/list/name'},
				{title: 'Дерево свое хрень', path: '/tree/custom'},
				{title: 'Список дел', path: '/list/action'},
				{title: 'Фильмотека', path: '/test/page'},
				{title: 'Карусель', path: '/carusel'},
				{title: 'Уравнения', path: '/liner/equations'},
				{title: 'Змейка', path: '/snake'},
				{title: 'Калькулятор', path: '/calc'},
				{title: 'Тест вебки', path: '/test_camera'}
			]
		}
	}
}
