import React from "react";

import {BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from "./Home";
import Counter from "./Counter";
import Props from "./Counter";

import "./index.css";

const App = () => (
    <div>
        <div className="container">
            <BrowserRouter>
                <Switch>
                    <Route exact={true} path="/" component={Home} />
                    <Route exaxt path="/counter" component={Counter} />
                    <Route exact path="/props" component={Props} />
                </Switch>
            </BrowserRouter>
        </div>
    </div>
);

export default App;
