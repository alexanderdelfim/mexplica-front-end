import React from 'react'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import './styles.css';

export default function Inicio() {

    return(
    <div>
        <div className="Main">
        <Header />
            <div className="dashboard-content">
                <div className="info">
                </div>
                <div className="user-area">
                    <div className="user-info">
                        <p>User name</p>
                        <p>User info</p>
                    </div>
                    <div className="content-user">
                        <p>test</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
    )
}
