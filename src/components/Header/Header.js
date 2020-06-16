import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import './styles.css';

import MexplicaLogoHorizontal from '../../assets/img/logo-icone.svg';

const Header = () => {

	const [showInfo, setShowInfo] = useState(false);
	const [showMonitoriaOptions, setShowMonitoriaOptions] = useState(false);

	function handleShowInfo() {
		if(showInfo) {
			setShowInfo(false);
		} else {
			setShowInfo(true)
		}
	}

	function handleShowMonitoriaOptions() {
		if(showMonitoriaOptions) {
			setShowMonitoriaOptions(false);
		} else {
			setShowMonitoriaOptions(true)
		}
	}

	let isLogged = false;
	let usuario_nome = '';
	let usuario_foto = '';

	if(localStorage.getItem('fbData')) {
		const data = localStorage.getItem('fbData');
		const newData = JSON.parse(data);
		usuario_nome = newData.name;
		usuario_foto = newData.picture;
		isLogged = true;
		localStorage.setItem('usuario_nome', usuario_nome)
		localStorage.setItem('usuario_foto', usuario_foto)
		localStorage.setItem('isLogged', isLogged)
	}
	else if(localStorage.getItem('usuario_id')){
		usuario_nome = localStorage.getItem('usuario_nome');
		usuario_foto = "https://img.icons8.com/ultraviolet/120/000000/student-male.png"
		localStorage.setItem('usuario_foto', usuario_foto)/*localStorage.getItem('usuario_foto') */;
		isLogged = true;
		localStorage.setItem('isLogged', isLogged)
	}
	function handleLogout() {
		localStorage.clear();
	}
	return (
		<div className="Header-mexplica">
			<div className="container-header">
				<div className="navbar-content">
					<div className="toggle-menu">
						<div className="one"></div>
						<div className="two"></div>
						<div className="three"></div>
					</div>
					<div className="main-bar">
						<div className="logo-img">
							<Link id="link-logo" to="/inicio">
								<img id="mexplica-logo-svg" src={MexplicaLogoHorizontal} alt="Mexplica"/>
								<h1>Mexplica</h1>
							</Link>
						</div>
						<ul className="topnav">
							<li className="dropdown-item">
								<Link to="/monitorias">Encontrar monitorias</Link> 
							</li>
							<li className="dropdown-item suas-monitorias-p" onClick={handleShowMonitoriaOptions}> Suas monitorias
								<ul className={showMonitoriaOptions ? "isVisibleList" : "isNotVisibleList"}>
									<li className="dropdown-sub-item">
											<Link to="/publicadas">Monitorias publicadas</Link> 
									</li>
									<li className="dropdown-sub-item">
											<Link to="/cadastrar-monitoria">Cadastrar monitoria</Link> 
									</li>
									<li className="dropdown-sub-item">
											<Link to="/solicitacoes-recebidas">Solicitações recebidas</Link> 
									</li>
								</ul>
							</li>
							<li className="dropdown-user">
								<img id="profile-img"  onClick={handleShowInfo} src={usuario_foto} alt={usuario_nome}/>
								<ul className={showInfo ? "isVisible" : "isNotVisible"}>
									<li className="dropdown-user-item">
										<Link to="/perfil">Perfil</Link> 
									</li>
									<li className="dropdown-user-item">
										<Link onClick={handleLogout} to="/">Sair</Link> 
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header;

