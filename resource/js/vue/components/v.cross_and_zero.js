let template = `
	<div id="content">
		<div class="field" id="field"></div>
	</div>
`;

export let vCrossAndZero = {
	template,
	data() {
		return {
		
		}
	},
	mounted() {
		startGame();
	}
}

function startGame() {
	let cont = document.getElementById('field');
	let cells = document.getElementsByClassName('cell');
	let player = 'X';
	for (let i=1; i<=9; i++) {
		cont.innerHTML += `<div class="cell" data-number="${i}"></div>`;
	}
	let winCells = [
		[1,2,3],
		[4,5,6],
		[7,8,9],
		[1,5,9],
		[7,5,3],
		[1,4,7],
		[2,5,8],
		[3,6,9]
	];
	for (let i=0; i<9; i++) {
		cells[i].addEventListener('click', playerClick)
	}
	
	let stepX = [];
	let stepO = [];
	
	function playerClick(event) {
		let cell = event.target;
		if (cell.innerText === '') {
			cell.innerText = player;
			
			if (player === 'X') {
				if (!stepX.includes(parseInt(cell.getAttribute('data-number')))) {
					stepX.push(parseInt(cell.getAttribute('data-number')));
				}
				cell.disabled = true;
			} else {
				if (!stepO.includes(parseInt(cell.getAttribute('data-number')))) {
					stepO.push(parseInt(cell.getAttribute('data-number')));
				}
				cell.disabled = true;
			}
			
			if (checkWin(stepX)) {
				alert('player X won!');
				restartGame();
			} else if (checkWin(stepO)) {
				alert('player O won!');
				restartGame();
			}
			player = player === 'X' ? 'O' : 'X';
		}
	}
	
	function restartGame() {
		for (let i=0; i<9; i++) {
			cells[i].innerHTML = '';
		}
		player = 'O';
		stepX = [];
		stepO = [];
	}
	
	function checkWin(steps) {
		let flag = false;
		for (let i=0; i<winCells.length; i++) {
			for (let j=0; j<winCells[i].length; j++) {
				if (steps.includes(winCells[i][j])) {
					flag = true;
				} else {
					flag = false;
					break;
				}
			}
			if (flag) return true;
		}
		return false;
	}
}
