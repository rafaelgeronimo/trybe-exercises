import { Component } from 'react';
import './App.css';
import PersonalData from './components/PersonalData';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      name: '',
      email: '',
      CPF: '',
      address: '',
      city: '',
      UF: '',
      homeType: ''
    }
  }

  handleChange({ target }) {
    const { name, value } = target;
    /* const value = target.type === 'checkbox' ? target.checked : target.value; */
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className="App">
        <PersonalData handleChange={this.handleChange} />
      </div>
    );
  }
}

export default App;
