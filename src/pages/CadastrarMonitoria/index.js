import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; 

import api from '../../services/api';

import './styles.css';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

export default function CadastrarMonitoria() {

    const [title, setTitle] = useState('');
    const [scope, setScope] = useState('');
    const [value, setValue] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');

    const history = useHistory();

    async function handleCadastrarMonitoria(e) {
        e.preventDefault();

        const data = {
            title,
            scope,
            value,
            location,
            description
        }

        try{
            await api.post(`http://localhost:3333/${localStorage.getItem('usuario_id')}/monitorias`, data);
            alert('Monitoria publicada com sucesso.')
            history.push('/inicio');
        } catch (err) {
            alert('Erro no cadastro, tente novamente.')
        }
    }

    return (
        <div className="Main">
            <Header />
                <div className="cadastro-content">
                    <div className="usuario">
                        <div className="usuario-content-here">
                            <img id="img-perfil-info" src={localStorage.getItem('usuario_foto')} alt={localStorage.getItem('usuario_nome')}/>
                            <div className="info-user">
                                <p>{localStorage.getItem('usuario_nome')}</p>
                                <p id="info-usuario-cad">Informaçoes do usuario.</p>
                            </div>
                        </div>
                    <div className="em-construcao">
                        <p>Em construção</p>
                    </div>
                    </div>
                    <div className="form-group-monitoria">
                        <form id="monitoria-campos" onSubmit={handleCadastrarMonitoria}>
                            <label htmlFor="nome-monitoria">Nome da monitoria: </label>
                            <input
                            className="input-css" 
                            type="text" 
                            name="nome-monitoria" 
                            id="nome-monitoria" 
                            placeholder="Ex. Aplico monitoria sobre Desenvolvimento Web com React.JS"
                            required
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            />
                            <label htmlFor="conhecimento-areas">Areas de conhecimento: </label>
                            <input 
                            className="input-css" 
                            type="text" 
                            name="conhecimento-areas" 
                            id="conhecimento-areas"
                            placeholder="Ex. Desenvolvimento Web"
                            required
                            value={scope}
                            onChange={e => setScope(e.target.value)}
                            />
                            <div className="sub-input-group">
                                <div className="left-input">
                                    <label htmlFor="valor-monitoria">Valor por hora:</label>
                                    <input 
                                    className="input-css" 
                                    type="number" 
                                    name="valor-monitoria" 
                                    id="valor-monitoria"
                                    placeholder="R$ 25,00"
                                    min="0"
                                    max="1000"
                                    required
                                    value={value}
                                    onChange={e => setValue(e.target.value)}
                                    />
                                </div>
                                <div className="right-input">
                                    <label htmlFor="local-monitoria">Local:</label>
                                    <input 
                                    className="input-css" 
                                    list="lista-plataformas"
                                    type="text" 
                                    name="local-monitoria" 
                                    id="local-monitoria"
                                    placeholder="Selecione a plataforma"
                                    required
                                    value={location}
                                    onChange={e => setLocation(e.target.value)}
                                    />
                                    <datalist id="lista-plataformas">
                                        <option value="Skype"></option>
                                        <option value="Zoom"></option>
                                        <option value="Discord"></option>
                                        <option value="Google Meet"></option>
                                    </datalist>
                                </div>
                            </div>
                            <label htmlFor="txt-descricao">Descrição: </label>
                            <textarea 
                            className="input-css" 
                            name="txt-descricao" 
                            id="txt-descricao" 
                            minLength="20"
                            maxLength="3000"
                            placeholder="Ex. Olá, sou um desenvolvedor web, que atua no mercado de desenvolvimento há 6 anos, estou disponível para ajudar quem esta com dificuldades nos conteúdos de desenvolvimento web, meu conhecimento tem foco sendo Front-end com React.JS"
                            required
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            >
                            </textarea>
                            <button className="btn-publicar" type="submit">Anunciar monitoria</button>
                        </form>
                    </div>
                </div>
            <Footer />
        </div>
    )
}


