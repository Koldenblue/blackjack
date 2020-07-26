// Connect 4 script

"use strict"

function main() {
    ;
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

let myBoard = new Board(7, 6);
console.log(myBoard.boardArray);