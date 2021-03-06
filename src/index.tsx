import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import store from './store';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
<Provider store={store}>
  <Router>
    <App />
  </Router>
</Provider>, document.getElementById('root'));
serviceWorker.unregister();
