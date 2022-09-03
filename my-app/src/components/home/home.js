import React, { useState, useEffect } from 'react';
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
    
    console.log('data',data[6]);
    
    ///Running over the Data object and displaying data by different params.
    return (
        <div>
            <h1 id="title">Breaking Bad</h1>
            {data.map((data) => (
            <div key={data.episode_id}>
                <h4>{data.title}</h4>
                <p>episode id{data.episode_id}</p>
            </div>
            ))}
        </div>
    )
};

export default Home;