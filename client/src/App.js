import React from 'react';
import Navbar from './Components/navbar/Navbar';
import Header from './Components/header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
        <Navbar />
          <Switch>
              <Route exact path="/" component={Header} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
