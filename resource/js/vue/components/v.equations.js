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
		
		<v-text-field
              style="width: 30%"
              v-model="equationText"
              :rules="equationRules"
              :counter="100"
              label="введите уравнение формата: '2x + 2 = 5'"
              required
		></v-text-field>
		<v-btn color="primary" :disabled="!equationValid" @click="addEquation" >Добавить и решить</v-btn>
    </div>    
`;

export let vEquations = {
    template,
    data(){
        return {
	        equationRules: [
	        	eq => {
	        	let test = /^[0-9A-Za-z]{0,4}\s[-+]\s[0-9A-Za-z]{0,4}\s\=\s[0-9]{0,9}$/.test(eq) ||
			        /^[0-9A-Za-z]{0,4}\s\=\s[0-9]{0,9}$/.test(eq) ||
			        'неверный формат';
	        	this.equationValid = test !== 'неверный формат';
	        	return test;
		        },
	        ],
	        equationValid: true,
	        validEq: false,
	        equationText: '',
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
		    iHttp.post('/db/delete/equations', this.selected.map(a=>a.id));
    		Vue.set(this, 'selected', []);
    		
	    },
		addEquation(){
    		iHttp.post('/db/add/equation', {equation: this.equationText}).then(d=>location.reload())
		}
	}
};

