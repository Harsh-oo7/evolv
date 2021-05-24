import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Admin from './Admin';
import Home from './Home';
import Login from './Login';

function App() {
  return (
    <Router>
    <div className="app">
      <Switch>
        
        <Route path="/admin">
          <Admin/>
        </Route>

        <Route path="/login">
          <Login/>
        </Route>

        <Route exact path="/">
          <Home/>
        </Route>

      </Switch>
    </div>
  </Router>
  );
}

export default App;
