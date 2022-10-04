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

function cellClicked(event) {
    if (event.target.classList.length < 2) {

        //FOR PLAYER ONE!!!!
        if (currentPlayer === "player_one") {
            statusText.textContent = `${currentPlayer}'s turn`
            let player1_indexOne = event.target.attributes[0].value[0]
            let player1_indexTwo = event.target.attributes[0].value[2]
            

           let row = columnCheck(player1_indexTwo)
            if (row){
                
                board[row][player1_indexTwo] = 'R'
                console.log(board)
                let fallenCell = document.querySelector(`[cellIndex="${row}-${player1_indexTwo}"]`)
                console.log(fallenCell)
                fallenCell.classList.add('player-one')
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
            statusText.textContent = `${currentPlayer}'s turn`
            let player2_indexOne = event.target.attributes[0].value[0]
            let player2_indexTwo = event.target.attributes[0].value[2]

            let row = columnCheck(player2_indexTwo)
            if (row){
                
                board[row][player2_indexTwo] = 'Y'
                console.log(board)

                let fallenCell = document.querySelector(`[cellIndex="${row}-${player2_indexTwo}"]`)
                console.log(fallenCell)
                fallenCell.classList.add('player-two')
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
for(let row=5; row>=0; row--){
if(board[row][column] ==''){
return row   
}
}
return -1
}
//this needs fix
function winningConditions(row,column){
if(board[row][column] =='R','R','R','R'){

}
}

function resetGame(){
    currentPlayer= "player_one"
    cell.forEach(cell => {
        cell.classList.remove('player-one')
        cell.classList.remove('player-two')   
    })
    statusText.textContent = `${currentPlayer}'s turn`
    board=[ 
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""]
        ]
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