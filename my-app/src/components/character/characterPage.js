import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useLocation } from "react-router-dom";

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
                <h2> {character.name}</h2>
                <h4>Nickname - {character.nickname}</h4>
                <h4>Date of birth - {character.birthday}</h4>
                <img src={character.img} style={{width: 300, height:400}}/>
                <h4>Status - {character.status}</h4>
                <ul>List of occupations:
                    {character.occupation.map((occupation, id)=>(
                    <li key={id}>{occupation}</li>
                    ))}
                </ul>
            </div>
            }
        </div>
    )
};

export default CharacterPage;


