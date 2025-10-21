import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <ItemListContainer greeting="¡Bienvenidos a Rodriguez Store!" />
      </main>
    </div>
  );
}

export default App;