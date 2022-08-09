import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Product from './pages/Product';
import NotFound from './pages/NotFound';
import * as Styled from './App.styles';

function App() {
  return (
    <Styled.Main>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/carrinho" component={ Cart } />
        <Route path="/produto/:id" component={ Product } />
        <Route path="/404" component={ NotFound } />
        <Redirect to="/404" />
      </Switch>
    </Styled.Main>
  );
}

export default App;
