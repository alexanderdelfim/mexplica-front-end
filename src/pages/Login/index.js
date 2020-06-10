import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import LoginFacebook from '../../components/FacebookLoginBtn/Facebook'


import api from '../../services/api';

import './styles.css';

import mexplicaLogo from '../../assets/img/mexplica-logo.svg';


export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const isLogged = localStorage.getItem('isLogged')

    const history = useHistory();

    if (isLogged) {
        return(<Redirect to="/inicio"/>)
    }
        async function handleLogin(e) {
            e.preventDefault();
            
            const data = {
                email,
                password
            }

            try{
                const response = await api.post('sessions', data);
                localStorage.setItem('tokenAcesso', response.data.token)
                localStorage.setItem('usuario_id', response.data.user.id)
                localStorage.setItem('usuario_nome', response.data.user.name)
                localStorage.setItem('usuario_email', response.data.user.email)
                localStorage.setItem('price_per_hour', response.data.user.price_per_hour)
                localStorage.setItem('about_me_tutor', response.data.user.about_me_tutor)
                localStorage.setItem('about_me_student', response.data.user.about_me_student)
                localStorage.setItem('scope_area', response.data.user.scope_area)
                localStorage.setItem('tagline', response.data.user.tagline)
                history.push('/inicio')
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


