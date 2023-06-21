import { ListOfMoviesProps } from "./iMovies";
import ListOfMovies from "../ListOfMovies/ListOfMovies";
import { NoMoviesResults } from "../NoMoviesResult/NoMoviesResult";
import './Movies.scss'
export function Movies({ movies }: ListOfMoviesProps) {
  const hasMovies = movies?.length > 0;

  return hasMovies ? <ListOfMovies movies={movies} /> : <NoMoviesResults />;
}
