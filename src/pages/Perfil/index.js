import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as ReactDOM from "react-dom";
import { useState } from 'react';

import './styles.css';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Perfis from '../../components/Perfis'


export default function MeuPerfil() {
    
    return (

        <div className="Main">
            <Header />
            <Perfis />
            <Footer />
        </div>
    )
}

