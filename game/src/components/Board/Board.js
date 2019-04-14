'use strict';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import styles from  './Board.module.css';
import Square from '../Square/Sqaure';

class Board extends Component {
    
    renderSquare = (i) => {
        return <Square value={i} />
    }
    render(){
        return(
            <div></div>
        );
    }
}

export default Board;