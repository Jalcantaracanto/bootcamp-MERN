import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <h1>Hello Dojo!</h1> 
    <h2>Things I need to do:</h2>
    <div id="checklist">
      <div className='check-item'>
        <input type="checkbox"/>
        <label>Learn React</label>
      </div>
      <div className='check-item'>
        <input type="checkbox"/>
        <label>Climb Mt. Everest</label>
      </div>
      <div className='check-item'>
        <input type="checkbox"/>
        <label>Run a marathon</label>
      </div>
      <div className='check-item'>
        <input type="checkbox"/>
        <label>Feed the dogs</label>
      </div>
    </div>
    
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();