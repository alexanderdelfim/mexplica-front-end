import React, { useEffect, useState } from 'react'
import api from '../../services/api'

import './styles.css'
import { Link } from 'react-router-dom';

const UserInfo = () => {
  const [moniLength, setMoniLength] = useState(0);
  const [userInfo, setUserInfo] = useState('');

  useEffect (() => {
    api.get(`/users/${localStorage.getItem('usuario_id')}`).then(response => {
      setUserInfo(response.data);
      setMoniLength(response.data.monitorias.length);

    })
  }, []);



  return (
    <div className="user-information">
      <div className="title-area">
        <p>Suas Infomações</p>
      </div>
      <div className="information-area">
        <img id="foto-usuario-info" src={localStorage.getItem('usuario_foto')} alt={userInfo.name}/>
        <div className="nome-avaliacao">
          <p>{userInfo.name}</p>
          <span>Avaliação geral: 4.5</span>
        </div>
        <div className="monitoria-detalhes">
          <p>Monitorias publicadas: <Link id="link-test" to="/publicadas">{moniLength} {moniLength === 1 ? 'monitoria' : 'monitorias'}</Link></p>
        </div>
        <div className="publicar-novo">
          <p>Criar um novo anuncio de monitoria</p>
          <Link className="btn-link" to="/cadastrar-monitoria">Nova Monitoria</Link>
        </div>
      </div>
    </div>
  )
}

export default UserInfo;