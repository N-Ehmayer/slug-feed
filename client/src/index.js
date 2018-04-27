import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import store from './store.js';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home.jsx';
import Session from './components/Session.jsx';
import ShowArticle from './components/ShowArticle.jsx';
import SortByTag from './components/SortByTag.jsx';

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/docs/css/mdb.min.css';

import './index.css';

const routesList = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/articles/:id",
    component: ShowArticle
  },
  {
    path: "/tags/:id",
    component: SortByTag
  }
]

const routes = routesList.map((route) => {
  return (
    <Route exact path={route.path} component={route.component}/>
  );
})
ReactDOM.render(
  <Router>
    <Provider store={store}>
      <React.Fragment>
        {routes}
      </React.Fragment>
    </Provider>
  </Router>
, document.getElementById('root'));

registerServiceWorker();
