

const boardSize = document.querySelector('#thegridsize');
const button = document.querySelector("#execute");

//define the gameboard
const gameBoard = document.createElement('div');
gameBoard.className = 'board';

//add the main gameboard
document.body.appendChild(gameBoard);
function buildGrid(size) {
    
    //clear the gameBoard
    gameBoard.innerHTML = '';

    //build rows

    for (let i = 0; i < size; i++) {
        const newRow = document.createElement('div'); //newRow in memroy
        newRow.className = "row"; //class the row
        gameBoard.appendChild(newRow); //in the main div, add a new row

        for (let j = 0; j < size; j++) {
            const newTile = document.createElement('div');
            newTile.className = "tile";
            // newTile.textContent = "o";
            newRow.appendChild(newTile);
        }
    }
    
}

//Produce a board
button.addEventListener('click', () => {
    buildGrid(Number(boardSize.value)); //builds grid
    boardSize.value = ""; //clears number
})

//randomized color
function randomColor() {
    const r = Math.floor((Math.random()*256));
    const g = Math.floor((Math.random()*256));
    const b = Math.floor((Math.random()*256));
    return `rgb(${r}, ${g}, ${b})`
}

//make the etch-a-sketch feature
const activeBoard = document.querySelector('.board');

activeBoard.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('tile')) {
        e.target.style.backgroundColor = randomColor();
        const current = parseFloat(getComputedStyle(e.target).opacity) || 0;
        const next = Math.min(current + 0.1, 1);
        e.target.style.opacity = next;
    }
})