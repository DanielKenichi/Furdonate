import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi"

import './styles.css';

import logoImg from '../../assets/Furdonate.svg';

export default function NewDonation(){

    return(
        <div className="newDonation-container">
            <div className="content">
                <section>
                    <img className="logo" src={logoImg} alt="Furdonate"/>
                    <h1>Faça uma nova doação</h1>
                    <p>Apoie o seu artista furry favorito! :3</p>

                    <Link className="back-link" to="/donate">
                        <FiArrowLeft size={16} color="#E02041"/>
                            Voltar para donate
                    </Link>
                </section>
                <form>
                    <input placeholder="Nickname"></input>
                    <input placeholder="Artista"></input>
                    <input placeholder="valor"></input>
                    <textarea placeholder="mensagem"></textarea>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
         </div>
    );
}