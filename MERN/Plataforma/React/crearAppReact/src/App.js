import './App.css';
import React from 'react'
import MyNewComponent from './components/MyNewComponent'


function App() {
  return (
    <div className="App">
      <MyNewComponent someText={'Hello World'}/>
      <MyNewComponent someText={'Test'}/>
    </div>
  );
}

export default App;
