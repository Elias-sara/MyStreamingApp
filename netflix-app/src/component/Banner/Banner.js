import React, { useEffect, useState } from 'react';
import requests from '../../utils/requests';
import axios from '../../utils/axios';
import "./Banner.css";

// Function to truncate text
const truncate = (text, length) => {
    if (text?.length > length) {
        return text.substring(0, length) + '...';
    }
    return text;
};

const Banner = () => {
    const [movie, setMovie] = useState({});

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const request = await axios.get(requests.fetchNetflixOriginals);
                const movies = request.data.results;
                setMovie(movies[Math.floor(Math.random() * movies.length)]);
            } catch (error) {
                console.log("Error fetching movie data:", error);
            }
        };

        fetchMovie();
    }, []);

    return (
        <div className="banner" style={{
            backgroundSize: "cover",
            backgroundImage: movie?.backdrop_path 
                ? `url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')` 
                : `url('path/to/default/image.jpg')`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
        }}>
            <div className="banner_contents">
                <h1 className="banner_title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner_buttons">
                    <button className="banner_button play">Play</button>
                    <button className="banner_button">My List</button>
                </div>
                <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
            </div>
            <div className="banner_fadeBottom" />
        </div>
    );
};

export default Banner;
