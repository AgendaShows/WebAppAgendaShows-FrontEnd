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
import Register from './pages/RegisterPage/Register';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/registro">
            <Register />
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
