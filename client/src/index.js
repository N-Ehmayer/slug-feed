import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import registerServiceWorker from './registerServiceWorker';
import store from './store.js'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/docs/css/mdb.min.css';

import './index.css';

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
, document.getElementById('root'));
registerServiceWorker();
