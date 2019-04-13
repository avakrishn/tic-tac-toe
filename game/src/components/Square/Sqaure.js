'use strict';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import styles from './Square.module.css';

class Square extends Component {
    render() {
        value = this.props;
        return(
            <button className={styles.square}>
                {value};
            </button>
        );
    }
}

export default Square;