import React from "react";

import {BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from "./Home";
import Counter from "./Counter";
import Mojjo from "./Mojjo";
import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";
import InputComponent from "./Input";

import "./index.css";

const App = () => (
    <div>
        <div className="container">
            <BrowserRouter>
                <Switch>
                    <Route exact={true} path="/" component={Home} />
                    <Route exaxt path="/counter" component={Counter} />
                    <Route exaxt path="/mojjo" component={Mojjo} />
                    <Route exact path="/congrats" component={Congrats} />
                    <Route exact path="/guessed-words" component={GuessedWords} />
                    <Route exact path="/input" component={InputComponent} />
                </Switch>
            </BrowserRouter>
        </div>
    </div>
);

export default App;
