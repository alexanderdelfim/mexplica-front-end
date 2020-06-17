import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

import './styles.css';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Modal from '../../components/Modal/ModalCancelar/ModalBtnCancelar'

export default function CadastrarPerfil() {
const [about_me_tutor, setAboutMeTutor] = useState('');
  const [about_me_student, setAboutMeStudent] = useState('');
  const [price_per_hour, setPricePerHour] = useState('');
  const [scope_area, setScopeArea] = useState('');
  const [tagline, setTagline] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false)
  const history = useHistory();

  const loadModal = async (i) => {
      setIsModalVisible(true);
  }
    useEffect(() => {
        api.get(`http://localhost:3333/users/${localStorage.getItem('usuario_id')}`).then(response => {
            setAboutMeTutor(response.data.about_me_tutor);
            setAboutMeStudent(response.data.about_me_student);
            setPricePerHour(response.data.price_per_hour);
            setScopeArea(response.data.scope_area);
            setTagline(response.data.tagline);
        })
      }, []);
    
      async function handleEditarPerfil(e) {
        e.preventDefault();
    
        const data = {
            about_me_tutor,
            about_me_student,
            price_per_hour,
            scope_area,
            tagline
        }
    
        try{
            await api.put(`http://localhost:3333/users/${localStorage.getItem('usuario_id')}`, data);
            alert('Perfil atualizada com sucesso.')
            localStorage.clear()
            history.push('/login');
        } catch (err) {
            alert('Erro na atualização, tente novamente.')
        }
    }

    return (
        <div className="Main">
            <Header />
            <div className="container-perfil">
            <form className="form" onSubmit={handleEditarPerfil}>
                <h1>Alterar dados do perifl</h1>
                <div className="divisao"></div>

                <h2 className="editar-monitor">Monitor</h2>
                <div className="sobre-mim-monitor">
                    <span>Sobre Mim</span>
                    <textarea className="input-css"
                        type="text"
                        name="sobre-mim-monitor"
                        id="sobre-mim-monitor"
                        placeholder="Ex. Sou estudante de sistemas de informação na Una de Betim e estou procurando  ajudar outros estudantes que possuem dificuldades nas matérias de desenvolvimento web, análise de requisitos e POO. Minhas monitórias são oferecidas por meio de encontros e também em ambientes virtuais."
                        value={about_me_tutor}
                        onChange={e => setAboutMeTutor(e.target.value)}
                    >{localStorage.getItem('about_me_tutor')}</textarea>
                </div>

                <div className="preco-hora">
                    <span>Valor por hora:</span>
                    <input className="input-css"
                        type="number"
                        name="valor-por-hora"
                        id="valor-por-hora"
                        placeholder="R$ 25,00"
                        min="0"
                        max="1000"
                        value={price_per_hour}
                        onChange={e => setPricePerHour(e.target.value)}
                        contentEditable="true"
                    ></input>
                </div>
                <div className="area-monitor">
                    <span>Área de conhecimento:</span>
                    <input className="input-css"
                        type="text"
                        name="area-conhecimento-monitor"
                        id="area-conhecimento-monitor"
                        placeholder="Ex: TI - Tecnlogia da Informação"
                        value={scope_area}
                        onChange={e => setScopeArea(e.target.value)}
                    ></input>
                </div>
                <div className="tag-disciplina">
                    <span>Disciplina:</span>
                    <input className="input-css"
                        type="text"
                        name="tag-disciplina-edit"
                        id="tag-disciplina-edit"
                        placeholder="Ex. Desenvolvimento Web"
                        value={tagline}
                        onChange={e => setTagline(e.target.value)}
                    ></input>
                </div>
                <div className="divisao"></div>
                <h2 className="editar-aluno">Aluno</h2>
                <div className="sobre-mim-aluno">
                    <span>Sobre Mim</span>
                    <textarea className="input-css"
                        type="text"
                        name="sobre-mim-aluno"
                        id="sobre-mim-aluno"
                        placeholder="Ex. Sou estudante de sistemas de informação na Una de Betim e estou procurando  ajudar outros estudantes que possuem dificuldades nas matérias de desenvolvimento web, análise de requisitos e POO. Minhas monitórias são oferecidas por meio de encontros e também em ambientes virtuais.b"
                        value={about_me_student}
                        onChange={e => setAboutMeStudent(e.target.value)}
                    ></textarea>
                </div>
                <div className="btn-salvar-cancelar">
                    <input className="btn-salvar-edit" type="submit" value="Salvar"/>
                    <button className="btn-cancel-edit" onClick={loadModal}>Cancelar</button>
                </div>
                </form>
            </div>
            <div className="modal-here">
                    {isModalVisible ? <Modal onClose={() => setIsModalVisible(false)}></Modal> : null}
                </div>
            <Footer />
        </div>
    )
}