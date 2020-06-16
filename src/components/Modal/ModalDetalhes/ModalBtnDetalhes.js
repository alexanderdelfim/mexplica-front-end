import React, { useState, useEffect, } from 'react'
import { useHistory } from 'react-router-dom'

import api from '../../../services/api'

import './styles.css'

const ModalDetalhes = ({ id = 'modal',onClose = () => {} }, dados ) => {
  const [monitoria, setMonitoria] = useState('');
  const [proposta, setProposta] = useState('');

  const history = useHistory();

  useEffect(() => {
    api.get(`${localStorage.getItem('usuario_id')}/monitorias/${localStorage.getItem('monitoria_id')}`).then(response => {
      setMonitoria(response.data);
    })
  }, []);

  const handleOutSideClick = (e) => {
    if (e.target.id === id) {
      onClose();
    }
  }

  async function handleSendProposal(e) {
    e.preventDefaut();

    const data = {
      proposta
  }

  try{
      const response = await api.post('users', data);
      console.log(response)
      history.push('/login');
  } catch (err) {
      alert('Erro no cadastro, tente novamente.')
  }

  }

  return (
    <div id={id} className="modal" onClick={handleOutSideClick}>
      <div className="modal-content">
        <div className="content-width">
          <div className="modal-header">
            <h2>{monitoria.title}</h2>
            <button id="btn-fechar" onClick={onClose}>Fechar</button>
          </div>
          <div className="modal-publicacao-info">
            <div className="flex-column column-1">
              <strong>Descrição</strong>
              <p>{monitoria.description}</p>
            </div>
            <div className="flex-column">
              <strong>Local de aplicação</strong>
              <p>{monitoria.location}</p>
              <strong>Preço por hora</strong>
              <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(monitoria.value)}</p>
            </div>
          </div>
            <div className="proposta">
              <form onSubmit={handleSendProposal}>
                <strong>Escreva aqui sua mensagem para requisitar a monitoria</strong>
                <textarea 
                name="proposta-area" 
                id="proposta-area"
                value={proposta}

                ></textarea>
                <button className="btn-enviar-prop" onClick={() =>{}} type="submit">Solicitar</button>
              </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ModalDetalhes;