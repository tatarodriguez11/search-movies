import React from 'react'
import { Link } from "react-router-dom";
import { CardMovieProps } from "./iCardMovie";
import './CardMovie.scss'

const CardMovie = ({film}: CardMovieProps) => {
  return(
    <li className="movie" key={film.id}>
      <Link to={`/movies/${film.id}`}>
        <h3 className='movie__title'>{film.title}</h3>
        <p className='movie__year'>{film.year}</p>
        <img src={film.image} alt={film.title} className='movie__image'/>
      </Link>
    </li>
  )
}

export default CardMovie