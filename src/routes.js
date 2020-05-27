import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Apresentacao from './pages/Apresentacao';
import Login from './pages/Login';
import Cadastrar from './pages/Cadastrar';
import Inicio from './pages/Inicio';
import Monitorias from './pages/Monitoria';
import CadastrarMonitoria from './pages/CadastrarMonitoria'
import SuasMonitorias from './pages/SuasMonitorias'
import MonitoriasPublicadas from './pages/MonitoriasPublicadas'



export default function Roures() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Apresentacao} />
                <Route path="/login" component={Login} />
                <Route path="/cadastrar" component={Cadastrar} />
                <Route path="/inicio" component={Inicio} />
                <Route path="/monitorias" component={Monitorias} />
                <Route path="/suas-monitorias" component={SuasMonitorias} />
                <Route path="/publicadas" component={MonitoriasPublicadas} />
                <Route path="/cadastrar-monitoria" component={CadastrarMonitoria} />
            </Switch>
        </BrowserRouter>
    )
}
