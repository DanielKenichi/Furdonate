import React, { useState } from "react";
import { Link } from "react-router-dom";
import {FiArrowLeft} from "react-icons/fi";

import './styles.css';

import api from '../../services/api';

import logoImg from '../../assets/Furdonate.svg';


export default function Register(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [discord, setDiscord] = useState('');
    const [country, setCountry] = useState('');

    async function handleRegister(e) {
        e.preventDefault();
        const data = {name, email, discord, country};
        try{
            const response = await api.post('/createArtist', data);
            
            alert(`Seu Id de acesso: ${response.data.id} `);
        }
        catch(err){
            alert("Erro no cadastro");
        }
    }

    return(
         <div className="register-container">
            <div className="content">
                <section>
                    <img className="logo" src={logoImg} alt="Furdonate"/>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro para receber apoio :3</p>

                    <Link className="back-link" to="/login">
                        <FiArrowLeft size={16} color="#E02041"/>
                            Já tenho um cadastro
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="Nome"
                        value = {name}
                        onChange= {e => setName(e.target.value)}
                    />
                    <input type="email"placeholder="E-mail"
                        value = {email}
                        onChange= {e => setEmail(e.target.value)}
                    />
                    <input placeholder="Link para discord"
                        value = {discord}
                        onChange= {e => setDiscord(e.target.value)}
                    />
                    <input placeholder="País"
                        value = {country}
                        onChange= {e => setCountry(e.target.value)}
                    />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
         </div>
    );
}