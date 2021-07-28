import React from 'react';
import { connect } from 'react-redux';

class ClienteCadastrado extends React.Component {
  listUsers(users) {
    return (
      <ul>
        {users.map(({ nome, idade, email }, index) => (
          <li key={index}>
            <div>
              NOME: {nome} IDADE: {idade} EMAIL: {email}
            </div>
          </li>
        ))}
      </ul>
    );
  }

  checkLogin() {
    const { registro } = this.props;
    if (registro.length > -1) return this.listUsers(registro);
    return <div>Não cadastrado</div>;
  }

  render() {
    return this.checkLogin();
  }
}

function mapStateToProps(state) {
  return {
    registro: state.registro,
  };
}

export default connect(mapStateToProps)(ClienteCadastrado);
