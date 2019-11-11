import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import {
    List,
    ListItem,
    ListItemHeader,
    ListItemStrong,
    ListItemSpan
} from './styles';
import { 
    Btn
} from '../../styles' 

export default function Dashboard() {
    const [spots, setSpots] = useState([]);

    useEffect(() => {
        async function loadSpots() {
            const user_id = localStorage.getItem('user'); 
            const response = await api.get('/dashboard', { headers: { user_id } 
        });
            setSpots(response.data);
        }
        loadSpots();
    }, []);

    return (
        <>
        <List>
            {spots.map(spot => (
                <ListItem key={spot._id}>
                    <ListItemHeader style={{ backgroundImage: `url(${spot.thumbnail_url})` }}/>
                    <ListItemStrong>{spot.company}</ListItemStrong>
                    <ListItemSpan>{spot.price ? `R$${spot.price}/dia` : `GRATUITO`}</ListItemSpan>
                </ListItem>
            ))}
            
        </List>

        <Link to='/New'>
            <Btn>Cadastrar novo spot</Btn>
        </Link>
        </>
    )
}