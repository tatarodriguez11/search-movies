import { useRef, useState, useMemo, useCallback } from "react";
import { searchMovies } from "../../services/movies";
import { Film } from "../../interfaces/index";
import { useMoviesProps } from "./iUseMovies";

export function useMovies({ search, sort }: useMoviesProps) {
  const [movies, setMovies] = useState<Film[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const previousSearch = useRef(search);

  const getMovies = useCallback(async ({ search }: {search: string}) => {
    if (search === previousSearch.current) return;
    // search es ''

    try {
      setLoading(true);
      setError(null);
      previousSearch.current = search;
      const newMovies = await searchMovies({ search });
      setMovies(newMovies);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((firstMovie, secondMovie) => firstMovie.title.localeCompare(secondMovie.title))
      : movies;
  }, [sort, movies]);

  return { movies: sortedMovies, getMovies, loading, error };
}
