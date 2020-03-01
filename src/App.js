import React from 'react';
import router from './router';
import { Globalstyle } from './style'
import './App.css';

function App() {
  return (
    <div className="App">
      <Globalstyle/>
      {router()}
    </div>
  );
}

export default App;
