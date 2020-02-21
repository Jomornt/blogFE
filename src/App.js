import React from 'react';
import router from './router';
import Header from './common/header'
import { Globalstyle, Content } from './style'
import './App.css';

function App() {
  return (
    <div className="App">
      <Globalstyle/>
      <Header />
      {router()}
    </div>
  );
}

export default App;
