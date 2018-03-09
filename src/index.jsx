require("../styles/application.scss");

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
const root = document.getElementById('react-root');

console.log(ReactDOM.render);

ReactDOM.render(<App/>, root);