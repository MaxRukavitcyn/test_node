

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
	beforeCreate(){
		console.log('before')
	},
	mounted(){
		console.log(this.item);
	},
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
			return this.list.filter(a=>a.pId === parent.id).slice();
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
	props: ['model'],
};
