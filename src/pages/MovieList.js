import { Link, useLocation } from "react-router-dom";
import propTypes from 'prop-types';

export const MovieList = ({movies}) => {
    const location = useLocation();
    return(
            <div>
                {movies.map(movie => (
                    <li key={movie.id}>
                        <Link className="MovieLink" to={`/movies/${movie.id}`} state={{from:location}}>
                        {movie.original_title || movie.name}
                        </Link>
                    </li>
                ))}
            </div>
    );
};

MovieList.propTypes = {
    movies: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.number.isRequired,
            name: propTypes.string.isRequired,
            original_title: propTypes.string,
        })
    ),
};