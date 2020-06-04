import React, { useState, useEffect } from 'react';
import Modal from 'react-modal'
import Header from '../../components/HeaderNoSerch/HeaderNoSerch'
import Footer from '../../components/Footer/Footer'

import api from '../../services/api'

import './styles.css';

export default function Monitoria() {

    const [monitorias, setMonitorias] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false)

    useEffect(() => {
        loadMonitorias();
    }, []);

    const loadMonitorias = async () => {
        const response = await api.get('monitorias');
        setMonitorias(response.data);
    }

    return (
        <div className="main">
            <Header />
                <div className="main-content">
                    <div className="filtros">
                        <h2>Filtros</h2>
                        <ul>
                            <li><input type="checkbox" name="teste" id="1"/> Em construção</li>
                            <li><input type="checkbox" name="teste" id="1"/> Em construção</li>
                            <li><input type="checkbox" name="teste" id="1"/> Em construção</li>
                            <li><input type="checkbox" name="teste" id="1"/> Em construção</li>
                            <li><input type="checkbox" name="teste" id="1"/> Em construção</li>
                            <li><input type="checkbox" name="teste" id="1"/> Em construção</li>
                            <li><input type="checkbox" name="teste" id="1"/> Em construção</li>
                        </ul>
                    </div>
                    <div className="monitorias-list">
                        <div className="monitorias-titulo">
                                    <input id="tipo-pesquisa" type="text" list="tipo-de-pesquisa" placeholder="Tipo de Conteudo"/>
                                    <datalist id="tipo-de-pesquisa">
                                        <option value="Monitorias"></option>
                                        <option value="Alunos"></option>
                                    </datalist>
                                    <input id="input-pesquisar-tipo" type="text" name="pesquisar-alunos-monitorias" placeholder="Ex. Desemvolvimento Web"/>
                                    <input id="btn-pesquisar-tipo" type="button" value="Pesquisar"/>
                            </div>
                        <div className="monitorias-list-itens">
                            {monitorias.map(monitoria => (
                            <div className="monitoria-item" key={monitoria.id}>
                                <div className="monitoria-header">
                                    <h2>{monitoria.title}</h2>
                                    <div className="btn-div">
                                            <button className="btn-detalhes" onClick={() => setModalIsOpen(true)}>Entrar em contato</button>
                                            <Modal className="modal-content" isOpen={modalIsOpen} overlayClassName="overlay">
                                                <div className="modal-infos">
                                                    <h2>Em construção</h2>
                                                    <button onClick={() => setModalIsOpen(false)}>Fechar</button>
                                                </div>
                                            </Modal>
                                    </div>
                                </div>
                                <p id="descricao-css">{monitoria.description}</p>
                                <div className="monitoria-infos">
                                    <strong>Valor por hora:</strong>
                                    <p className="preco-monitoria">{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(monitoria.value)}</p>
                                    <strong>Local:</strong>
                                    <p >{monitoria.location}</p>
                                </div>
                                <div className="tags">
                                    <p className="tag">{monitoria.scope}</p>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            <Footer />
        </div>
    )
}