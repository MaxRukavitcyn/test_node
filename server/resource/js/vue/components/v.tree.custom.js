import {iHttp} from "../../http/interface";


let treeNode = {
	name: 'tree-node',
	template: `<div>
					<li>
						<div @click="openNode">{{item.name}}</div>
						<ul v-show="isOpen">
							<tree-node v-for="it in findChildren(item)" :key="it.id" :item="it" :list="list"></tree-node>
						</ul>
					</li>
				</div>`,
	props: ['item', 'list'],
	data(){
		return {
			isOpen: false,
		}
	},
	methods: {
		openNode(){
			this.isOpen = !this.isOpen;
		},
		findChildren(parent){
			if(this.list instanceof Array)
				return this.list.filter(a=>a.pId === parent.id).slice();
			else return [];
		}
	}
};

let template = `
		<div>
			<tree-node :item="{id: 0, name: 'MRF', children: model}" :list="model"></tree-node>
		</div>
	</div>`;

export let vTreeCustom = {
	name: 'v-tree-custom',
	template,
	components: {'tree-node': treeNode},
	props: ['query'],
	data(){
		return {
			model: {}
		}
	},
	created(){
		iHttp.get(this.query.url,this.query.params).then(d=>this.model = d)
	}
};
