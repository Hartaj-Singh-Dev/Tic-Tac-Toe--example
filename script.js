// Storing our status element here 
// 

const statusOFGame = document.querySelector(".game--status")

// using variables to store the game information

let gameActiv = true;
let currentPlayer = "X";

let GameState = ["","","","","","","","",""];

// fucntions to display something to the user

const winningMessage = () => `Player ${currentPlayer} has Won !!!`;
const drawMessage = () =>{ ` Game ended with a draw !!`};
const PlayerTurn = () =>{ `IT's ${currentPlayer} Turn`};

// setting intial message to let them know

statusOFGame.innerHTML = PlayerTurn();

function handleCellPlayed (){

}
function handlePlayerChange(params) {
	
}

function handleResultValidation(params) {
	
}

function handleCellClick(){

}

function handleRestartGame(){
	
}