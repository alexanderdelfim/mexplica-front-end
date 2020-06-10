import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as ReactDOM from "react-dom";
import { useState, useEffect } from 'react';

import './styles.css';

import api from '../../services/api'

import Edit from '../../assets/font-awesome-icons/edit-solid.svg'
import Star from '../../assets/font-awesome-icons/star-regular.svg'

export default class PerfilTeste2 extends Component {
    constructor() {
        super()
        this.state = {
            showMeMonitor: false,
            showMeAluno: false
        }
    }
    operationMonitor() {
        this.setState({
            showMeMonitor: !this.state.showMeMonitor,
            showMeAluno: this.state.showMeAluno
        })

    }
    operationAluno() {
        this.setState({
            showMeAluno: !this.state.showMeAluno,
            showMeMonitor: this.state.showMeMonitor
        })

    }
    render() {
        return (
            <div className="Main">
                <div>
                    <div>
                        <div className="selecionar-perfil">
                            <div>
                                <span>Selecione o Perfil: </span>
                                <button className="btn-aluno" onClick={() => this.operationAluno()}>Meu Perfil como aluno</button>
                                <button className="btn-monitor" onClick={() => this.operationMonitor()}>Meu Perfil como monitor</button>
                                <button className="btn-editar"><Link to="/editar-perfil"><span>Editar</span></Link></button>
                            </div>
                        </div>
                        {this.state.showMeMonitor ?
                            <React.Fragment>
                                <div className="wrapper">
                                    <div className="info-perfil">
                                        <label className="edit"><Link to="/editar-perfil"><img id="edit-button" src={Edit} alt="Edit" /></Link></label>
                                        <div className="valor-monitoria">
                                            <span>Preço por Hora:</span><p></p>
                                            <label className="valor">{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(localStorage.getItem('price_per_hour'))}</label>
                                        </div>
                                        <label className="user"><img id="user-monitor" src={localStorage.getItem('usuario_foto')} alt={localStorage.getItem('usuario_nome')} /></label>
                                        <div className="dados-perfil">
                                            <label className="nome">{localStorage.getItem('usuario_nome')}</label><p></p>
                                            <label className="tipo-usuario">Monitor</label>
                                            <div className="star-icons">
                                                <label className="star"><img id="star-button" src={Star} alt="Star" /></label>
                                                <label className="star"><img id="star-button" src={Star} alt="Star" /></label>
                                                <label className="star"><img id="star-button" src={Star} alt="Star" /></label>
                                                <label className="star"><img id="star-button" src={Star} alt="Star" /></label>
                                                <label className="star"><img id="star-button" src={Star} alt="Star" /></label>
                                                <span>Não há avaliações ainda.</span>
                                            </div>
                                            <div className="materia">
                                                <p></p>
                                                <label className="nome-materia">{localStorage.getItem('scope_area')}</label><p></p>

                                                <div className="tags">
                                                    <span>Disciplina: </span>
                                                    <label className="tag1">{localStorage.getItem('tagline')}</label>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="sobre-mim">
                                        <label className="edit"><Link to="/editar-perfil"><img id="edit-button" src={Edit} alt="Edit" /></Link>
                                            <span>Sobre Mim</span><p></p>
                                            <label className="sobre-mim-monitor">{localStorage.getItem('about_me_tutor')}</label>
                                        </label>
                                    </div>
                                    {/*<div className="historico">
                                            <label className="edit"><img id="edit-button" src={Edit} alt="Edit" />
                                                <span>Histórico</span>
                                                <input type="text"></input>
                                            </label>
                                        </div>
                                        <div className="idioma">
                                            <label className="edit"><img id="edit-button" src={Edit} alt="Edit" />
                                                <span>Idioma</span>
                                                <input type="text"></input>
                                            </label>
                            </div>*/}
                                </div>
                            </React.Fragment>
                            : null}
                    </div>
                    <div>
                        {this.state.showMeAluno ?
                            <React.Fragment>
                                <div className="wrapper">
                                    <div className="info-perfil-aluno">
                                        <label className="edit"><Link to="/editar-perfil"><img id="edit-button" src={Edit} alt="Edit" /></Link></label>
                                        <label className="user"><img id="user-aluno" src={localStorage.getItem('usuario_foto')} alt={localStorage.getItem('usuario_nome')} /></label>
                                        <div className="dados-perfil-aluno">
                                            <label className="nome">{localStorage.getItem('usuario_nome')}</label><p></p>
                                            <label className="tipo-usuario">Estudante</label>
                                            <div className="star-icons">
                                                <label className="star"><img id="star-button" src={Star} alt="Star" /></label>
                                                <label className="star"><img id="star-button" src={Star} alt="Star" /></label>
                                                <label className="star"><img id="star-button" src={Star} alt="Star" /></label>
                                                <label className="star"><img id="star-button" src={Star} alt="Star" /></label>
                                                <label className="star"><img id="star-button" src={Star} alt="Star" /></label>
                                                <span>Não há avaliações ainda.</span>
                                            </div>
                                            <div className="monitorias-solicitadas">
                                                <p></p>
                                                <label className="disciplina">Disciplinas solicitadas: </label>
                                                <label className="quantidade-monitoria">0</label>
                                            </div>
                                            <div className="data-de-registro">
                                                <p></p>
                                                <label >Registrado em:<span>{localStorage.getItem('createdAt')}</span></label>
                                                <label className="data-cadastro"> Junho de 2020</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sobre-mim">
                                        <label className="edit"><Link to="/editar-perfil"><img id="edit-button" src={Edit} alt="Edit" /></Link>
                                            <span>Sobre Mim</span><p></p>

                                        </label>
                                        <label className="sobre-mim-aluno" >{localStorage.getItem('about_me_student')}</label>
                                    </div>
                                </div>
                            </React.Fragment>
                            : null}
                    </div>

                </div>
            </div>
        )
    }
}