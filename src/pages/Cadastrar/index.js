import React from 'react';
import { Link } from 'react-router-dom'; 

import mexplicaLogo from '../../assets/img/mexplica-logo-horizontal.svg';
import GoogleLogo from '../../assets/font-awesome-icons/google-brands.svg'
import FacebookLogo from '../../assets/font-awesome-icons/facebook-brands-2.svg'

import './styles.css';

export default function Cadastrar() {
    return(
        <div className="central">
            <div className="cadastro-container">
                <img src={mexplicaLogo} alt="Mexplica"/>
                <div className="content-group">
                    <h1>Crie sua conta</h1>
                    <div className="login-facebook-google">
                        <a className="login-redes-sociais" id="linkfacebook" href="/facebook"><img id="facebook-logo" src={FacebookLogo} alt="Facebook"/>Entrat com o Facebook</a>
                        <a className="login-redes-sociais" id="linkgoogle" href="/google"><img id="google-logo" src={GoogleLogo} alt="Google"/> Entrar com o Google</a>
                    </div>
                    <section className="form">
                        <input type="text" placeholder="Nome completo" required/>
                        <input type="email" placeholder="E-mail" required />
                        <input type="password" name="inp-senha" id="-inp-senha" placeholder="Senha" required />
                        <div className="termos-uso">
                            <input type="checkbox" name="termos" id="termos" required/>
                            <label htmlFor="termos">Ao criar sua conta, você está aceitando os termos de serviços e a política de privacidade do Mexplica.</label>
                        </div>
                        <input type="submit" value="Criar conta"/>
                        <div className="fazer-login">
                            <p>Você já possui uma conta no Mexplica?&nbsp; <Link to="/">Entrar</Link></p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}