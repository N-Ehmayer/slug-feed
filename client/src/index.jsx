require("../styles/application.scss");
require("../node_modules/mdbreact/docs/css/mdb.min.css");
require("font-awesome/css/font-awesome.min.css");

import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import App from './App.jsx';
const root = document.getElementById('react-root');

ReactDOM.render(<App/>, root);