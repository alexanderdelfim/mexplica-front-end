import React from 'react'

import api from '../../../services/api'

import './styles.css'

const ModalDetalhes = ({ id = 'modal',onClose = () => {} }) => {

  const handleOutSideClick = (e) => {
    if (e.target.id === id) {
      onClose();
    }
  }

  return (
    <div id={id} className="modal" onClick={handleOutSideClick}>
      <div className="excluir-publicacao">
        <p>Tem certeza que deseja excluir?</p>
        <buttont id="btn-sim" onClick={() => {}}>Sim</buttont>
        <buttont id="btn-não" onClick={() => {}}>Não</buttont>
      </div>
    </div>
  )
}

export default ModalDetalhes;