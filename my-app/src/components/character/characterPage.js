import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import '../allCompontentsStyle.css';
import './style.css';

const CharacterPage = () => {
    let Location = useLocation();
    const [character, setCharacter] = useState();

    /// Getting specific character data from api call - getting the character param from EpisodePage.
    useEffect(() => {
        axios
        .get(`https://breakingbadapi.com/api/characters?name=${Location.state.id}`)
        .then((response) => setCharacter(response.data[0]));
    },[]);
  
    /// Displaying the character data I got from the api call.
    return (
        <div>
            {typeof character !== 'undefined' && 
            <div>
                <h1 className='title'> {character.name}</h1>
                <h2 className='nickname-title'>Nickname - {character.nickname}</h2>
                <img src={character.img} className='charater-image' style={{width: 200, height:260}}/>
                <p>Status - <span className='data-p'>{character.status}</span></p>
                <p>Date of birth - <span className='data-p'>{character.birthday}</span></p>
                <ul className='list-title'>List of occupations:
                    {character.occupation.map((occupation, id)=>(
                    <li className='list' key={id}>{occupation}</li>
                    ))}
                </ul>
            </div>
            }
        </div>
    )
};

export default CharacterPage;


