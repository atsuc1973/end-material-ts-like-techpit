import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Base from './Base';
// import ProductMaterial from './ProductMaterial';

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route exact path="/" component={Base} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
