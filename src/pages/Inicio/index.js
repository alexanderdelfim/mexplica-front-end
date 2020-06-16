import React from 'react'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import UserInfoArea from '../../components/UserInfo/UserInfo'
import RecivedProposals from '../../components/Modal/RecivedProposals/RecivedProposals'

import './styles.css';

export default function Inicio() {

    return(
    <div>
        <div className="main">
        <Header />
            <div className="dashboard-content">
                <div className="user-area">
                    <UserInfoArea />
                    <div className="content-user">
                        <RecivedProposals />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    </div>
    )
}

