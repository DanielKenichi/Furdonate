import React from "react";
import {FiLogIn} from "react-icons/fi";

import './styles.css';

import nyasudrawing from '../../assets/nyasudrawing.jpg';
import logoImg from '../../assets/Furdonate.svg';

export default function Login({title}){
    return(
        <div className="login-container">
            <section className="form">
                <img className="logo"src={logoImg} alt="furdonate"/>
                <form>

                    <h1>Faça seu login</h1>
                    <input placeholder="Seu Id"></input>
                    <button className="button" type="submit">Entrar</button>

                    <a href="/register">
                        <FiLogIn size={16} color="#E02041"/>
                            Não tenho cadastro
                    </a>

                </form>
            </section>

        </div>
    )
}