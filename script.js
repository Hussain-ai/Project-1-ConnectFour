//Variables
const playerStatus = document.querySelector('#playerTurn')
const redScore = document.querySelector('#redScore')
const yellowScore = document.querySelector('#yellowScore')
const table = document.querySelector('#table')
const cell = document.querySelectorAll('.cell')
// const player1 = document.querySelector('.player-one')
// const player2 = document.querySelector('.player-two')
const resetBtn = document.querySelector('#resetBtn')
const winningArrays = [
    [0, 1, 2, 3],
    [41, 40, 39, 38],
    [7, 8, 9, 10],
    [34, 33, 32, 31],
    [14, 15, 16, 17],
    [27, 26, 25, 24],
    [21, 22, 23, 24],
    [20, 19, 18, 17],
    [28, 29, 30, 31],
    [13, 12, 11, 10],
    [35, 36, 37, 38],
    [6, 5, 4, 3],
    [0, 7, 14, 21],
    [41, 34, 27, 20],
    [1, 8, 15, 22],
    [40, 33, 26, 19],
    [2, 9, 16, 23],
    [39, 32, 25, 18],
    [3, 10, 17, 24],
    [38, 31, 24, 17],
    [4, 11, 18, 25],
    [37, 30, 23, 16],
    [5, 12, 19, 26],
    [36, 29, 22, 15],
    [6, 13, 20, 27],
    [35, 28, 21, 14],
    [0, 8, 16, 24],
    [41, 33, 25, 17],
    [7, 15, 23, 31],
    [34, 26, 18, 10],
    [14, 22, 30, 38],
    [27, 19, 11, 3],
    [35, 29, 23, 17],
    [6, 12, 18, 24],
    [28, 22, 16, 10],
    [13, 19, 25, 31],
    [21, 15, 9, 3],
    [20, 26, 32, 38],
    [36, 30, 24, 18],
    [5, 11, 17, 23],
    [37, 31, 25, 19],
    [4, 10, 16, 22],
    [2, 10, 18, 26],
    [39, 31, 23, 15],
    [1, 9, 17, 25],
    [40, 32, 24, 16],
    [9, 17, 25, 33],
    [8, 16, 24, 32],
    [11, 17, 23, 29],
    [12, 18, 24, 30],
    [1, 2, 3, 4],
    [5, 4, 3, 2],
    [8, 9, 10, 11],
    [12, 11, 10, 9],
    [15, 16, 17, 18],
    [19, 18, 17, 16],
    [22, 23, 24, 25],
    [26, 25, 24, 23],
    [29, 30, 31, 32],
    [33, 32, 31, 30],
    [36, 37, 38, 39],
    [40, 39, 38, 37],
    [7, 14, 21, 28],
    [8, 15, 22, 29],
    [9, 16, 23, 30],
    [10, 17, 24, 31],
    [11, 18, 25, 32],
    [12, 19, 26, 33],
    [13, 20, 27, 34],
  ]
let board=[ 
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""]
    ]
let currentPlayer = "player_one"
let active = true
startGame()

function startGame(){
    if (active === true){
        console.log('startgame running')
        cell.forEach(cell => cell.addEventListener('click', fillCell))
        resetBtn.addEventListener('click', resetGame)
        playerStatus.textContent = ` Player Red's turn`
        redScore.textContent = `Red Score: ${0}`
        yellowScore.textContent = `Yellow Score: ${0}`
    }
}

function columnCheck(clickedCell){
    //check if cell is empty
    if(clickedCell.classList.length<2){
        console.log(clickedCell.id)
        let clickIdNum = parseInt(clickedCell.id)+7

        console.log(String(clickIdNum))

        let str = String(clickIdNum)
        
        let cellBelow = document.getElementById(str)
        console.log(cellBelow)
        if(clickedCell.id >=35 || cellBelow.classList.length===2 ){
            return true
        }
    }
}

function fillCell(clickedCell){
    if (currentPlayer === "player_one") {
        
        clickedCell.target.classList.add('color-red')
        console.log(board)
        playerStatus.textContent = ` Player Yellow's turn`
        currentPlayer= "player_two"
        
        // redScore.textContent= redScore
        
    }else{
        
        console.log('current player else')
        clickedCell.target.classList.add('color-yellow')
        
        playerStatus.textContent = ` Player Red's turn`
        currentPlayer = "player_one"
    }
}

function cellClicked(event){
    let clickedCell = event.target
    if(columnCheck(clickedCell)){
        fillCell(clickedCell)
    }
}

function scoring(event){
    if (winningArrays=== board){
        
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
