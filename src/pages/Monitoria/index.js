import React, { useState, useEffect } from 'react';

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Modal from '../../components/Modal/ModalDetalhes/ModalBtnDetalhes'

import api from '../../services/api'

import './styles.css';

export default function Monitoria() {

    const [monitorias, setMonitorias] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false)

    useEffect(() => {
        loadMonitorias();
    }, []);

    const loadMonitorias = async () => {
        const response = await api.get('monitorias');
        setMonitorias(response.data);
        console.log(response.data);
    }

    const loadModal = async (id) => {
        localStorage.setItem('monitoria_id', id);
        setIsModalVisible(true);
    }

    return (
        <div className="main">
            <Header />
                <div className="main-content">
                    <div className="filtros">
                        <h2>Filtros</h2>
                        <ul>
                            <li><input type="checkbox" name="teste" id="1"/> Não Implementado</li>
                            
                        </ul>
                    </div>
                    <div className="monitorias-list">
                        <div className="monitorias-titulo">
                                    <input id="tipo-pesquisa" type="text" list="tipo-de-pesquisa" disabled placeholder="Tipo de Conteudo"/>
                                    <datalist id="tipo-de-pesquisa">
                                        <option value="Monitorias"></option>
                                        <option value="Alunos"></option>
                                    </datalist>
                                    <input id="input-pesquisar-tipo" type="text" disabled name="pesquisar-alunos-monitorias" placeholder="Ex. Desemvolvimento Web"/>
                                    <input id="btn-pesquisar-tipo" disabled type="button" value="Pesquisar"/>
                            </div>
                        <div className="monitorias-list-itens">
                            {monitorias.map(monitoria => (
                            <div className="monitoria-item" key={monitoria.id}>
                                
                                <div className="monitoria-header">
                                    <h2>{monitoria.title}</h2>
                                    <div className="btn-div-d">
                                        <button className="btn-detalhes" onClick={() =>  loadModal(monitoria.id) }>Entrar em contato</button>
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
                            <div className="modal-here">
                                {isModalVisible ? <Modal onClose={() => setIsModalVisible(false)}></Modal> : null}
                            </div>
                        </div>
                    </div>
                </div>
            <Footer />
        </div>
    )
}