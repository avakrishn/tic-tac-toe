import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/Game/Game';
import styles from './index.module.css';

document.body.style = styles.body;


ReactDOM.render(<Game/>, document.getElementById('root'));
