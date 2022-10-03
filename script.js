const statusText = document.querySelector('#playerTurn')
const redScore = document.querySelector('#redScore')
const yellowScore = document.querySelector('#yellowScore')
const table = document.querySelector('#table')
const cell = document.querySelectorAll('.cell')
const player1 = document.querySelector('.player-one')
const player2 = document.querySelector('.player-two')
const resetBtn = document.querySelector('#resetBtn')
const cellIndex = document.querySelector('cellIndex')
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
//it will check for any winning conditions
startGame()
function startGame(){
    console.log('startgame running')
    cell.forEach(cell => cell.addEventListener('click', cellClicked))
    resetBtn.addEventListener('click', resetGame)
    statusText.textContent = ` ${currentPlayer}'s turn`
    active=true
}

function cellClicked(event){
    board.forEach(row => {
        if (row[event.target.cell-index[0-0]] == 0){
            console.log('next')
        } else {
            console.log('cell clicked ran!')
            if (currentPlayer==="player_one"){
                event.target.classList.add('player-one')
                event.target.classList.remove('player-two')
                currentPlayer === "player_two"
            }
            else {
             currentPlayer === "player_one"
             event.target.classList.add('player-two')
             event.target.classList.remove('player-one')
            }
        }
    })
}
//--
function resetGame(){
    currentPlayer= "player_one"
    cell.forEach(cell => {
        cell.classList.remove('player-one')
        cell.classList.remove('player-two')   
    })
    statusText.textContent = `${currentPlayer}'s turn`
    // board=[ 
    //     ["", "", "", "", "", "", ""],
    //     ["", "", "", "", "", "", ""],
    //     ["", "", "", "", "", "", ""],
    //     ["", "", "", "", "", "", ""],
    //     ["", "", "", "", "", "", ""],
    //     ["", "", "", "", "", "", ""]
    //     ]
}

// board.forEach(row => {
//     if (row[0] == ''){
//         return
//     } else {
//         if (currentPlayer==="player_one"){
//             event.target.classList.add('player-one')
//             event.target.classList.remove('player-two')
//             currentPlayer === "player_two"
//         }
//         else {
//          currentPlayer === "player_one"
//          event.target.classList.add('player-two')
//          event.target.classList.remove('player-one')
//         }
//     }
// })