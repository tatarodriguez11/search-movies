import { ListOfMoviesProps } from "./iListOfMovies";
import CardMovie from "../CardMovie/CardMovie";
import './ListOfMovies.scss'


const ListOfMovies = ({ movies }: ListOfMoviesProps) => {
  return (
    <ul aria-role="list" className="movies">
      {movies.map((movie) => (
        <CardMovie film={movie} key={movie.id}/>
      ))}
    </ul>
  )
}

export default ListOfMovies