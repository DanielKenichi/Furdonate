import React, { useState } from "react";
import {FiLogIn} from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

import './styles.css';

import api from '../../services/api';
import logoImg from '../../assets/Furdonate.svg';

export default function Login(){
    const [id, setId] = useState('');
    
    const navigate = useNavigate();

    async function handleLogin(e){
        e.preventDefault();

        try{
            const response = await api.post('/session', { id });

            localStorage.setItem('artist_id', id);
            localStorage.setItem('artist_name', response.data.artist.name);

            navigate('/profile');
        }
        catch(err){
            alert("Falha no Login. Tente novamente");
        }
    }

    return(
        <div className="login-container">
            <section className="form">
                <img className="logo" src={logoImg} alt="furdonate"/>
                <form onSubmit={handleLogin}>

                    <h1>Faça seu login</h1>
                    <input 
                        placeholder="Seu Id"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
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