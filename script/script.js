// Connect 4 script

"use strict"
const ROWS = 6;
const COLUMNS = 7;
const P1COLOR = 'red';
const P2COLOR = 'blue';
let player1Turn = true;

$(document).ready(main);

function main() {
    // change this later to have the user input the colors
    let player1 = new Player(P1COLOR);
    let player2 = new Player(P2COLOR);

    // Create a new Board with 7 rows and 6 columns
    // Later add a button to do this, with a column and row selector
    let myBoard = new Board(ROWS, COLUMNS);
}

class Position {
    constructor(x, y) {
        this.row = x;
        this.column = y;
    }
}

/*** constructor for a piece */
class Piece extends Position {
    constructor(x, y, color) {
        super(x, y);
        this.position = new Position(x, y);
        this.color = color;
    }
}

// Creates a new Connect 4 board
class Board {
    constructor(rows, columns) {
        this.rows = rows;
        this.columns = columns;
        // board array is a 2D array, where there are COLUMNS indices.
        // Each index corresponds to a column array, and each column array has ROWS number of rows.
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
                // console.log("spaces[spacenum] is " + spaces[spaceNum]);
                let nullPiece = new Piece(r, c, null);
                // can access any piece row with myBoard.boardArray[0][0].position.row
                rowArray.push(nullPiece);

                // add an id to each class="board-space" in the html
                spaces[spaceNum].setAttribute("id", "row-" + r + "-col-" + c);
                spaces[spaceNum].setAttribute("data-row", r);
                spaces[spaceNum].setAttribute("data-column", c);

                // also add the id names to an array
                this.idList.push("row-" + r + "-col-" + c);
                
                // next add an event listener to each empty class=board-space
                spaces[spaceNum].addEventListener("click", (event) => {
                    console.log(this)
                    console.log(event.target)
                    let targetSpace = event.target;
                    let targetColumn = targetSpace.getAttribute("data-column");
                    console.log(targetColumn)
                    this.move(targetColumn);
                });
                spaceNum++;
            }
            // put the row array, consisting of the 7 column spaces, into the 2D board array
            this.boardArray.push(rowArray);
        }
    }

    /** moves a piece. If move is invalid, return false. targetColumn is assigned by the event listener, and depends on the space clicked.*/
    move = (targetColumn) => {
        // arrow function binds board object to this function
        console.log("you clicked " + this);
        console.log(this)

        // run turn function upon board click
        if (player1Turn) {
            console.log("player 1 turn")
            console.log(this.boardArray);
            console.log(this)
            player1.turn(targetColumn, this, player1);
        }
        else {
            player2.turn(targetColumn, this, player2);
        }
        // pass appropriate col parameter to turn function, along with current player and the board state
    }

    /*** Checks the board array at the end of each turn to see if a player has won.
     * @param {Board} board Board object needed to access boardArray
     * @param {Position} newLocation The location where the new piece has been placed */
    checkWin(newPiece, playerColor) {
        console.log(this);
        console.log(newPiece);
        console.log(playerColor);
        for (let r = this.boardArray.length - 1; r >= 0; r--) {
            // for (let c = )
                
        }
        return true;
    }
}


class Player {
    constructor(color) {
        this.color = color;
    }

    /** * Lets a player choose a space by clicking. Once clicked on, the piece is put into that space, and the turn ends.
     * @param {Player} player a player object with a color
     * @param {Board} board a board object with lists of pieces and space ids */
    turn(col, board, player) {
        console.log("turn function")
        console.log("column is " + col)
        console.log(board)
        console.log("board is " + board.boardArray.length)
        // we have the column, the board object, and the player object.

        // Check if appropriate column in last row is empty. If not, check previous row. Repeat until empty space is found,
            // or top row is reached and no empty space found.
        // once clicked, add piece to array.
        // Bottom row is highest, and top row is 0! So r is calculated here in descending order.
        for (let r = board.boardArray.length - 1; r >= 0; r--) {
            if (board.boardArray[r][col].color === null) {
                let newPiece = new Piece(r, col, player.color);
                board.boardArray[r][col] = newPiece;
                let spaceId = "row-" + r + "-col-" + col;
                console.log("id is " + spaceId);
                $("#" + spaceId).attr("style", "background-color:" + player.color)
                break;
                // update graphical board state
                // remove eventListener
            }
        }
        if (player1Turn) {
            player1Turn = false;
            board.checkWin(newPiece, player1.color)
        }
        else {
            player1Turn = true;
            board.checkWin(newPiece, player2.color)
        }
    }
}



    // while (true) {
    //     let moveLocation = player1.turn;
    //     if (checkWin(myBoard, moveLocation)) {
    //         break;
    //     }
    //     moveLocation = player2.turn;
    //     if (checkWin(myBoard, moveLocation)) {
    //         break;
    //     }
    // }
