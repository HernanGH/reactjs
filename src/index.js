import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Clase11 from './components/Clase11';
import reportWebVitals from './reportWebVitals';
import AfterClase11 from './components/AfterClase11';

ReactDOM.render(
  <React.StrictMode>
    <>
      <App />
      {/* <Clase11 /> */}
      {/* <AfterClase11 /> */}
    </>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
