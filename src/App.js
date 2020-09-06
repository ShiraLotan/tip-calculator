import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Bill from './components/Bill_input/Bill';

function App() {
  return (
    <div className="App">
    <Header/>
    <Bill/>
    </div>
  );
}

export default App;
