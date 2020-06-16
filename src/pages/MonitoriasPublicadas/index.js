import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Modal1 from '../../components/Modal/ModalDetalhes/ModalBtnDetalhes'
import Modal2 from '../../components/Modal/ModalAlterar/ModalBtnAlterar'
import Modal3 from '../../components/Modal/ModalExcluir/ModalBtnExcluir'


import api from '../../services/api'

import './styles.css'

const MonitoriasPublicadas = () => {

    const [monitorias, setMonitorias] = useState([]);
    const [isModalVisible1, setIsModalVisible1] = useState(false)
    const [isModalVisible2, setIsModalVisible2] = useState(false)
    const [isModalVisible3, setIsModalVisible3] = useState(false)


    useEffect(() => {
        loadMonitorias();
    }, []);

    const loadMonitorias = async () => {
        const response = await api.get(`${localStorage.getItem('usuario_id')}/monitorias`);
        setMonitorias(response.data.monitorias);
        
    }
    let arrayLength = monitorias.length;

    const loadModal1 = async (id) => {
        localStorage.setItem('monitoria_id', id);
        setIsModalVisible1(true);
    }

    const loadModal2 = async (id) => {
        localStorage.setItem('monitoria_id', id);
        setIsModalVisible2(true);
    }

    const loadModal3 = async (id) => {
        localStorage.setItem('monitoria_id', id);
        setIsModalVisible3(true);
    }

    return(
        <div className="main">
            <Header />
                <div className="main-content">
                    <div className="monitorias-list">
                        {arrayLength === 0 ? 
                            <div className="mensagem">
                                <h2>Opss, Parece que não encontramos nada.</h2>
                                <p>Aparentemente você não possui nenhuma publicação no site, publique uma monitoria agora mesmo clicando aqui: </p>
                            <Link to="/cadastrar-monitoria">Cadastrar uma nova monitoria</Link>
                            </div>
                        : null}

                        {monitorias.map(monitoria => (
                        <div className="monitoria-item-show" key={monitoria.id}>
                            <div className="monitoria-header">
                                <h2>{monitoria.title}</h2>
                            </div>
                            <div className="center-content">
                                <p id="descricao-css">{monitoria.description}</p>
                                <div className="monitoria-infos">
                                    <div className="valor">
                                        <strong>Valor por hora:</strong>
                                        <p className="preco-monitoria">{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(monitoria.value)}</p>
                                    </div>
                                    <div className="local">
                                        <strong>Local:</strong>
                                        <p >{monitoria.location}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="tags">
                                <p className="tag">{monitoria.scope}</p>
                            </div>
                            <div className="btn-div">
                                    <button className="btn-detalhar" onClick={() =>  loadModal1(monitoria.id)}>Detalhes</button>
                                    <button className="btn-alterar" onClick={() =>  loadModal2(monitoria.id)}>Alterar</button>
                                    <button className="btn-excluir" onClick={() =>  loadModal3(monitoria.id)}>Excluir</button>
                                </div>
                        </div>
                        ))}
                        <div className="modal-one-here">
                            {isModalVisible1 ? <Modal1 onClose={() => setIsModalVisible1(false)}></Modal1> : null}
                        </div>
                        <div className="modal-two-here">
                            {isModalVisible2 ? <Modal2 onClose={() => setIsModalVisible2(false)}></Modal2> : null}
                        </div>
                        <div className="modal-trhee-here">
                            {isModalVisible3 ? <Modal3 onClose={() => setIsModalVisible3(false)}></Modal3> : null}
                        </div>
                    </div>
                </div>
            <Footer />
        </div>
    )
}

export default MonitoriasPublicadas;