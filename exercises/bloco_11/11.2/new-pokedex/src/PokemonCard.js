import React from 'react';
import PropTypes, { string } from 'prop-types';

class PokemonCard extends React.Component {
  render() {
    const { id, name, type, averageWeight, image } = this.props.pokemon;
    return (
      <div className="pokemon-card" style={{backgroundColor: `var(--card-bg-color-${type})`}}>
        <div className="pokemon-data">
          <p>{ name }</p>
          <p>{ type }</p>
          <p>Average weight: { averageWeight.value }</p>
        </div>
        <div className="pokemon-image">
          <img src={image} />
        </div>
      </div>
    )
  }
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
    }),
    image: PropTypes.string
  })
}

export default PokemonCard;