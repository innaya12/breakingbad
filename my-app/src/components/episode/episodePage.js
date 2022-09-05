import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'; 
import axios from 'axios';
import '../allCompontentsStyle.css';
import './style.css';

const EpisodePage = () => {
    let Location = useLocation();
    const [episode, setEpisode] = useState();

    /// Getting specific episode data from api call - getting the episode param from HomePage.
    useEffect(() => {
      axios
      .get(`https://breakingbadapi.com/api/episodes/${Location.state.id}`)
      .then((response) => setEpisode(response.data[0]));
    },[]);

    /// Displaying the episode data I got from the api call.
    /// There is Link to the character page the user wants to see - also sends to the 'CharacterPage' component the 'character' name param.
    return (
        <div>
            <h1 className='title'>Episode Page</h1>
            {typeof episode !== 'undefined' && 
            <div>
                <h2 className='episode-title'>{episode.title}</h2>
                <p> Air date {episode.air_date}</p>
                <h3 className='characters-list-title'>Characters:</h3>
                {episode.characters.map((character,id)=>(
                <Link key={id} id={id} className='remove-link-decoration' to={'/character'} state = {{ id: character }}>
                    <p>{character}</p>
                </Link>
                ))}
            </div>
            }
            <Link to={'/'} className='remove-link-decoration'>
                <h3 className='back-to'>Back to all episodes</h3>
            </Link>
        </div>
    )
};

export default EpisodePage;