import React from 'react';

class Button extends React.Component{
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      numeroDeCliques: 0
    }
  }
  handleClick() {
    /* console.log(this);
    console.log('Clicou'); */
    this.setState((estadoAnterior, _props) => ({
        numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))
  }
  render() {
    return (
      <div>
        {/* {console.log(this)} */}
        <button onClick={this.handleClick}>{this.state.numeroDeCliques}</button>
      </div>
    )
  }
}

export default Button;
