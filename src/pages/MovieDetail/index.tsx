import { Link, useParams } from 'react-router-dom';
import './MovieDetail.scss'
import { DetailTable } from '../../components/DetailTable/DetailTable';
import { useMovie } from '../../hooks/useMovie/useMovie';
import { useEffect } from 'react';

export function MovieDetail(){
  const { movieId } = useParams();
  const { movie, loading, getMovie } = useMovie();

  useEffect(() => {
    if (movieId) {
      getMovie(movieId);
    }
  }, []);
  
  return(
    <div className="detail__page">
      <main>
        {loading ? (
          <p>Cargando...</p>
        ) : (
          <>
            <h1>
              Detalle de <em>{movie.Title}</em>
            </h1>

            <DetailTable
              plot={movie?.Plot}
              actors={movie.Actors}
              year={movie.Year}
              country={movie.Country}
              language={movie.Language}
              genre={movie.Genre}
              director={movie.Director}
              poster={movie.Poster}
              title={movie.Title}
            />
          </>
        )}
      </main>
      
      <p className="detail__back">
        {" "}
        <em>
          Si quieres seguir buscando información de tus pelis favoritas, da
          click <Link to="/search">aquí</Link>
        </em>{" "}
      </p>
    </div>
  )
}