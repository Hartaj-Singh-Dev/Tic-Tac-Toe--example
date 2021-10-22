// Storing our status element here 
// 

const statusOFGame = document.querySelector(".game--status")

// using variables to store the game information

let gameActiv = true;
let currentPlayer = "X";

let gameState = ["","","","","","","","",""];

// fucntions to display something to the user

const winningMessage = () => `Player ${currentPlayer} has Won !!!`;
const drawMessage = () =>{ ` Game ended with a draw !!`};
const PlayerTurn = () =>{ `IT's ${currentPlayer} Turn`};

// setting intial message to let them know

statusOFGame.innerHTML = PlayerTurn();

const winningConditions = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
    ];


function handleCellPlayed (clickedCellIndex , clickedCell){
 
	gameState[clickedCellIndex] = currentPlayer;
	clickedCell.innerHTML = currentPlayer;
	/*
We update our internal game state to reflect the played move, 
as well as update the user interface to reflect the played move
*/

}
function handlePlayerChange() {
	currentPlayer = currentPlayer === "X" ? "O" : "X";
	statusOFGame.innerHTML = PlayerTurn();
}


function handleResultValidation() {
	let roundWon = false;
	for(let i = 0 ; i <=7; i++ ){
		const winConditon = winningConditions[i];
		let a = gameState[winConditon[0]]
		let b = gameState[winConditon[1]]
		let c = gameState[winConditon[2]]
		if( a==='' || b === "" || c === ''){
			continue;
		}
		if(a === b && b === c){
			roundWon = true;
			break
		}
	}; 

	if(roundWon){
		statusOFGame.innerHTML = winningMessage();
		gameActiv = false;
		return;
	}

	let roundDraw = !gameState.includes("");
	if(roundDraw){
		statusOFGame.innerHTML = drawMessage();
		gameActiv = false;
		return;
	}

	handlePlayerChange();
}

function handleCellClick(clickedCellEvent){
	//FIRST VALIDATING WEATHER THE CELL BEEN ALREADY CLICKED OR NOT BY USING A VARIABLE
	const clickedCell = clickedCellEvent.target;

	const clickedCellIndex = parseInt( clickedCell.getAttribute("data-cell-index"))

      if(gameState[clickedCellIndex] !== "" || !gameActiv){
	      return;
      }

      handleCellPlayed(clickedCellIndex , clickedCell);
      handleResultValidation();
}

function handleRestartGame(){
	gameActiv = true;
	currentPlayer = "X";
	gameState = ["","" ,"" , "" ,"" ,"" ,"" ,"",""];
	statusOFGame.innerHTML = PlayerTurn();
	document.querySelectorAll('.cell').forEach(cell =>{ cell.innerHTML =""})
}

document.querySelectorAll(".cell").forEach(cells => {
	cells.addEventListener('click', handleCellClick)
});

document.querySelector('.game--restart').addEventListener("click", handleRestartGame())
