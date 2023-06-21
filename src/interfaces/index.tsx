export interface MovieDetailResponse {
  Title: string,
  Plot: string,
  Actors: string,
  Year: string,
  Country: string,
  Language: string,
  Genre: string,
  Director: string,
  Poster: string,
  imdbID: string
}

export interface movieService {
  search: string
}