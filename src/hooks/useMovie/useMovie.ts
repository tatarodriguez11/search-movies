import { useState, useCallback } from "react";
import { searchMovieDetail } from "../../services/movies";
import { MovieDetailResponse } from "../../interfaces";

export function useMovie() {
  const [movie, setMovie] = useState<MovieDetailResponse>({
    Title: "",
    Plot: "",
    Actors: "",
    Year: "",
    Country: "",
    Language: "",
    Genre: "",
    Director: "",
    Poster: "",
    imdbID: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getMovie = useCallback(async (movieId: string) => {
    console.log("dentro de la funcion", movieId);
    try {
      setLoading(true);
      setError(null);
      const newMovie: MovieDetailResponse = await searchMovieDetail({
        movieId,
      });
      setMovie(newMovie);
    } catch (error: any) {
      setError(error.message);
    } finally {
      // tanto en el try como en el catch
      setLoading(false);
    }
  }, []);

  return { movie, getMovie, loading, error };
}
