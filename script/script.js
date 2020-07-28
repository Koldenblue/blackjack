// Connect 4 script

"use strict"
const ROWS = 6;
const COLUMNS = 7;
const P1COLOR = 'red';
const P2COLOR = 'blue';

// change this later to have the user input the colors
function main() {
    let player1 = new Player(P1COLOR);
    let player2 = new Player(P2COLOR);

    // Create a new Board with 7 rows and 6 columns
    // Later add a button to do this, with a column and row selector
    let myBoard = new Board(ROWS, COLUMNS);

    while (true) {
        player1.turn();
        player2.turn();
        if (checkWin(myBoard)) {
            break;
        }
    }
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
        this.idList = [];

        // for each board space (class='board-space') add an id. Board spaces in the html will be in the order of 
        // row 0 col 0, row 0 col 1, row 0 col 2, etc.
        let spaces = document.getElementsByClassName('board-space');
        let spaceNum = 0;
        for (let r = 0; r < this.rows; r++) {
            let rowArray = [];
            for (let c = 0; c < this.columns; c++) {
                // add a nullpiece for each column in the row
                let nullPiece = new Piece(null);
                rowArray.push(nullPiece);

                // add an id to each class="board-space" in the html
                spaces[spaceNum].setAttribute("id", "row-" + r + "-col-" + c);
                spaceNum++;

                // also add the id names to an array
                this.idList.push("row-" + r + "-col-" + c);

                // next add an event listener to each empty class=board-space
                spaces[spaceNum].addEventListener("click", this.move(c));
            }
            // put the row array, consisting of the 7 column spaces, into the 2D board array
            this.boardArray.push(rowArray);
        }
    }

    /** moves a piece and returns true. If move is invalid, return false.
     * @param {Number} col */
    move(col) {
        // pass appropriate col parameter to turn function, along with current player and the board state
    }
}



/*** constructor for a piece */
class Piece extends Position {
    constructor(color) {
        super(x, y);
        this.color = color;
    }
}

class Position {
    constructor(x, y) {
        this.row = x;
        this.column = y;
    }

}

/*** Checks the board array at the end of each turn to see if a player has won.
 * @param {Board} board Board object needed to access boardArray
 * @param {Position} newLocation The location where the new piece has been placed */
function checkWin(board, newLocation) {
    ;
}


/** * Lets a player choose a space by clicking. Once clicked on, the piece is put into that space, and the turn ends.
 * @param {Player} player a player object with a color
 * @param {Board} board a board object with lists of pieces and space ids */
function turn(col, player, board) {
    let currentPiece = new Piece(player.color);

    // Check if appropriate column in last row is empty. If not, check previous row. Repeat until empty space is found,
        // or top row is reached and no empty space found.
    // the user should be able to click on a container to put a piece there.
    // once clicked, add piece to array.
    // add event listener to each empty space
    for (let r = board.length - 1; r >= 0; r--) {
        if (board.boardArray[r][col].color === null) {
            let newPiece = new Piece(player.color);
            board.boardArray[r][col] = newPiece;
            // update graphical board state
            // remove eventListener
    }
}


main();