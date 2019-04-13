'use strict';

import React, {Component} from 'react';
import styles from  './Board.module.css';
import Square from '../Square/Square';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            squares : Array(9).fill(null),
            player : "X",
        }
        
    }

    calculateWinner = () => {
        let squares = this.state.squares.slice();
        let winnerArray = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ]
        for(let i = 0; i < winnerArray.length; i++){
            const [a,b,c] = winnerArray[i];
            if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
                return squares[a];
            }
        }
        return null;
    }

    handleClick = (i) => {
        if(this.state.squares[i] === null && this.calculateWinner() === null){
            const squares = this.state.squares.slice();
            squares[i] = this.state.player;
            let player = (this.state.player === "X") ? "O" : "X";
            this.setState({squares, player});
        }
        
        
    }
    
    renderSquare = (i) => {
        return <Square value={this.state.squares[i]} onSquareClick={() => this.handleClick(i)} />
    }
    render(){
        const {player} = this.state;
        const winner = this.calculateWinner();
        const status = (winner) ? `Winner: ${winner}` : `Next Player: ${player}`;

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