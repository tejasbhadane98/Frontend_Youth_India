import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import PokemonListPage from './pages/PokemonListPage';
import PokemonDetailsPage from './pages/PokemonDetailsPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={PokemonListPage} />
        <Route path="/pokemon/:id" component={PokemonDetailsPage} />
      </Switch>
    </Router>
  );
}

export default App;
