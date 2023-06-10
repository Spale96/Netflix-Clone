import React, { useState, useEffect } from 'react'
import axios from '../../Api/axios';
import '../Row/row.css';
import { Link } from 'react-router-dom';
import MovieDetail from '../MovieDetail/MovieDetail';


const base_url = "https://image.tmdb.org/t/p/original/";


const Row = ({ title, fetchUrl, isLargeRow }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        };
        fetchData();
    }, [fetchUrl]);


    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    };


    return (
        <div className='row'>
            <h1>{title}</h1>
            <div className='row__posters'>
                {movies.map((movie, id) => (
                    <div key={id}>
                        <p>{truncate(movie.title, 30)}</p>
                        <Link to={`/moviedetail/${id}`} target='_blank' rel="noopener noreferrer" key={movie.id} element={<MovieDetail />}>
                            <img
                                key={movie.id}
                                src={`${base_url}${isLargeRow ? movie?.poster_path : movie?.backdrop_path}`}
                                alt={movie.id}
                                className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
                            />
                        </Link>
                    </div>
                ))}
            </div>
        </div >
    );
};

export default Row;


