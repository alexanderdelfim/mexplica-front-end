import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'; 

import mexplicaLogo from '../../assets/img/mexplica-logo-horizontal.svg';
import GoogleLogo from '../../assets/font-awesome-icons/google-brands.svg'
import FacebookLogo from '../../assets/font-awesome-icons/facebook-brands-2.svg'

import api from '../../services/api';

import './styles.css';

export default function Cadastrar() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    async function handleCadastrar(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            password
        }

        try{
            const response = await api.post('users', data);
            console.log(response)
            history.push('/login');
        } catch (err) {
            alert('Erro no cadastro, tente novamente.')
        }
    }

    return(
        <div className="central">
            <div className="cadastro-container">
                <img src={mexplicaLogo} alt="Mexplica"/>
                <div className="content-group">
                    <h1>Crie sua conta</h1>
                    <div className="login-facebook-google">
                        <a className="login-redes-sociais" id="linkfacebook" href="/facebook"><img id="facebook-logo" src={FacebookLogo} alt="Facebook"/>Entrar com</a>
                        <a className="login-redes-sociais" id="linkgoogle" href="/google"><img id="google-logo" src={GoogleLogo} alt="Google"/> Entrar com</a>
                    </div>
                    <form className="form" onSubmit={handleCadastrar}>

                        <input className="inputs-login" type="text"
                        placeholder="Nome completo" 
                        required
                        value={name}
                        onChange={e => setName(e.target.value)}
                        />

                        <input className="inputs-login" type="email" 
                        placeholder="E-mail" 
                        required 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        />

                        <input className="inputs-login" type="password" 
                        name="inp-senha" 
                        id="inp-senha" 
                        placeholder="Senha" 
                        required 
                        value={password}
                        onChange={e => setPassword(e.target.value)}/>

                        <div className="termos-uso">

                            <input type="checkbox" 
                            name="termos" 
                            id="termos" 
                            required/>

                            <label htmlFor="termos">Ao criar sua conta, você está aceitando os termos de serviços e a política de privacidade do Mexplica.</label>
                        </div>
                        <input type="submit" value="Criar conta"/>
                        <div className="fazer-login">
                            <p>Você já possui uma conta no Mexplica?&nbsp; <Link to="/login">Entrar</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}