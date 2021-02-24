import { Component } from 'react';
import Usuario from './usuario';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        usuario: '',
        email: '',
        lembrar: false
      }
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    })
  }
  render() {
    return (
      <div className="App">
        <h2>Login</h2>
        <Usuario value={this.state.usuario} />
        <label>
          Email: <br/>
          <input 
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </label>
        <label>
          <input 
            type="checkbox"
            name="lembrar"  
            value={this.state.lembrar}
            onChange={this.handleChange}
          />
          Lembrar Senha 
        </label>
        <button>Entrar</button>
      </div>
    );
  }
}

export default App;
