import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import axios from "axios";
import { useLocation } from "react-router-dom";

const EpisodePage = () => {
    let Location = useLocation();
    const [episode, setEpisode] = useState();

    /// Getting specific episode data from api call - getting the episode param from the homePage.
    useEffect(() => {
      axios
      .get(`https://breakingbadapi.com/api/episodes/${Location.state.id}`)
      .then((response) => setEpisode(response.data[0]));
    },[]);

    /// Displaying the episode data I got from the api call.
    /// There is Link to the character page the user wants to see - also sends to the 'CharacterPage' component the 'character' name param.
    /// 
    return (
        <div>
            <h1 id="title">Episode Page</h1>
            {typeof episode !== 'undefined' && 
            <div>
                <h2>Episode title - {episode.title}</h2>
                <h4> Air date {episode.air_date}</h4>
                <h4>Characters:</h4>
                {episode.characters.map((character)=>(
                <Link to={'/character'} state = {{ id: character }}>
                    <p>{character}</p>
                </Link>
                ))}
            </div>
            }
            <Link to={'/'}>
                <h3>Back to all episodes</h3>
            </Link>
        </div>
    )
};

export default EpisodePage;