import React, { useEffect, useState } from "react";
import { FiPower } from "react-icons/fi"
import { Link } from "react-router-dom";
import './styles.css';

import api from '../../services/api';
import logoImg from '../../assets/Furdonate.svg';


export default function Profile()
{
    const [donations, setDonations] = useState([])

    const artistName = localStorage.getItem('artist_name');
    const artistId = localStorage.getItem('artist_id');

    useEffect(() => {
        api.get('artistDonations',{
            headers:{
                Authorization: artistId
            }
        }).then(response => {
            setDonations(response.data)
        })
    }, [artistId]);

    return(
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Furdonate"/>
                <span>Bem vindo, {artistName} UwU</span>
                <Link to="/login">
                    <button>
                        <FiPower size={18} color="#E02041"/>
                    </button>
                </Link>
            </header>
            <h1>Doações Recebidas</h1>
            <ul>
                {donations.map(donation =>(
                    <li key={donation.id}>
                        <strong>Doador</strong>
                            <p>{donation.nickname}</p>
                        <strong>Mensagem</strong>
                            <p>{donation.message}</p>
                        <strong>Valor</strong>
                            <p>{Intl.NumberFormat('pr-BR',{style: 'currency', currency: 'BRL'}).format(donation.value)}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}