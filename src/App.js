import React from 'react';
import './App.css'
import HomePage from './pages/Home';
import { Route, Switch } from 'react-router-dom';
import FindRootsPage from './pages/FindRoots';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <React.Fragment>
      <h1 className="text-8xl">
        The book of Mathematics
      </h1>
      <Navigation>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/findRoots">
            <FindRootsPage />
          </Route>
        </Switch>
      </Navigation>
    </React.Fragment>
  );
}

export default App;
