import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginFacebook from '../../components/FacebookLoginBtn/Facebook'

import api from '../../services/api';

import './styles.css';

import mexplicaLogo from '../../assets/img/mexplica-logo.svg';
import GoogleLogo from '../../assets/font-awesome-icons/google-brands.svg'

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    async function handleLogin(e) {
        e.preventDefault();
        
        const data = {
            email,
            password
        }

        try{
            const response = await api.post('sessions', data);
            console.log(response)
        } catch (err) {
            alert('Erro no login, tente novamente.')
        }
    }

    return (
        <div className="central">
            <div className="login-container">
                <img id="logo-mexplica" src={mexplicaLogo} alt="Mexplica"/>
                <div className="login-facebook-google">
                    <LoginFacebook />
                    <a className="login-redes-sociais" id="linkgoogle" href="/google"><img id="google-logo" src={GoogleLogo} alt="Google"/> Entrar com</a>
                </div>
                <section className="form">
                    <form className="form-login" onSubmit={handleLogin}>
                        <label htmlFor="usuario">Usuário</label>
                        <br/>
                        <input className="inputs-login" type="text" 
                        name="usuario" 
                        id="usuario" 
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        />
                        <br/>
                        <label htmlFor="senha">Senha</label>
                        <br/>
                        <input className="inputs-login" type="password" 
                        name="senha" 
                        id="senha" 
                        required
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        />
                        <br/>
                            <input type="checkbox" name="lembrar" id="lembrar"/>
                            <label htmlFor="lembrar">Lembrar-me</label>
                        <br/>
                        <input type="submit" value="Entrar" id="button"/>
                    </form>
                    <div className="fazer-cadastro">
                        <p>Não possui cadastro?&nbsp; <Link className="link-style" to="/cadastrar">Cadastre-se</Link></p>    
                    </div>
                </section>
            </div>
        </div>
    )
}


