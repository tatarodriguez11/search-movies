import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Entry, EntrySkeletonType, createClient } from "contentful";
import { useFeatureFlag } from "configcat-react";
import { DetailTable } from '../../components/DetailTable/DetailTable';
import { useMovie } from '../../hooks/useMovie/useMovie';
import './MovieDetail.scss'
import MovieGallery from '../../components/MovieGallery/MovieGallery';

export function MovieDetail(){
  const { movieId } = useParams();
  const { movie, loading, getMovie } = useMovie();
  const [banners, setBanners] = useState<
    Entry<EntrySkeletonType, undefined, string>[]
  >([]);
  const { value: showMovieGalleryValue, loading: showMovieGalleryLoading } =
    useFeatureFlag("showMovieGallery", false);

  const getMovieGalleries = async () => {
    const client = createClient({
      space: "frqznugufo5p",
      accessToken: "p56pybcy8XdoTV8Q7PChzh3Rgxw13Iz8_Q-7-qe0Vog",
    });
    try {
      const { items } = await client.getEntries({
        content_type: "movieBanners",
      });
      setBanners(items);
    } catch (error) {
      throw new Error("Hubo un error al obtener la data de contentful.");
    }
  };

  useEffect(() => {}, [showMovieGalleryValue])

  useEffect(() => {
    if (movieId) {
      getMovie(movieId);
      getMovieGalleries();
    }
  }, []);

  useEffect(() => {}, [banners]);
  
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
      {!showMovieGalleryLoading && showMovieGalleryValue && (
        <>
          <h3>Galeria de imagenes:</h3>
          <MovieGallery banners={banners} />
        </>
      )}
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