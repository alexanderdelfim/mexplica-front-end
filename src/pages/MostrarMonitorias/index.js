import React, { useState, useEffect } from 'react';

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import api from '../../services/api'

import './styles.css';

export default function MostrarMonitorias() {

    const [monitorias, setMonitorias] = useState([]);

    useEffect(() => {
        api.get('monitorias', {
            
        })
    }, [])

    return (
        <div className="Main">
            <Header />
                <div className="filtros">

                </div>
                <div className="show-monitorias">

                </div>
            <Footer />
        </div>
    )
}

