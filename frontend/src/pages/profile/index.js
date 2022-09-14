import React from "react";
import { FiPower } from "react-icons/fi"

import './styles.css';

import logoImg from '../../assets/Furdonate.svg';


export default function Profile()
{
    return(
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Furdonate"/>
                <span>Bem vindo UwU</span>
                <button>
                    <FiPower size={18} color="#E02041"/>
                </button>
            </header>
            <h1>Doações Recebidas</h1>
            <ul>
                <li>
                    <strong>Doador</strong>
                        <p>Lucky</p>
                    <strong>Mensagem</strong>
                        <p>UwU</p>
                    <strong>Valor</strong>
                        <p>621</p>
                </li>
                <li>
                    <strong>Doador</strong>
                        <p>Lucky</p>
                    <strong>Mensagem</strong>
                        <p>UwU</p>
                    <strong>Valor</strong>
                        <p>621</p>
                </li>
                <li>
                    <strong>Doador</strong>
                        <p>Lucky</p>
                    <strong>Mensagem</strong>
                        <p>UwU</p>
                    <strong>Valor</strong>
                        <p>621</p>
                </li>
            </ul>
        </div>
    )
}