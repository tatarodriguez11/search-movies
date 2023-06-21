import { FormSearchProps } from "./iFormSearch";
import './FormSearch.scss'
export function FormSearch ({handleChange, handleSubmit, handleSort, sort, search,error }: FormSearchProps) {

  return(
    <header>
      <form name="form" className="search__form" onSubmit={handleSubmit}>
        <fieldset className="search__form-container">
          <input
            className="search__form-input"
            style={{
              borderColor: error ? "red" : "transparent",
            }}
            onChange={handleChange}
            value={search}
            name="query" 
            data-testid="search-input"
            placeholder="Avengers, Star Wars, The Matrix..."
          />
          <button className="search__form-btn" type="submit">
            Buscar
          </button>
        </fieldset>
        <fieldset className="search__form-sort--container">
          <input
            id="sort"
            type="checkbox"
            onChange={handleSort}
            checked={sort}
          />
          <label htmlFor="sort">Ordenar resultados</label>
        </fieldset>
      </form>
      {error && <p className="search__form-error">{error}</p>}
      <hr />
    </header>
  )
}