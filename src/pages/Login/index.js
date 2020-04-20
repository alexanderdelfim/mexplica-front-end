import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import mexplicaLogo from '../../assets/img/mexplica-logo.svg';
import GoogleLogo from '../../assets/font-awesome-icons/google-brands.svg'
import FacebookLogo from '../../assets/font-awesome-icons/facebook-brands-2.svg'

export default function Login() {
    return (
        <div className="central">
            <div className="login-container">
                <img id="logo-mexplica" src={mexplicaLogo} alt="Mexplica"/>
                <div className="login-facebook-google">
                    <a className="login-redes-sociais" id="linkfacebook" href="/facebook"><img id="facebook-logo" src={FacebookLogo} alt="Facebook"/>Entrat com o Facebook</a>
                    <a className="login-redes-sociais" id="linkgoogle" href="/google"><img id="google-logo" src={GoogleLogo} alt="Google"/> Entrar com o Google</a>
                </div>
                <section className="form">
                    <label htmlFor="usuario">Usuário</label>
                    <br/>
                    <input type="text" name="usuario" id="usuario" required/>
                    <br/>
                    <label htmlFor="senha">Senha</label>
                    <br/>
                    <input type="password" name="senha" id="senha" required/>
                    <br/>
                        <input type="checkbox" name="lembrar" id="lembrar"/>
                        <label htmlFor="lembrar">Lembrar-me</label>
                    <br/>
                    <input type="submit" value="Entrar" id="button"/>
                    <div className="fazer-cadastro">
                        <p>Não possui cadastro?&nbsp; <Link className="link-style" to="/cadastrar">Cadastre-se</Link></p>    
                    </div>
                </section>
            </div>
        </div>
    )
}


