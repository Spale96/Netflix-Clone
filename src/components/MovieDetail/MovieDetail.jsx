import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from '../../Api/axios'
import './MovieDetail.css'


const base_url = "https://image.tmdb.org/t/p/original/";

export default function MovieDetail() {
    const [movie, setMovie] = useState('');
    const [error, setError] = useState(false);

    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`
                );
                setMovie(response.data);
                console.log(response.data);
            } catch (error) {
                console.error(error);
                setError(true);
            }
        };
        fetchData();
    }, [id]);


    if (error) {
        return (
            <div className='movie__container'>
                <span>There was an error fetching the movie data for this movie.<br />Please select new film.</span>
            </div>
        )
    };


    return (
        <div className='movie__container'>
            <div className='details__container'>
                <h2>{movie.title}</h2>
                <p>{movie.overview}</p>
                <span className='released'>{movie.status}.</span>
                <span>Movie release date: {movie.release_date}.</span>
            </div>

            <img
                src={`${base_url}${movie.poster_path || movie.background_path}`}
                alt={movie.id}
                className='row__poster'
            />
        </div>
    )
}
