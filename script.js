const playerStatus = document.querySelector('#playerTurn')
const redScore = document.querySelector('#redScore')
const yellowScore = document.querySelector('#yellowScore')
// const table = document.querySelector('#table')
const tile = document.querySelectorAll('.cell')
// const player1 = document.querySelector('.player-one')
// const player2 = document.querySelector('.player-two')
const resetButton = document.querySelector('#resetBtn')
const cellIndex = document.querySelector('cellIndex')
const incrementCount_Red = document.getElementById("score-giver-red");
const incrementCount_Yellow = document.getElementById("score-giver-yellow");
const resetScore = document.querySelector('#resetScore')
const musicButton = document.getElementById('music-button')
const myAudio = document.getElementById('myAudio');
//------------
let playerRed= "R"
let playerYellow="Y"
let currPlayer = playerRed
let gameOver = false
let board;
let rows= 6;
let columns = 7;
let currColumns = [];
//--------------
let countRed=0 
let countYellow=0
let musicActive =true
const handleIncrement_Red = () => {
    countRed++;
    redScore.innerHTML = `Red Score: ${countRed}`
}
const handleIncrement_Yellow = () => {
    countYellow++;
    yellowScore.innerHTML = `Yellow Score: ${countYellow}`
  };
const resetBothScores = () => {
    redScore.innerHTML = `Red Score: ${countRed=0}`
    yellowScore.innerHTML = `Yellow Score: ${countYellow=0}`
}
//----------------------
window.onload = function() {
    startGame();
}
function startGame() {
    //(---------------
    console.log('startgame running')
    redScore.innerHTML = `Red Score: ${countRed}`
    yellowScore.textContent = `Yellow Score: ${countYellow}`
    incrementCount_Red.addEventListener("click", handleIncrement_Red);
    incrementCount_Yellow.addEventListener("click", handleIncrement_Yellow);
    resetScore.addEventListener('click', resetBothScores)
    resetButton.addEventListener('click', resetGame)
//---------)
    board = [];
    currColumns = [5, 5, 5, 5, 5, 5, 5];

    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < columns; c++) {

            row.push(' ');

            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.addEventListener("click", setPiece);
            document.getElementById("board").append(tile);
        }
        board.push(row);
    }
}

function setPiece() {
    if (gameOver) {
        return;
    }
    let coords = this.id.split("-");
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);

    r = currColumns[c]; 

    if (r < 0) { 
        return;
    }
    console.log(board)

    board[r][c] = currPlayer; //had problem here

    let tile = document.getElementById(r.toString() + "-" + c.toString());
    if (currPlayer == playerRed) {
        playerStatus.textContent = ` Player Yellow's turn`
        tile.classList.add("red-piece");
        currPlayer = playerYellow;
    }
    else {
        playerStatus.textContent = ` Player Red's turn`
        tile.classList.add("yellow-piece");
        currPlayer = playerRed;
    }
    r -= 1; //update the row height for that column
    currColumns[c] = r; //update the array
    checkWinner();
}
function checkWinner() {
    // horizontal
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns - 3; c++){
           if (board[r][c] != ' ') {
               if (board[r][c] == board[r][c+1] && board[r][c+1] == board[r][c+2] && board[r][c+2] == board[r][c+3]) {
                   setWinner(r, c);
                   return;
               }
           }
        }
   }

   // vertical
   for (let c = 0; c < columns; c++) {
       for (let r = 0; r < rows - 3; r++) {
           if (board[r][c] != ' ') {
               if (board[r][c] == board[r+1][c] && board[r+1][c] == board[r+2][c] && board[r+2][c] == board[r+3][c]) {
                   setWinner(r, c);
                   return;
               }
           }
       }
   }

   // diagonal
   for (let r = 0; r < rows - 3; r++) {
       for (let c = 0; c < columns - 3; c++) {
           if (board[r][c] != ' ') {
               if (board[r][c] == board[r+1][c+1] && board[r+1][c+1] == board[r+2][c+2] && board[r+2][c+2] == board[r+3][c+3]) {
                   setWinner(r, c);
                   return;
               }
           }
       }
   }

   // other diagonal
   for (let r = 3; r < rows; r++) {
       for (let c = 0; c < columns - 3; c++) {
           if (board[r][c] != ' ') {
               if (board[r][c] == board[r-1][c+1] && board[r-1][c+1] == board[r-2][c+2] && board[r-2][c+2] == board[r-3][c+3]) {
                   setWinner(r, c);
                   return;
               }
           }
       }
   }
}

function setWinner(r, c) {
   let winner = document.getElementById("winner");
   if (board[r][c] == playerRed) {
       winner.innerText = "Red Wins";             
   } else {
       winner.innerText = "Yellow Wins";
   }
   gameOver = true;
}

// function startGame(){
//     console.log('startgame running')
//     cell.forEach(cell => cell.addEventListener('click', cellClicked))
// }

// function cellClicked(event) {
//     if (event.target.classList.length < 2) {

//         //FOR PLAYER ONE!!!!
//         if (currentPlayer === "player_one") {
//             playerStatus.textContent = ` Player Yellow's turn`
//             let player1_indexOne = event.target.attributes[0].value[0]
//             let player1_indexTwo = event.target.attributes[0].value[2]
            

//            let row = columnCheck(player1_indexTwo)
//             if (row){
//                 // board[player1_indexOne][player1_indexTwo] = 'R'
//                 board[row][player1_indexTwo] = 'R'
//                 let fallenCell = document.querySelector(`[cellIndex="${row}-${player1_indexTwo}"]`)
//                 console.log(fallenCell)
//                 fallenCell.classList.add('color-red')
//                 // event.target.classList.add('player-one')
//                 console.log(board)
//                 currentPlayer = "player_two"  
                
//             }
//             else{
//                 return
//             }
            
//         }
//         //----- FOR PLAYER TWO!!!
//         else if (currentPlayer === 'player_two') {
//             playerStatus.textContent = ` Player Red's turn`
//             // let player2_indexOne = event.target.attributes[0].value[0]
//             let player2_indexTwo = event.target.attributes[0].value[2]

//             let row = columnCheck(player2_indexTwo)
//             if (row){ 
//                 board[row][player2_indexTwo] = 'Y'

//                 let fallenCell = document.querySelector(`[cellIndex="${row}-${player2_indexTwo}"]`)
//                 console.log(fallenCell)
//                 fallenCell.classList.add('color-yellow')
//                 // event.target.classList.add('player-one')
//                 console.log(board)
//                 currentPlayer = "player_one"  
//             }
//             else{
//                 return
//             }
//         }
//     }
// }
// function columnCheck(column){
// for(let row=5 ; row>=0; row--){
// if(board[row][column] ==''){
// return row   
// }
// }
// return 
// }

function resetGame(){
    currPlayer= playerRed
    document.querySelectorAll(".tile").forEach(tile => {
        tile.classList.remove("red-piece", "yellow-piece");
      });
    //   board[r][c].forEach=' '
      board=[ 
        [" ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " "]
        ]
        currColumns = [5, 5, 5, 5, 5, 5, 5];
        console.log(board)
    playerStatus.textContent = ` Player Red's turn`
    gameOver=false;
}
musicButton.addEventListener('click', function(){

     if (myAudio.paused) {
        myAudio.play();
    }else{
        myAudio.pause();
    }
  });