import React from "react";
import { Link } from "react-router-dom";
import {FiArrowLeft} from "react-icons/fi";

import './styles.css';


import logoImg from '../../assets/Furdonate.svg';


export default function Register(){
    return(
         <div className="register-container">
            <div className="content">
                <section>
                    <img className="logo" src={logoImg} alt="Furdonate"/>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro e apoie o seu artista furry favorito! :3</p>

                    <Link className="back-link" to="/login">
                        <FiArrowLeft size={16} color="#E02041"/>
                            Já tenho um cadastro
                    </Link>
                </section>
                <form>
                    <input placeholder="Nome"></input>
                    <input type="email"placeholder="E-mail"></input>
                    <input placeholder="Link para discord"></input>
                    <input placeholder="País"></input>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
         </div>
    );
}