import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import './styles.css';

import MexplicaLogoHorizontal from '../../assets/img/mexplica-logo-horizontal.svg';

export default class Header extends Component {
        render() {
            let isLogged = false;
            let usuario_nome = '';
            let usuario_foto = '';
            
            if(localStorage.getItem('fbData')) {
                const data = localStorage.getItem('fbData');
                const newData = JSON.parse(data);
                usuario_nome = newData.name;
                usuario_foto = newData.picture;
                isLogged = true;
                localStorage.setItem('isLogged', isLogged)
            }

            else if(localStorage.getItem('usuario_id')){
                usuario_nome = localStorage.getItem('usuario_nome');
                usuario_foto = "https://img.icons8.com/ultraviolet/120/000000/student-male.png"
                localStorage.setItem('usuario_foto', usuario_foto)/*localStorage.getItem('usuario_foto') */;
                isLogged = true;
                localStorage.setItem('isLogged', isLogged)
            }

            
        return (
            <div className="Header-mexplica">
                <div className="container-header">

                    <img id="mexplica-logo-svg" onClick={<Link to="/inicio"></Link>} src={MexplicaLogoHorizontal} alt="Mexplica"/>
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
                            <button type="submit" id="btn-pesquisa" disabled >Pesquisar</button>
                        </form>
                    </div>
                    <div className="usuario-info">
                        <li className="dropdown-user">
                            <Link to="/perfil" id="user-name"><img id="profile-img" src={usuario_foto} alt={usuario_nome}/><p>{usuario_nome}</p></Link> 
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
