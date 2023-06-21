import { useState, useCallback, useEffect, SyntheticEvent } from "react";
import debounce from "just-debounce-it";
import { useMovies } from "../../hooks/useMovies/useMovies";
import { useSearch } from "../../hooks/useSearch/useSearch";
import { Movies } from "../../components/Movies/Movies";
import { FormSearch } from "../../components/FormSearch/FormSearch";
import { createClient, Entry, EntrySkeletonType } from "contentful";
import MovieSlider from "../../components/MovieSlider/MovieSlider";
import { useFeatureFlag } from "configcat-react";
import './Search.scss'

export function Search() {
  const [premierMovies, setPremierMovies] = useState<
    Entry<EntrySkeletonType, undefined, string>[]
  >([]);

  const [sort, setSort] = useState(false);

  const { search, updateSearch, error } = useSearch();
  const { movies, loading, getMovies } = useMovies({ search, sort });
  const { value: showpremiermoviesValue, loading: showpremiermoviesLoading } =
    useFeatureFlag("showPremierMovies", false);

  const getPremierMovies = async () => {
    const client = createClient({
      space: "frqznugufo5p",
      accessToken: "p56pybcy8XdoTV8Q7PChzh3Rgxw13Iz8_Q-7-qe0Vog",
    });
    try {
      const { items } = await client.getEntries({ content_type: "movie" });
      setPremierMovies(items);
    } catch (error) {
      throw new Error("Hubo un error al obtener la data de contentful");
    }
  };

  useEffect(() => {
    console.log(showpremiermoviesValue);
    console.log(showpremiermoviesLoading);
  }, [showpremiermoviesValue]);

  useEffect(() => {
    getPremierMovies();
  }, []);

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

  return (
    <div className="search__page">
      <h1>Buscador de películas</h1>
      <FormSearch
        handleChange={handleChange}
        handleSort={handleSort}
        handleSubmit={handleSubmit}
        sort={sort}
        error={error}
      />
      {!showpremiermoviesLoading && showpremiermoviesValue && (
        <>
          <h2>Películas en cartelera</h2>
          <MovieSlider movies={premierMovies} />
        </>
      )}
      <main>{loading ? <p>Cargando...</p> : <Movies movies={movies} />}</main>
    </div>
  );
}
