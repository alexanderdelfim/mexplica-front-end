import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Cadastrar from './pages/Cadastrar';


export default function Roures() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/cadastrar" component={Cadastrar} />

            </Switch>
        </BrowserRouter>
    )
}
