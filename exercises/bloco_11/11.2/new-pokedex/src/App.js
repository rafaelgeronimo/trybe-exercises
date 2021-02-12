import React from 'react';
import './App.css';
import PokemonCard from './PokemonCard';
import pokemons from './data';

class App extends React.Component {
  render () {
    return (
     <div className="pokedex">
       <h1>Pokédex</h1>
       <div className="pokemon-list">
        {pokemons.map((pokemon, index) => <PokemonCard pokemon={pokemon} key={index} />)}
       </div>
     </div> 
    );
  }
}

export default App;
