'use strict';

import React, {Component} from 'react';
import styles from './Square.module.css';

class Square extends Component {
    render() {
        const {value, onSquareClick} = this.props;
        return(
            <button 
                className={styles.square} 
                onClick={()=> onSquareClick()}
            >
                {value}
            </button>
        );
    }
}

export default Square;