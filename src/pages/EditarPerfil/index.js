import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

import './styles.css';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

export default function CadastrarPerfil() {
    const [about_me_tutor, setAboutMeTutor] = useState('');
    const [about_me_student, setAboutMeStudent] = useState('');
    const [price_per_hour, setPricePerHour] = useState('');
    const [scope_area, setScopeArea] = useState('');
    const [tagline, setTagline] = useState('');

    const history = useHistory();
    
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
            const response = await api.put(`http://localhost:3333/users/${localStorage.getItem('usuario_id')}`, data);
            console.log(response)
            localStorage.clear()
            history.push('/login');
            alert('Perfil cadastrado com sucesso.')
        } catch (err) {
            alert('Erro no cadastro, tente novamente.')
        }
    }
    return (
        <div className="Main">
            <Header />
            <div className="container-perfil">
            <form className="form" onSubmit={handleEditarPerfil}>
                <h1>Cadastrar Perifl</h1>
                <label className="editar-monitor">Monitor</label><p></p>
                <div className="sobre-mim-monitor">
                    <span>Sobre Mim</span>
                    <textarea className="input-css"
                        type="text"
                        name="sobre-mim-monitor"
                        id="sobre-mim-monitor"
                        placeholder="Ex. Desenvolvimento Web"
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
                <label className="editar-aluno">Aluno</label><p></p>
                <div className="sobre-mim-aluno">
                    <span>Sobre Mim</span>
                    <textarea className="input-css"
                        type="text"
                        name="sobre-mim-aluno"
                        id="sobre-mim-aluno"
                        placeholder="Ex. Desenvolvimento Web"
                        value={about_me_student}
                        onChange={e => setAboutMeStudent(e.target.value)}
                    ></textarea>
                </div>
                <input className="btn-editar-perfil" type="submit" value="Salvar"/>
                <button className="btn-cancel-edit" ><Link to="/perfil"><span>Cancelar</span></Link></button>
                </form>
            </div>
            <Footer />
        </div>
    )
}