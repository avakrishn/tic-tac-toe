'use strict';

import React, {Component} from 'react';
import styles from './Square.module.css';

class Square extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: null,
        }
    }
    render() {
        const {value} = this.state;
        return(
            <button 
                className={styles.square} 
                onClick={()=> this.setState({value: 'X'})}
            >
                {value}
            </button>
        );
    }
}

export default Square;