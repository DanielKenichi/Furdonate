import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi"

import './styles.css';

import logoImg from '../../assets/Furdonate.svg';
import api from '../../services/api';

export default function NewDonation(){
    const [nickname, setNickName] = useState('');
    const [artist, setArtist] = useState('');
    const [value, setValue] = useState('');
    const [message, setMessage] = useState('');

    const navigate = useNavigate();

    async function handleDonation(e) {
        e.preventDefault();
        const data = {nickname, artist, value, message};
        try{
            const response = await api.post('/createDonation', data);
            
            alert(`Doação realizada com sucesso! ${response.data.id}`);
            navigate("/donate");
        }
        catch(err){
            alert("Erro no cadastro");
        }
    }


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
                <form onSubmit={handleDonation}>
                    <input 
                        placeholder="Nickname"
                        value={nickname}
                        onChange={e=>setNickName(e.target.value)}
                    />
                    <input 
                        placeholder="Artista"
                        value={artist}
                        onChange={e=>setArtist(e.target.value)}
                    />
                    <input 
                        placeholder="valor"
                        value={value}
                        onChange={e=>setValue(e.target.value)}
                    />
                    <textarea
                        placeholder="mensagem"
                        value={message}
                        onChange={e=>setMessage(e.target.value)}
                    />
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
         </div>
    );
}