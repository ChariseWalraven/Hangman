import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'typeface-indie-flower'

ReactDOM.render(
  <App className={'App'} />, document.getElementById('root'));
registerServiceWorker();
