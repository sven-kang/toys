import React from 'react';
import './App.css';
import ToDoCard from './components/ToDoCard/ToDoCard';

function App() {
  return (
    <div className="App" data-testid="app">
      <ToDoCard />
    </div>
  );
}

export default App;
