import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import store from './store.js';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home.jsx';
import Session from './components/Session.jsx';
import ShowArticle from './components/ShowArticle.jsx';

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/docs/css/mdb.min.css';

import './index.css';

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <React.Fragment>
        <Route path="/" component={Session}/>
        <Route exact path="/" component={Home} />
        <Route exact path="/articles/:id" component={ShowArticle} />
      </React.Fragment>
    </Provider>
  </Router>
, document.getElementById('root'));
registerServiceWorker();
