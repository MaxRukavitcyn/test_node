import {iHttp} from "../../http/interface";

let template = `
    <div>
        <v-data-table
        	  v-model="selected"
              :headers="headers"
              :singel-select="singleSelect"
              item-key="id"
              show-select
              :items="equations"
              :items-per-page="5"
              class="elevation-1"
        >
		       <template v-slot:top>
	           		 <a style="position: relative; left: 5px"  @click="deleteItem">удалить</a>
	           </template>
		</v-data-table>
    </div>    
`;

export let vQuations = {
    template,
    data(){
        return {
	        singleSelect: false,
	        selected: [],
            headers: [
                { text: 'Упвнение', value: 'equation'},
                { text: 'Решение', value: 'solution'},
            ],
            equations: []
        }
    },
    created() {
        iHttp.get('/db/equations').then(list=>{
            this.equations.push(...list.map(e => Object.assign({id: e.id}, getSolutionLineEquation(e.equation))));
        })
    },
	methods: {
    	deleteItem(){
    		for(let s of this.selected) {
			    this.equations = this.equations.filter(a=>a.id !== s.id);
		    }
    		Vue.set(this, 'selected', []);
    		
	    }
	}
};

