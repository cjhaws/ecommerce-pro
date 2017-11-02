import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './Pages/Home';
import BMB from './Pages/Bettermarriage';
import BowlB from './Pages/Bowlbrite'
import Chinpilla from './Pages/Chinpilla'
import NeckMagic from "./Pages/NeckMagic";
import PottyPutter from "./Pages/PottyPutter";
import SaunaPants from "./Pages/SaunaPants";
import Snuggie from "./Pages/Snuggie";
import TurbieTwist from "./Pages/TurbieTwist";
import WaxVac from "./Pages/WaxVac";
import Checkout from './Pages/Checkout'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="better-marriage" component={BMB} />
        <Route path="bowl-brite" component={BowlB} />
        <Route path="chinpilla" component={Chinpilla} />
        <Route path="Checkout" component={NeckMagic} />
        <Route path="Checkout" component={PottyPutter} />
        <Route path="Checkout" component={SaunaPants} />
        <Route path="Checkout" component={Snuggie} />
        <Route path="Checkout" component={TurbieTwist} />
        <Route path="Checkout" component={WaxVac} />
        <Route path="checkout" component={Checkout} />
    </Route>
);