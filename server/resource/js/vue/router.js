import {treeComp} from "./v.tree.comp";
import {vListChange} from "./v.list.change";

export let routes = [
	{path: '/tree', component: treeComp},
	{path: '/list/name', component: vListChange}
];
