import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import axios from "axios";
import './style.css';

const Home = () => {
    const [data, setData] = useState([]);

    /// Getting all the episodes data from api call - episodes param - saving in data param
    useEffect(() => {
        axios
        .get("https://breakingbadapi.com/api/episodes")
        .then((response) => setData(response.data));
    }, []);
    
    /// Running over the Data and displaying it.
    /// The season displays every time we get the first episode of the season.
    /// There is Link to the episode page the user wants to see - also sends to the 'EpisodePage' component the 'episode_id' param.
    return (
        <div>
            <h1 id="title">Breaking Bad</h1>
            {data.map((data) => (
            <div key={data.episode_id}>
                {data.episode == '1' ? <h2>Season {data.season}</h2> : ''}
                <Link to={'/episode'} state = {{ id: data.episode_id }}>
                    <h3> * {data.title}</h3>
                </Link>
                <p>Air date {data.air_date}</p>
            </div>
            ))}
        </div>
    )
};

export default Home;