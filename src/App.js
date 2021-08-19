import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/Signup';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/traverse-web/" exact  component={Home}/>
          <Route path="/traverse-web/services" component={Services}/>
          <Route path="/traverse-web/products" component={Products}/>
          <Route path="/traverse-web/sign-up" component={SignUp}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
