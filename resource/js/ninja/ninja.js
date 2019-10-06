window.log = console.log;

export let globalNinja = (function () {
	function solutionLineEquations(equation) {
		if (equation !== "") {
			let cofs = equation.split(' ');
			let cofWithX;
			let cof;
			for (let i = 0; i < cofs.length; i++) {
				if (cofs[i].includes("x")) {
					let num = cofs[i].substring(0, cofs[i].indexOf("x"));
					cofWithX = Number.parseInt(num !== "" ? num : 1);
				}
				if (!isNaN(cofs[i]) && i !== cofs.length - 1) {
					cof = Number.parseInt(cofs[i]);
				}
			}
			if(!cof) cof = 0;
			let res = Number.parseInt(cofs[cofs.length - 1]);
			let solution;
			if (equation.indexOf('+') !== -1){
				solution = (res - cof) / cofWithX;
			} else if (equation.indexOf('-') !== -1 && equation.indexOf('x') < 2) {
				solution = (res + cof) / cofWithX;
			} else if (equation.indexOf('-') !== -1 && equation.indexOf('x') > 2) {
				solution = (res - cof) / (-1 * cofWithX);
			} else {
				solution = res / cofWithX;
			}
			
			return equation + '\nsolution: ' + solution;
		}
		return;
	}
	window.solutionLineEquations = solutionLineEquations;
	log(solutionLineEquations('2x + 1 = 5'));
	
})();
