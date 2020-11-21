import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//* Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle';

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
          <Route path="/recomendados">
            <Recomended />
          </Route>
          <Route path="/filtros">
            <Filter />
          </Route>
          <Route path="/firsttoeleven">
            <BandPage />
          </Route>
          <Route path="/publico">
            <HomePage />
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/registro">
            <RegisterPage />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
