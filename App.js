import './App.css';
import Form from './Components/Form';
import List from './Components/List';
import React, { useState } from 'react';


function App() {
  return (
    <div className="App">
    <header className="App-header">
    To-Do List
    </header>
    <Form />
    <List />
    </div>
  );
}

export default App;
