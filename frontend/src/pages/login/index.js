import React from "react";
import {FiLogIn} from "react-icons/fi";
import { Link } from "react-router-dom";

import './styles.css';

import logoImg from '../../assets/Furdonate.svg';

export default function Login(){
    return(
        <div className="login-container">
            <section className="form">
                <img className="logo" src={logoImg} alt="furdonate"/>
                <form>

                    <h1>Faça seu login</h1>
                    <input placeholder="Seu Id"></input>
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041"/>
                            Não tenho cadastro
                    </Link>

                </form>
            </section>

        </div>
    )
}