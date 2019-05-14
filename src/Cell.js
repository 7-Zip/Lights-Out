import React, {Component} from 'react';
import './Cell.css';

class Cell extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <td className={"Cell"}/>
        )
    }
}

export default Cell
