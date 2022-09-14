import React from "react";
import { Link } from "react-router-dom";

import './styles.css';

import logoImg from '../../assets/Furdonate.svg';


export default function Donate(){
    return(
        <div className="donate-container">
            <section>
                <img src={logoImg} alt="Furdonate"/>
            </section>
            <span>
                <h1>Apoie Seu Artista Favorito!</h1>
            </span>
            <Link className="button" to="/donate/new">Fazer uma Doação</Link>
            <ul>
                <li>
                    <strong className="name">Nyasu</strong>
                    <strong>E-mail</strong>
                        <p>ble</p>
                    <strong>País</strong>
                        <p>Brasil</p>
                </li>
            </ul>
            
        </div>
    )
}