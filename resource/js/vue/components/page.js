import {vSelect} from "./v.select";
import {vFilms} from "./v.films";
import {vDynamicSelect} from "./../github/v.dynamic.select";
import {iHttp} from "../../http/interface";

let template = `
				<div>
					<h1>Фильмотека</h1>
					<br>
					<div style="width: 50%; z-index: 9999">
						<div>
							<input name="films" type="radio" value="modern2" v-model="films"> Осторожно модерн 2
							<input name="films" type="radio" value="other" v-model="films"> Другие <br>
						</div>
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
			films: '',
			selectedObject: {},
			model: {list: []}
		}
	},
	watch: {
		films(val){
			iHttp.get('/links', 'name='+val).then(links=>this.model.list = links)
		}
	},
	computed: {
		filmLink(){
			return this.selectedObject? this.selectedObject.filmLink : '';
		}
	},
	methods: {
		changeFilms(){
		
		},
		changeLink(filmLink) {
			this.filmLink = filmLink;
		}
	}
};
