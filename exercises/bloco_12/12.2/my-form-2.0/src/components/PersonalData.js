import { Component } from 'react';
import './PersonalData.css';

class PersonalData extends Component {
  render()   {
    const { handleChange} = this.props;
    return (
      <fieldset className="personal-data">
        <div className="input-name">
          <label htmlFor="name">
            Nome:
          </label>
          <input 
            type="text"
            name="name"
            id="name"
            maxLength="40"
            onChange={handleChange}
            placeholder="Digite seu nome completo"
          />
        </div>
        <div className="input-email">
          <label htmlFor="email">
            E-mail:
          </label>
          <input 
            type="email"
            name="email"
            id="email"
            maxLength="50"
            onChange={handleChange}
            placeholder="Informe o endereço de e-mail"
            required
          />
        </div>
        <div className="input-cpf">
          <label htmlFor="CPF">
            CPF:
          </label>
          <input 
            type="text"
            name="CPF"
            id="CPF"
            maxLength="11"
            onChange={handleChange}
            placeholder="Apenas números"
            required
          />
        </div>
        <div className="input-address">
          <label htmlFor="address">
            Endereço:
          </label>
          <input 
            type="text"
            name="address"
            id="address"
            maxLength="200"
            onChange={handleChange}
            placeholder="Digite o endereço completo"
            required
          />
        </div>
        <div className="input-city">
          <label htmlFor="city">
            Cidade:
          </label>
          <input 
            type="text"
            name="city"
            id="city"
            maxLength="28"
            onChange={handleChange}
            placeholder="Informe a cidade"
            required
          />
        </div>
        <div className="input-uf">
          <label htmlFor="UF" className="label">
            UF:
          </label>
          <div class="select">
            <select 
              className="label"
              name="UF" 
              id="UF">
                <option value="" selected disabled hidden>Selecione</option>
            </select>
          </div>
        </div>
      </fieldset>
    )
  }
}

export default PersonalData;
