'use-strict';
import React, {Component} from 'react';
import styles from './Game.module.css';
import Board from '../Board/Board';

class Game extends Component {
    constructor (props){
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }], 
            player : "X",
            stepNumber: 0,
        }
    }
    jumpTo = (step) => {
        this.setState({
            stepNumber: step,
            player: (step % 2 === 0) ? 'X' : 'O',
        })
    }

    handleClick = (i) => {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length -1];
        const squares = current.squares.slice();
        if(squares[i] === null && this.calculateWinner() === null){
            squares[i] = this.state.player;
            let player = (this.state.player === "X") ? "O" : "X";
            this.setState({
                history: history.concat([{squares}]), 
                player,
                stepNumber: history.length,
            });
        }
    }
    calculateWinner = () => {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length -1];
        const squares = current.squares.slice();
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
    render (){
        const {history, player} = this.state;
        const current = history[this.state.stepNumber];
        const winner = this.calculateWinner();
        const status = (winner) ? `Winner: ${winner}` : `Next Player: ${player}`;
        const moves = history.map((step,move) => {
            const desc = (move) 
                ? `Go to move # ${move}`
                : 'Go to game start';
                return (
                    <li key={move}>
                        <button
                            onClick={()=> this.jumpTo(move)}
                        >
                        {desc}
                        </button>
                    </li>
                );
        });
        
        return(
            <div>
                <div className={styles.title}>Tic Tac Toe</div>
                <div className={styles.game}>
                    <div className={styles.gameBoard}>
                        <Board
                            squares={current.squares}
                            handleClick={(i) => this.handleClick(i)}
                        />
                    </div>
                    <div className={styles.gameInfo}>
                        <div className={styles.status}>{status}</div>
                        <ol>{moves}</ol>
                    </div>
                </div>
            </div>
        );
    }
}

export default Game;