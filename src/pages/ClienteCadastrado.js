import React from 'react';
import { connect } from 'react-redux';

class ClienteCadastrado extends React.Component {
  render() {
    const { email, senha } = this.props;
    console.log(email);
    return (
      <div>
        {email && senha ? (
          <div>
            email: {email} senha: {senha}
          </div>
        ) : (
          'usuario nao cadastrado'
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    email: state.login.value.email,
    senha: state.login.value.senha,
  };
}

export default connect(mapStateToProps)(ClienteCadastrado);
