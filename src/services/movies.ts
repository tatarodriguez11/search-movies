import { MovieDetailResponse, movieService } from "../interfaces"

const API_KEY = 'a4c0a215'

export const searchMovies = async ({ search }: movieService) => {
  if (search === '') return null

  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
    const json = await response.json()

    const movies = json.Search
    console.log(movies);
    

    return movies?.map((movie: MovieDetailResponse) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      image: movie.Poster
    }))
  } catch (e) {
    throw new Error('Error searching movies')
  }
}

export const searchMovieDetail = async({movieId}: {movieId: string}) => {
  console.log('id', movieId);
  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${movieId}`)
    const json = await response.json()
    return json
  } catch (error) {
    throw new Error('Error looking for this movie')
  }
}