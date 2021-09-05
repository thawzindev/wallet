import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core' //allows later to just use icon name to render-them
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCog, faBell, faEye, faMobile, faMobileAlt } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCog, faBell, faEye, faMobile, faMobileAlt)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
