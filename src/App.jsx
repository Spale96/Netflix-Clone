import React from 'react'
import './App.css';
import Row from './components/Row/Row';
import requests from './Api/requests';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieDetail from './components/MovieDetail/MovieDetail';
import MainRow from './MainRow/MainRow';


function App() {
    return (
        <Router>
            <div className='App'>
                <Routes>
                    <Route path='/' element={
                        <>
                            <Navbar />
                            <Banner />
                            <MainRow title="NETFLIX ORIGINALS"
                                fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}
                            />
                            <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
                            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
                            <Row title="Action Movies" fetchUrl={requests.fetchTopActionMovies} />
                            <Row title="Comedy Movies" fetchUrl={requests.fetchTopComedyMovies} />
                            <Row title="Horror Movies" fetchUrl={requests.fetchTopHorrorMovies} />
                            <Row title="Romance Movies" fetchUrl={requests.fetchTopRomanceMovies} />
                            <Row title="Documentaries" fetchUrl={requests.fetchTopDocumentaries} />
                        </>
                    } />
                    <Route path="/moviedetail/:id" element={<MovieDetail />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App


