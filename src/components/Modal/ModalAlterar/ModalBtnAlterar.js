import React, { useState, useEffect } from 'react'

import { Redirect } from 'react-router-dom';

import api from '../../../services/api'

import './styles.css'

const ModalDetalhes = ({ id = 'modal',onClose = () => {} }, dados ) => {
  const [title, setTitle] = useState('');
  const [scope, setScope] = useState('');
  const [value, setValue] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');


  useEffect(() => {
    api.get(`${localStorage.getItem('usuario_id')}/monitorias/${localStorage.getItem('monitoria_id')}`).then(response => {
      setTitle(response.data.title);
      setDescription(response.data.description);
      setValue(response.data.value);
      setLocation(response.data.location);
      setScope(response.data.scope);
    })
  }, []);

  async function handleCadastrarMonitoria(e) {
    e.preventDefault();

    const data = {
        title,
        scope,
        value,
        location,
        description
    }

    try{
        await api.put(`http://localhost:3333/${localStorage.getItem('usuario_id')}/monitorias/${localStorage.getItem('monitoria_id')}`, data);
        alert('Monitoria atualizada com sucesso.')
        return(<Redirect to="/publicadas"/>)
    } catch (err) {
        alert('Erro na atualização, tente novamente.')
    }
}

  const handleOutSideClick = (e) => {
    if (e.target.id === id) {
      onClose();
    }
  }

  return (
    <div id={id} className="modal" onClick={handleOutSideClick}>
      <div className="modal-content-alterar">
        <div className="content-width">
          <div className="form-atualizar">
            <form id="monitoria-campos" onSubmit={()=>{}}>
              <h2>Dados da monitoria</h2>
              <label htmlFor="nome-monitoria">Nome da monitoria: </label>
              <input
              className="input-css" 
              type="text" 
              name="nome-monitoria" 
              id="nome-monitoria" 
              placeholder="Ex. Aplico monitoria sobre Desenvolvimento Web com React.JS"
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
              placeholder="Ex. Desenvolvimento Web"
              required
              value={scope}
              onChange={e => setScope(e.target.value)}
              />
              <div className="sub-input-group">
                <div className="left-input">
                  <label htmlFor="valor-monitoria">Valor por hora:</label>
                  <input 
                  className="input-css" 
                  type="number" 
                  name="valor-monitoria" 
                  id="valor-monitoria"
                  placeholder="R$ 25,00"
                  min="0"
                  max="1000"
                  required
                  value={value}
                  onChange={e => setValue(e.target.value)}
                  />
                </div>
                <div className="right-input">
                  <label htmlFor="local-monitoria">Local:</label>
                  <input 
                  className="input-css" 
                  list="lista-plataformas"
                  type="text" 
                  name="local-monitoria" 
                  id="local-monitoria"
                  placeholder="Selecione a plataforma"
                  required
                  value={location}
                  onChange={e => setLocation(e.target.value)}
                  />
                  <datalist id="lista-plataformas">
                    <option value="Skype"></option>
                    <option value="Zoom"></option>
                    <option value="Discord"></option>
                    <option value="Google Meet"></option>
                  </datalist>
                </div>
              </div>
              <label htmlFor="txt-descricao">Descrição: </label>
              <textarea 
              className="input-css" 
              name="txt-descricao" 
              id="txt-descricao" 
              minLength="20"
              maxLength="3000"
              placeholder="Ex. Olá, sou um desenvolvedor web, que atua no mercado de desenvolvimento há 6 anos, estou disponível para ajudar quem esta com dificuldades nos conteúdos de desenvolvimento web, meu conhecimento tem foco sendo Front-end com React.JS"
              required
              value={description}
              onChange={e => setDescription(e.target.value)}
              >
              </textarea>
              <div className="flex-div">
                <button className="btn-publicar" type="submit" onClick={handleCadastrarMonitoria}>Salvar</button>
                <button className="btn-publicar" type="button" onClick={onClose}>Cancelar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalDetalhes;