import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import './styles.css';

import MexplicaLogoHorizontal from '../../assets/img/mexplica-logo-horizontal.svg';

export default class Header extends Component {
        render() {
            const data = localStorage.getItem('fbData');
            const newData = JSON.parse(data)
        return (
            <div className="Header-mexplica">
                <div className="container-header">
                    <img id="mexplica-logo-svg" src={MexplicaLogoHorizontal} alt="Mexplica"/>
                    <div className="toggle-menu">
                    </div>
                    <nav className="Navbar">
                        <ul>
                            <li className="dropdown-item">
                                <Link to="/monitorias">Encontrar monitorias</Link> 
                            </li>
                            <li className="dropdown-item">
                            <Link to="/suas-monitorias">Suas monitorias</Link> 
                                <ul>
                                    <li className="dropdown-sub-item">
                                        <Link to="/publicadas">Monitorias publicadas</Link> 
                                    </li>
                                    <li className="dropdown-sub-item">
                                        <Link to="/cadastrar-monitoria">Cadastrar monitoria</Link> 
                                    </li>
                                    <li className="dropdown-sub-item">
                                        <Link to="/solicitacoes-recebidas">Solicitações recebidas</Link> 
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                    <div className="search">
                        <form id="form-group-header" >
                            <input type="search" name="inp-pesquisa" id="inp-pesquisa"/>
                            <button type="submit" id="btn-pesquisa">Pesquisar</button>
                        </form>
                    </div>
                    <div className="usuario-info">
                        <li className="dropdown-user">
                            <Link to="/perfil" id="user-name"><img id="profile-img" src={newData.picture} alt={newData.name}/><p>{newData.name}</p></Link> 
                            <ul>
                            <li className="dropdown-user-item">
                                    <Link to="/perfil">Perfil</Link> 
                                </li>
                                <li className="dropdown-user-item">
                                    <Link to="">Sair</Link> 
                                </li>
                            </ul>
                        </li>
                    </div>
                </div>
            </div>
        )
    }
}
