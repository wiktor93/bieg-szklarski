import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/global.css';
import detectIE from './utils/detectInternetExplorer.js';

detectIE();
ReactDOM.render(<App />, document.getElementById('root'));
