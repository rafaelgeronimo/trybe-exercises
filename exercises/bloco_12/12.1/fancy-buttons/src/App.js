import React from 'react';
import './App.css';
import Button from './components/Button';

function handleClick1() {
  console.log('Botão 1 clicado')
}
function handleClick2() {
  console.log('Botão 2 clicado')
}
function handleClick3() {
  console.log('Botão 3 clicado')
}

class App extends React.Component {
  render() {
    return (
      <div>
        <button onClick={handleClick1}>Botão 1</button>
        <button onClick={handleClick2}>Botão 2</button>
        <button onClick={handleClick3}>Botão 3</button>
        <Button/>
      </div>
    );
  }
}

export default App;
