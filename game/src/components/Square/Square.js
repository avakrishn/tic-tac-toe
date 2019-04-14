'use strict';

import React, {Component} from 'react';
import styles from './Square.module.css';

// function component (stateless)
const Square = (props) => {
    const {value, onSquareClick} = props;
    return(
        <button 
            className={styles.square} 
            onClick={()=> onSquareClick()}
        >
            {value}
        </button>
    );
}

export default Square;