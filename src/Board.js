import React, {Component} from "react";
import Cell from "./Cell";

class Board extends Component {
    constructor(props) {
        super(props);
    }

    /** Render game board */
    render() {
        return (
            <table className='Board'>
                <tbody>
                <tr>
                    <Cell/>
                    <Cell/>
                    <Cell/>
                </tr>
                </tbody>
            </table>
        );
    }
}


export default Board;
