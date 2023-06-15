import { useState, useEffect } from "react";
import { GetTrending } from "../Servise/GetApiMovies";
import { Loader } from "components/Loader/Loader";
import { MovieList } from "./MovieList";

const Home = () => {
    const [trendMovies, setTrendMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

useEffect(() =>{
    setIsLoading(true);
    GetTrending()
    .then(data => {
        setTrendMovies(data.results);
        setIsLoading(false);
    })
}, []);
    return (
        <main className="main">
    <h1 className="title">Top Movies for today</h1>
    <ul className="movieList">
    <MovieList movies={trendMovies}/>
    {isLoading && <Loader/>}
    </ul>
        </main>
    );
};

export default Home;