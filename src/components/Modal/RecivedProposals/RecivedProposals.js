import React, { useEffect, useState } from 'react'
import api from '../../../services/api'

import './styles.css'
import { Link } from 'react-router-dom';

const RecivedProposals = () => {
  const [moni, setMoni] = useState([]);
  const [teste, setTeste] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [propostasRecebidas, setPropostasRecebidas] = useState([]);

  useEffect(() => {
    loadProposal();
  }, [])

  useEffect(() => {
    const proposalsRecived = moni.map(proposal => proposal.proposals)
    setPropostasRecebidas(proposalsRecived);
  }, [])

  const loadProposal = async () => {
    const response = await api.get(`/users/${localStorage.getItem('usuario_id')}`);
    setMoni(response.data.monitorias);
}

  return (
    <div className="proposals-list">
      <div className="title-proposal-list">
        <h2>Propostas Recebidas</h2>
      </div>
      {showMessage ? 
        <div className="mensagem-centro">
          <h2>Você não recebeu nenhuma solicitação de monitoria.</h2>
        </div>
      : null}
      {moni.map(monitoria => ((monitoria.proposals.map(proposta => (
        <div  className="proposal-info-content open" key={proposta.id}>
          <div className="text-proposal">
            <p>Solicitação de monitoria recebida.</p>
            <p>Usuário: {proposta.user.name}</p>
          </div>
          <Link className="link-to-solicitations" to="solicitacoes-recebidas">Visualizar</Link>
        </div>
      )))))}
    </div>
  )
}

export default RecivedProposals;