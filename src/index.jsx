require("../styles/application.scss");

// Bootstrap.
require('script-loader!uglify-loader!../styles/js/bootstrap.js');

// MDB modules
require("font-awesome/css/font-awesome.min.css");
require("mdbreact/docs/css/mdb.min.css");
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
const root = document.getElementById('react-root');

ReactDOM.render(<App/>, root);

