import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Checkout from './Pages/Checkout'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="Products" component={Products} />
        <Route path="Checkout" component={Checkout} />
    </Route>
);