import React, {Component} from "react";
import Cell from "./Cell";
import './Board.css';


/** Game board of Lights out.
 *
 * Properties:
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of Cells
 *
 **/

class Board extends Component {
    static defaultProps = {
        nrows: 3,
        ncols: 3,
        chanceLightStartsOn: 0.25
    }
    constructor(props) {
        super(props);
        this.state = {
            hasWon: false,
            board: [[true, true, false], [false, true, false], [false, false, false]]
        };
    }

    /** Create game board based on board state */
    makeTable() {
        let tblBoard = [];
        for (let y = 0; y < this.props.nrows; y++) {
            let row = [];
            for (let x = 0; x < this.props.ncols; x++) {
                let coord = `${y}-${x}`;
                row.push(
                    <Cell
                        key={coord}
                        isLit={this.state.board[y][x]}
                    />
                );
            }
            tblBoard.push(<tr key={y}>{row}</tr>);
        }
        return (
            <table className='Board'>
                <tbody>{tblBoard}</tbody>
            </table>
        );
    }

    /** Render game board */
    render() {
        return (
            <div>
                {this.makeTable()}
            </div>
        );
    }
}


export default Board;
