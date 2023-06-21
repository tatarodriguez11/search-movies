import { useCallback, useState, SyntheticEvent } from 'react';
import debounce from "just-debounce-it";
import { FormSearch } from '../../components/FormSearch/FormSearch'
import { useSearch } from '../../hooks/useSearch/useSearch';
import './Search.scss'
import { useMovies } from '../../hooks/useMovies/useMovies';
import { Movies } from '../../components/Movies/Movies';
export function Search(){
  const [sort, setSort] = useState(false);

  const { search, updateSearch, error } = useSearch();
  const { movies, loading, getMovies } = useMovies({ search, sort });


  const debouncedGetMovies = useCallback(
    debounce((search: string) => {
      console.log(search);
      getMovies({ search });
    }, 300),
    [getMovies]
  );

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    getMovies({ search });
  };

  const handleSort = () => {
    setSort(!sort);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearch = event.target.value;
    updateSearch(newSearch);
    debouncedGetMovies(newSearch);
  };
 
  return(
    <div>
      <h1>Buscador de películas</h1>
      <FormSearch 
        handleChange={handleChange}
        handleSort={handleSort}
        handleSubmit={handleSubmit}
        sort={sort}
        error={error}
      />
      <main>{loading ? <p>Cargando...</p> : <Movies movies={movies} />}</main>
    </div>
  )
}