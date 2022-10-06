const playerStatus = document.querySelector('#playerTurn')
const redScore = document.querySelector('#redScore')
const yellowScore = document.querySelector('#yellowScore')
const table = document.querySelector('#table')
const cell = document.querySelectorAll('.cell')
// const player1 = document.querySelector('.player-one')
// const player2 = document.querySelector('.player-two')
const resetBtn = document.querySelector('#resetBtn')
const cellIndex = document.querySelector('cellIndex')
const incrementCount_Red = document.getElementById("score-giver-red");
const incrementCount_Yellow = document.getElementById("score-giver-yellow");
const resetScore = document.querySelector('#resetScore')
let board=[ 
["", "", "", "", "", "", ""],
["", "", "", "", "", "", ""],
["", "", "", "", "", "", ""],
["", "", "", "", "", "", ""],
["", "", "", "", "", "", ""],
["", "", "", "", "", "", ""]
]
let currentPlayer = "player_one";
let active=false
let countRed=0 
let countYellow=0
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
//it will check for any winning conditions
startGame()
function startGame(){
    console.log('startgame running')
    cell.forEach(cell => cell.addEventListener('click', cellClicked))
    resetBtn.addEventListener('click', resetGame)
    // playerStatus.textContent = ` Player Red's turn`
    redScore.innerHTML = `Red Score: ${countRed}`
    yellowScore.textContent = `Yellow Score: ${countYellow}`
    incrementCount_Red.addEventListener("click", handleIncrement_Red);
    incrementCount_Yellow.addEventListener("click", handleIncrement_Yellow);
    resetScore.addEventListener('click', resetBothScores)
    
}

function cellClicked(event) {
    if (event.target.classList.length < 2) {

        //FOR PLAYER ONE!!!!
        if (currentPlayer === "player_one") {
            playerStatus.textContent = ` Player Yellow's turn`
            // let player1_indexOne = event.target.attributes[0].value[0]
            let player1_indexTwo = event.target.attributes[0].value[2]
            

           let row = columnCheck(player1_indexTwo)
            if (row){
                
                board[row][player1_indexTwo] = 'R'
                console.log(board)
                let fallenCell = document.querySelector(`[cellIndex="${row}-${player1_indexTwo}"]`)
                console.log(fallenCell)
                fallenCell.classList.add('color-red')
                // event.target.classList.add('player-one')
                console.log(board)
                currentPlayer = "player_two"  
                
            }
            else{
                return
            }
            
        }
        //----- FOR PLAYER TWO!!!
        else if (currentPlayer === 'player_two') {
            playerStatus.textContent = ` Player Red's turn`
            // let player2_indexOne = event.target.attributes[0].value[0]
            let player2_indexTwo = event.target.attributes[0].value[2]

            let row = columnCheck(player2_indexTwo)
            if (row){ 
                board[row][player2_indexTwo] = 'Y'
                console.log(board)

                let fallenCell = document.querySelector(`[cellIndex="${row}-${player2_indexTwo}"]`)
                console.log(fallenCell)
                fallenCell.classList.add('color-yellow')
                // event.target.classList.add('player-one')
                console.log(board)
                currentPlayer = "player_one"  
            }
            else{
                return
            }
        }
    }
}
function columnCheck(column){
for(let row=5 ; row>=1; row--){
if(board[row][column] ==''){
return row   
}
}
return -1
}
//this needs fix
function winningConditions(){
if(    board=[ 
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["R", "R", "R", "R", "", "", ""]
    ]){
        redScore.textContent = `Red Score: ${0+1}`
}
}

function resetGame(){
    currentPlayer= "player_one"
    cell.forEach(cell => {
        cell.classList.remove('color-red')
        cell.classList.remove('color-yellow')   
    })
    playerStatus.textContent = ` Player Red's turn`
    board=[ 
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""]
        ]
}
