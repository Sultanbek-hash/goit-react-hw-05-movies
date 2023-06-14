import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { GetTrending } from "components/Servise/GetApiMovies";
import { Loader } from "components/Loader/Loader";

const Home = () => {
    const [trendMovies, setTrendMovies] = useState([]);
    const location = useLocation();
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
    {trendMovies.map(movie =>(
        <li key={movie.id}>
            <Link className="MovieLink" to={`/movies/${movie.id}`} state={{from:location}}>
            {movie.original_title || movie.name}
            </Link>
        </li>
    ))}
    {isLoading && <Loader/>}
    </ul>
        </main>
    );
};

export default Home;