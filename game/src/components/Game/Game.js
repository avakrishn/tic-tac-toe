'use-strict';
import React, {Component} from 'react';
import styles from './Game.module.css';
import Board from '../Board/Board';

class Game extends Component {
    render (){
        return(
            <div className={styles.game}>
                <div className={styles.gameBoard}>
                    <Board/>
                </div>
            </div>
        );
    }
}

export default Game;