let template = `<div>
				  <li>
				    <div
				      :class="{bold: isFolder}"
				      @click="toggle"
				      @dblclick="makeFolder">
				      {{ item.name }}
				      <span v-if="isFolder">[{{ isOpen ? '-' : '+' }}]</span>
				    </div>
				    <ul v-show="isOpen" v-if="isFolder">
				      <tree-item
				        class="item"
				        v-for="(child, index) in item.children"
				        :key="index"
				        :item="child"
				        @make-folder="$emit('make-folder', $event)"
				        @add-item="$emit('add-item', $event)"
				      ></tree-item>
				      <!--<li class="add" @click="$emit('add-item', item)">+</li>-->
				    </ul>
				  </li>
				 </div>
				`;

let treeItem = {
	name: 'tree-item',
	template,
	props: ['item'],
	data: function () {
		return {
			isOpen: false
		}
	},
	computed: {
		isFolder: function () {
			return this.item.children &&
				this.item.children.length
		}
	},
	methods: {
		toggle: function () {
			if (this.isFolder) {
				this.isOpen = !this.isOpen
			}
		},
		makeFolder: function () {
			if (!this.isFolder) {
				this.$emit('make-folder', this.item)
				this.isOpen = true
			}
		}
	}
}

let treeTmpl = `
		<tree-item
            class="item"
            :item="treeData"
            @make-folder="makeFolder"
            @add-item="addItem"
    	></tree-item>
`;

export let vTreeComp = {
	name:'tree-comp',
	template: treeTmpl,
	props: ['treeData'],
	components: {'tree-item': treeItem},
	methods: {
		makeFolder: function (item) {
			Vue.set(item, 'children', []);
			this.addItem(item)
		},
		addItem: function (item) {
			item.children.push({
				name: 'new stuff'
			})
		},
	}
}

