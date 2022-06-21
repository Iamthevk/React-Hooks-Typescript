import React from 'react';
import './App.css';
import Counter from './components/Counter';
// import Issues from './components/Lifecycle_class';
import Issues from './components/Lifecycle_hooks';
function App() {

  return (
    <div className="App">
      <Counter/>
      <Issues/>
    </div>
  );
}

export default App;
