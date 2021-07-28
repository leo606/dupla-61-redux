import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <>
        <h3>Olá, faça login:</h3>
        <Link to="/login">Fazer Login</Link>
        <h3>Registre-se</h3>
        <Link to="/register">Registrar</Link>
      </>
    );
  }
}

export default Home;
