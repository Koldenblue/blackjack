// Connect 4 script

"use strict"

// change this later to have the user input the colors
function main() {
    let player1 = new Player('red');
    let player2 = new Player('blue');

    // Create a new Board with 7 rows and 6 columns
    // Later add a button to do this, with a column and row selector
    let myBoard = new Board(6, 7);
    console.log(myBoard.boardArray);
}

class Player {
    constructor(color) {
        this.color = color;
    }
}

// Creates a new Connect 4 board
class Board {
    constructor(rows, columns) {
        this.rows = rows;
        this.columns = columns;
        this.boardArray = [];

        // make Board array into a 2d array conisting of row arrays, each of which contain columns
        // initialize with null Pieces of no color
        for (let r = 0; r < rows; r++) {
            let rowArray = [];
            for (let c = 0; c < columns; c++) {
                let nullPiece = new Piece(null);
                rowArray.push(nullPiece);
            }
            this.boardArray.push(rowArray);
        }

        // for each board space (class='board-space') add an id. Board spaces in the html will be in the order of 
        // row 0 col 0, row 0 col 1, row 0 col 2, etc.
        let spaces = document.getElementsByClassName('board-space');
        let spaceNum = 0;
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < columns; c++) {
                spaces[spaceNum].setAttribute("id", "row-" + r + "-col-" + c);
                spaceNum++;
            }
        }
    }
}

/**
 * constructor for a piece
 */
class Piece {
    constructor(color) {
        this.color = color;
    }
}

class Position extends Piece {
    constructor(x, y) {
        super(color);
        this.row = x;
        this.column = y;
    }

}

function checkWin(boardArray) {

}

function turn(player) {
    let currentPiece = new Piece(playerColor);

    // the user should be able to click on a container to put a piece there.
    // once clicked, add piece to array.
}


main();