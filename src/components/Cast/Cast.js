import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieCredits } from 'Servise/GetApiMovies';

const Cast = () => {
  const [castList, setCastList] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCredits(movieId).then(data => setCastList(data.cast));
  }, [movieId]);

  return (
    <ul>
      {castList.length > 0
        ? castList.map(({ id, name, profile_path, character }) => (
            <li className='CastItem' key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w200${profile_path}`
                    : `http://www.suryalaya.org/images/no_image.jpg`
                }
                alt="actor"
                loading="lazy"
                width={120}
                height={180}
              />
              <p>{name}</p>
              <p> Character: {character}</p>
            </li>
          ))
        : "Sorry, there isn't any info : ("}
    </ul>
  );
}

export default Cast;