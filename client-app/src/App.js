import React from 'react';
import Editor from './components/Editor';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="app-content">
        <Editor
          contents={[
            { x:2, y:2, type:'City'}
          ]}
        />       
      </header>
    </div>
  );
}

export default App;
