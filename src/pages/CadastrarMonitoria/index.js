import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; 

import api from '../../services/api';

import './styles.css';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

export default function CadastrarMonitoria() {

    const [title, setTitle] = useState('');
    const [areas, setAreas] = useState('');
    const [price, setPrice] = useState('');
    const [local, setLocal] = useState('');
    const [description, setDescription] = useState('');

    const history = useHistory();

    async function handleCadastrarMonitoria(e) {
        e.preventDefault();

        const data = {
            title,
            areas,
            price,
            local,
            description
        }

        try{
            const response = await api.post('monitoria', data);
            console.log(response)
            alert('Monitoria Publicada com sucesso.')
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
                        <p>Nome usuario</p>
                    </div>
                    <div className="form-group-monitoria">
                        <form id="monitoria-campos" onSubmit={handleCadastrarMonitoria}>
                            <label htmlFor="nome-monitoria">Nome da monitoria: </label>
                            <input
                            className="input-css" 
                            type="text" 
                            name="nome-monitoria" 
                            id="nome-monitoria" 
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
                            required
                            value={areas}
                            onChange={e => setAreas(e.target.value)}
                            />
                            <div className="sub-input-group">
                                <div className="left-input">
                                    <label htmlFor="valor-monitoria">Valor:</label>
                                    <input 
                                    className="input-css" 
                                    type="number" 
                                    name="valor-monitoria" 
                                    id="valor-monitoria"
                                    required
                                    value={price}
                                    onChange={e => setPrice(e.target.value)}
                                    />
                                </div>
                                <div className="right-input">
                                    <label htmlFor="local">Local:</label>
                                    <select 
                                    className="input-css" 
                                    name="local" 
                                    id="local" 
                                    required
                                    value={local}
                                    onChange={e => setLocal(e.target.value)}
                                    >
                                        <option value="disable" disabled >Selecione</option>
                                        <option value="meet-google">Google Meet</option>
                                        <option value="zoom">Zoom</option>
                                        <option value="discord">Discord</option>
                                        <option value="skype">Skype</option>
                                    </select>
                                </div>
                            </div>
                            <label htmlFor="txt-descricao">Descrição: </label>
                            <textarea 
                            className="input-css" 
                            name="txt-descricao" 
                            id="txt-descricao" 
                            minLength="20"
                            maxLength="3000" 
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


