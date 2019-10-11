import {iHttp} from "../http/interface";

window.log = console.log;

export let globalNinja = (function () {
	function getSolutionLineEquation(equation) {
		if (equation) {
			equation = equation.trim();
			let elements = equation.split(' ');
			let rateAtUnknown = 0, freeRate = 0, lastIndex = elements.length - 1;
			for (let i = 0; i < elements.length; i++) {
				if (elements[i].match(/[a-zA-Z]/) && elements[i].match(/[a-zA-Z]/).index !== -1) {
					let num = elements[i].substring(0, elements[i].match(/[a-zA-Z]/).index);
					if(i !== 0 && elements[i-1] === "-") {
						num = num? num * (-1) : (-1);
					}
					rateAtUnknown += Number.parseFloat(num !== "" ? num : 1);
				}
				else if (!isNaN(elements[i]) && i !== lastIndex) {
					if(i !== 0 && elements[i-1] === '-') {
						elements[i] *= (-1);
					}
					freeRate += Number.parseFloat(elements[i]);
				}
			}
			if(!freeRate) freeRate = 0;
			return {equation: equation, solution: (Number.parseFloat(elements[lastIndex]) - freeRate) / rateAtUnknown};
		}
		return;
	}
	window.getSolutionLineEquation = getSolutionLineEquation;
	log(getSolutionLineEquation('2x + 1 = 5'));
	
})();
