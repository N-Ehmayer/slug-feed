import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import store from './store.js'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './components/Home.jsx'
import ShowArticle from './components/ShowArticle.jsx'

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/article/1" component={ShowArticle} />
      </Switch>
    </Provider>
  </Router>
, document.getElementById('root'));
registerServiceWorker();
