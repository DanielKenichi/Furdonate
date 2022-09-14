import React, {useEffect, useState}from "react";
import { Link } from "react-router-dom";

import './styles.css';

import logoImg from '../../assets/Furdonate.svg';
import api from '../../services/api';


export default function Donate(){
    const [artists, setDonations] = useState([])

    useEffect(() => {
        api.get('artists')
            .then(response => {
            setDonations(response.data)
         })
        }, []);

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
                {artists.map(artist => (
                    <li>
                        <strong className="name">{artist.name}</strong>
                        <strong>E-mail</strong>
                            <p>{artist.email}</p>
                        <strong>Discord server</strong>
                            <p>{artist.discord_server}</p>
                        <strong>País</strong>
                            <p>artist.country</p>
                    </li>
                ))}
            </ul>
            
        </div>
    )
}