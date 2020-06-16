import React from 'react'
import { Redirect } from 'react-router-dom'

import './styles.css'

const ModalCancelar = ({ id = 'modal',onClose = () => {}}) => {

  const handleOutSideClick = (e) => {
    if (e.target.id === id) {
      onClose();
    }
  }

  const handleCancelar = () => {
    return(<Redirect to="/perfil"/>)
  }

  

  return (
    <div id={id} className="modal" onClick={handleOutSideClick}>
      <div className="excluir-publicacao">
        <p>Tem certeza que deseja cancelar as alteraçoes feitas?</p>
        <div className="btn-sim-nao">
          <buttont className="btn-sim" onClick={handleCancelar}>Sim</buttont>
          <buttont className="btn-nao" onClick={onClose}>Não</buttont>
        </div>
      </div>
    </div>
  )
}

export default ModalCancelar;