// Connect 4 script

"use strict"

// change this later to have the user input the colors
function main() {
    let player1 = new Player('red');
    let player2 = new Player('blue');

    // Create a new Board with 7 rows and 6 columns
    // Later add a button to do this, with a column and row selector
    let myBoard = new Board(7, 6);
    console.log(myBoard.boardArray);
}

class Player {
    constructor(color) {
        this.color = color;
    }
}

// Creates a new Connect 4 board
class Board {
    constructor(columns, rows) {
        this.columns = columns;
        this.rows = rows;
        this.boardArray = [];

        for (let c = 0; c < columns; c++) {
            let colArray = [];
            for (let r = 0; r < rows; r++) {
                colArray.push(null);
            }
            this.boardArray.push(colArray);
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

function turn(player) {
    let currentPiece = new Piece(playerColor);

    // the user should be able to click on a container to put a piece there. Containers should glow (add shadow) on hover.
    // once clicked, add piece to array.
}


