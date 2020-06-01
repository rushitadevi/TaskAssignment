import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MenuDisplay from "./components/MenuDisplay.jsx"
import Mn from "./components/mn.jsx"
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <MenuDisplay />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
