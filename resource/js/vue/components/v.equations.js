import {iHttp} from "../../http/interface";

let template = `
    <div>
        <v-data-table
              :headers="headers"
              :items="equations"
              :items-per-page="5"
              class="elevation-1"
        ></v-data-table>
    </div>    
`;

export let vQuations = {
    template,
    data(){
        return {
            headers: [
                { text: 'Упвнение', value: 'equation'},
                { text: 'Решение', value: 'solution'},
            ],
            equations: []
        }
    },
    created() {
        iHttp.get('/db/equations').then(list=>{
            let res = [];
            list.forEach(e=>{
                res.push(solutionLineEquations(e.equation));
            });
            this.equations = res;
        })
    }
};

