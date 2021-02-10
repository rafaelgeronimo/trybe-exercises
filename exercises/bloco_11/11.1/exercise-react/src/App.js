import logo from './logo.svg';
import './App.css';

/* const task = (value) => {
  return (
    `<li>${value}</li>`
  );
} */

const tasks = [
  'comprar batata',
  'ver a aurora boreal',
  'alimentar o ratata',
  'saltar de paraquedas',
  'lustrar os sapatos do hamster',
  'espanar as pirâmides do Egito',
  'comer doce sem ficar com sono',
  'montar um camelo de lego',
  'encher o submarino de água benta',
  'comemorar o dia de São Patrício em Osasco',
  'jogar um iceberg num copo de whiskey'
]

function App() {
  return (
    <div className="App">
      <ul>
        {tasks.map(task => <li>{ task }</li>)}
      </ul>
    </div>
  );
}

export default App;
