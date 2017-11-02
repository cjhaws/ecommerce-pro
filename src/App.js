import React from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Pages/Home'
import Bettermarriage from './Pages/Bettermarriage'
import Bowlbrite from './Pages/Bowlbrite'
import Chinpilla from './Pages/Chinpilla'
import NeckMagic from "./Pages/NeckMagic";
import PottyPutter from "./Pages/PottyPutter";
import SaunaPants from "./Pages/SaunaPants";
import Snuggie from "./Pages/Snuggie";
import TurbieTwist from "./Pages/TurbieTwist";
import WaxVac from "./Pages/WaxVac";
import Checkout from './Pages/Checkout'


export default () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/better-marriage" component={Bettermarriage}/>
            <Route path="/bowl-brite" component={Bowlbrite}/>
            <Route path="chinpilla" component={Chinpilla} />
            <Route path="Checkout" component={NeckMagic} />
            <Route path="Checkout" component={PottyPutter} />
            <Route path="Checkout" component={SaunaPants} />
            <Route path="Checkout" component={Snuggie} />
            <Route path="Checkout" component={TurbieTwist} />
            <Route path="Checkout" component={WaxVac} />
            <Route path="checkout" component={Checkout} />
        </Switch>
    </Router>
)