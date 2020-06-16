import React from 'react';
import { Link, Redirect } from 'react-router-dom';


import mexplicaLogo from '../../assets/img/mexplica-logo-horizontal.svg';
import mexplicaLogov1 from '../../assets/img/mexplica-logo.svg';

import './styles.css';

export default function Apresentacao() {
    const isLogged = localStorage.getItem('isLogged')

    if (isLogged) {
        return(<Redirect to="/inicio"/>)
    }

    return(
        <div className="central">
            <section id="info">
                <img className="img-logo" src={mexplicaLogo} alt="Mexplica - Monitorias On-line"/>
                <div className="info-content">
                    <p>Bem vindo ao Mexplica, somos uma plataforma voltada á estudantes, que desejam dar monitória em um conteúdo de seu dominio e para estudantes que precisam receber tal ajuda em um conteúdo de seu interesse.</p>
                </div>
            </section>
            <div id="sing-in">
                <img className="img-logo" src={mexplicaLogov1} alt="Mexplica - Monitorias On-line"/>
                <p>Acesse agora mesmo a plataforma.</p>
                <p className="link-sing-in">
                    <Link className="link-sing-in" to="/login">Entrar</Link>
                </p>
            </div>
        </div>
    )
}