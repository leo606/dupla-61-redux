import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import ClienteCadastrado from './pages/ClienteCadastrado';
import Register from './pages/Register';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/clients" component={ClienteCadastrado} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/" component={Home} />
    </Switch>
  );
}

export default App;
