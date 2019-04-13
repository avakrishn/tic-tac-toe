'use strict';

import React, {Component} from 'react';
import styles from  './Board.module.css';
import Square from '../Square/Sqaure';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            player : "X",
        }
        
    }
    
    renderSquare = (i) => {
        return <Square value={i} />
    }
    render(){
        const {player} = this.state;
        const status = `Next Player: ${player}`
        return(
            <div>
                <div className={styles.status}>{status}</div>
                <div className={styles.boardRow}>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className={styles.boardRow}>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className={styles.boardRow}>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>

            </div>
        );
    }
}

export default Board;