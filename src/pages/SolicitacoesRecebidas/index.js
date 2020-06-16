import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import api from '../../services/api'

import './styles.css'

const SolicitacoesRecebidas = () => {

    const [propostas, setPropostas] = useState([]);
    const [isModalVisible1, setIsModalVisible1] = useState(false)



    useEffect(() => {
        loadPropostas();
    }, []);

    const loadPropostas = async () => {
        const response = await api.get(`/users/${localStorage.getItem('usuario_id')}`);
        setPropostas(response.data.monitorias);
        
    }
    let arrayLength = propostas.length;

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

                        {propostas.map(monitoria => ((monitoria.proposals.map(proposta => (
                                <div  className="proposal-info-content open" key={proposta.id}>
                                <div className="text-proposal">
                                    <p>Solicitação de monitoria recebida.</p>
                                    <p>Usuário: {proposta.user.name}</p>
                                </div>
                                </div>
                            )))))}
                    </div>
                </div>
            <Footer />
        </div>
    )
}

export default SolicitacoesRecebidas;