import {vSelect} from "./v.select";
import {vFilms} from "./v.films";
import {vDynamicSelect} from "./../github/v.dynamic.select";

let template = `
				<div>
					<h1>Фильмотека</h1>
					<br>
					<div style="width: 50%; z-index: 9999">
						<v-dynamic-select :options="model.list" v-model="selectedObject"></v-dynamic-select>
					</div>
					<div style="position: relative; display: inline-block" >
                        <!--<v-select @input="changeLink" :model="model"></v-select>-->
						<v-films :filmLink="filmLink" class="film-container"></v-films>
					</div>
					
				</div>
`;

export let vPageTest = {
	name: 'v-page-test',
	template,
	components: {'v-select': vSelect, 'v-films': vFilms, 'v-dynamic-select': vDynamicSelect},
	data() {
		return {
			//filmLink: '',
			selectedObject: {},
			model: {list: [{id:1, name: 'Морфий', filmLink: 'https://www.youtube.com/embed/EeeGMdRdH5I'},
					{id:2, name: 'Брат', filmLink: 'https://www.youtube.com/embed/aDaaCGZz-Ok'},
					{id:3, name: 'Брат-2', filmLink: 'https://www.youtube.com/embed/K9TRaGNnjEU'},
					{id:4, name: 'Пятый элемент', filmLink: 'https://www.youtube.com/embed/HSU7iYPnqYM'},
					{id:5, name: 'Иван Васильевич меняет профессию', filmLink: 'https://www.youtube.com/embed/a50qT9bW2Qo'},
					{id:6, name:'клюква шоу - Mutter', filmLink: 'https://www.youtube.com/embed/dkwmVwlwhKU'}
					]
			}
			
		}
	},
	computed: {
		filmLink(){
			return this.selectedObject? this.selectedObject.filmLink : '';
		}
	},
	methods: {
		changeLink(filmLink) {
			this.filmLink = filmLink;
		}
	}
};
