import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import store from './store'
import CssBaseline from '@material-ui/core/CssBaseline';
import 'typeface-indie-flower'

ReactDOM.render(
  <Provider store={store}>
    <CssBaseline>
      <App className={'App'} />
    </CssBaseline>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
