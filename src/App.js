import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//* Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'popper.js'
import 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

//* Components
import LandingPage from './pages/LandingPage/LandingPage';
import RegisterPage from './pages/RegisterPage/Register';
import HomePage from './pages/HomePage/HomePage';
import BandPage from './pages/BandPage/BandPage';
import Filter from './pages/StaticsPage/Filter';
import Recomended from './pages/StaticsPage/Recomended';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/recomendados">
            <Recomended />
          </Route>
          <Route exact path="/filtros">
            <Filter />
          </Route>
          <Route exact path="/firsttoeleven">
            <BandPage />
          </Route>
          <Route exact path="/publico">
            <HomePage />
          </Route>
          <Route exact path="/inicio">
            <HomePage />
          </Route>
          <Route exact path="/registro">
            <RegisterPage />
          </Route>
          <Route exact path="/">
            <LandingPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
