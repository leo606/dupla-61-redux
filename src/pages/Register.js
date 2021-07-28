import React from 'react';
import { addRegistro } from '../redux/actions/index';
import { connect } from 'react-redux';

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      idade: '',
      email: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({ [name]: value });
  }

  handleClick(event) {
    event.preventDefault();
    this.props.registro({ ...this.state });
  }

  render() {
    return (
      <form action="">
        <label htmlFor="input-name">
          Nome:
          <input
            type="text"
            id="input-name"
            name="nome"
            onChange={this.handleChange}
          />
        </label>

        <label htmlFor="input-idade">
          Idade:
          <input
            type="text"
            id="input-idade"
            name="idade"
            onChange={this.handleChange}
          />
        </label>

        <label htmlFor="input-email">
          Email:
          <input
            type="text"
            id="input-email"
            name="email"
            onChange={this.handleChange}
          />
        </label>

        <input type="submit" value="enviar" onClick={this.handleClick} />
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    registro: (objUser) => dispatch(addRegistro(objUser)),
  };
}

export default connect(null, mapDispatchToProps)(Register);
