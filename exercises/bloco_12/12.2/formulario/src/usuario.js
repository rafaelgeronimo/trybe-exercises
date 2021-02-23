import { Component } from 'react';

class Usuario extends Component {
  render() {
    const { value } = this.props;
    return (
      <label>
          Usuário: <br/>
          <input 
            type="text"
            name="usuario"
            value={value}
            onChange={this.handleChange}
          />
        </label>
    )
  }
}

export default Usuario;