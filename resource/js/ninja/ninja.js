import {iHttp} from "../http/interface";

window.log = console.log;

export let globalNinja = (function () {
	function solutionLineEquations(equation) {
		if (equation !== "") {
			equation = equation.trim();
			let elements = equation.split(' ');
			let rateAtX = 0;
			let freeRate = 0;
			for (let i = 0; i < elements.length; i++) {
				if (elements[i].includes("x")) {
					let num = elements[i].substring(0, elements[i].indexOf("x"));
					if(i !== 0 && elements[i-1] === "-") {
						num = num? num * (-1) : (-1);
					}
					rateAtX += Number.parseFloat(num !== "" ? num : 1);
				}
				else if (!isNaN(elements[i]) && i !== elements.length - 1) {
					if(i !== 0 && elements[i-1] === '-') {
						elements[i] *= (-1);
					}
					freeRate += Number.parseFloat(elements[i]);
				}
			}
			if(!freeRate) freeRate = 0;
			return {equation: equation, solution: (Number.parseFloat(elements[elements.length - 1]) - freeRate) / rateAtX};
		}
		return;
	}
	window.solutionLineEquations = solutionLineEquations;
	log(solutionLineEquations('2x + 1 = 5'));
	
})();
