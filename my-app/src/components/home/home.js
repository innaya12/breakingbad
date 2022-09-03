import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import axios from "axios";
import './style.css';

const Home = () => {
    const [data, setData] = useState([]);

    /// Getting the data from api call - episodes param - saving in data param
    useEffect(() => {
        axios
        .get("https://breakingbadapi.com/api/episodes")
        .then((response) => setData(response.data));
    }, []);
    
    console.log('data',data[7]);

    ///Running over the Data object and display the seasin only if the episode id is 1
    /// and title and air date always display.
    return (
        <div>
            <h1 id="title">Breaking Bad</h1>
            {data.map((data) => (
            <div key={data.episode_id}>
                {data.episode == '1' ? <h2>Season {data.season}</h2> : ''}
                <Link 
                    to={'/episode'} 
                    state = {{ episode: data.episode, season: data.season }}>
                    <h3> * {data.title}</h3>
                </Link>
                <p>Air date {data.air_date}</p>
            </div>
            ))}
        </div>
    )
};

export default Home;