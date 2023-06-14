import {useParams, useLocation, Link, Outlet} from 'react-router-dom';
import { getMoviesDetails } from 'components/Servise/GetApiMovies';  
import { useState, useEffect } from 'react';
import { HiArrowNarrowLeft } from 'react-icons/hi';

const MovieDetails = () => {
    const [movieDetail, setMovieDetail] = useState({});
    const location = useLocation();
    const {movieId} = useParams();

    useEffect(() => {
        getMoviesDetails(movieId)
        .then(data => setMovieDetail(data));
    }, [movieId]);
    
    const { original_title, overview, genres, poster_path, vote_average } =
    movieDetail;
    const score = vote_average * 10;
    const scoreToFixed = score.toFixed(2);
    return(
        <div className='container'>
            <button  className='Button' type='button'>
                <Link className='LinkBack' to={location.state?.from ?? '/'}>
                    <HiArrowNarrowLeft size={16}/>
                    Go back
                </Link>
            </button>
            <div className='MovieBox'>
                <img 
                src={
                poster_path
              ? `https://image.tmdb.org/t/p/w300${poster_path}`
              : `http://www.suryalaya.org/images/no_image.jpg`
          }
          width={320}
          height={380}
          loading='lazy'
          alt='poster'
          />
            </div>
            <div className='MovieInfo'>
                <h2 className='Title'>{original_title}</h2>
                <h3>User score: {scoreToFixed}%</h3>
                <h3>Overview</h3>
                <p>{overview}</p>
                <h3>Genres</h3>
                <ul className='GenresList'>
                    {genres && 
                     genres.length && 
                     genres.map(({id, name}) => <li key={id}>{name}</li>
                     )}
                </ul>
            </div>
            <div className='InfoBox'>
                <h4>Additional information</h4>
                <u>
                    <li>
                        <Link to="cast" state={{...location.state}}>
                            Cast
                        </Link>
                    </li>
                    <li>
                        {' '}
                        <Link to="reviews" state={{...location.state}}>
                            Reviews
                        </Link>
                    </li>
                </u>
            </div>
            <Outlet />
        </div>
    )
}

export default MovieDetails;