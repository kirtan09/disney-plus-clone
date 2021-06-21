import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { Switch, Route } from 'react-router-dom';
import Details from './components/Details/Details';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/details/:id" component={Details} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
