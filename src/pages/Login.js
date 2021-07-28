import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { addLogin } from '../redux/actions/index';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      senha: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({ [name]: value });
  }

  handleClick() {
    const { email, senha } = this.state;
    const { login } = this.props;
    login({ email, senha });
  }

  render() {
    const { redirecionar } = this.state;

    return (
      <>
        {redirecionar ? <Redirect to="/clientecadastrado"></Redirect> : null}
        <form>
          <label htmlFor="email-input">
            Email
            <input
              type="email"
              id="email-input"
              name="email"
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor="pass-input">
            Senha
            <input
              type="password"
              id="pass-input"
              name="senha"
              onChange={this.handleChange}
            />
          </label>
          <Link to="/clients">
            <input type="submit" value="Enviar" onClick={this.handleClick} />
          </Link>
        </form>
      </>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    login: (objLogin) => dispatch(addLogin(objLogin)),
  };
}

export default connect(null, mapDispatchToProps)(Login);
