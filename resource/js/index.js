import {TestProxy} from "./test.proxy";
import {MapperData} from "./mapper.data";
import {vm} from "./vue/general/main.model";
import {globalNinja} from "./ninja/ninja";
// new TestProxy().test();

let data = [
	{name: 'Nick', id: 0},
	{name: 'Max', id: 2, pId: 0},
	{name: 'Helen', id: 3, pId: 0},
	{name: 'Ivan', id: 4, pId: 3},
	{name: 'Test', id: 5, pId: 4},
];

var treeData = {
	name: 'Nick',
	children: [
		{ name: 'Max' },
		{ name: 'Helen',
		  children: [
			  {name: 'Ivan',
			   children: [
				   {name: 'Test'}
			   ]}
		  ]
		},
	]
}
// window.data = data;
// console.log(new MapperData().mapper(data));