import React from "react";
import { getByRole, render } from "@testing-library/react";
import { Movies } from "./Movies";
import { BrowserRouter } from "react-router-dom";

describe("Movies component", () => {
  const movies = [
    {
      id: "1",
      title: "The Godfather",
      image: "https://example.com/movie.jpg",
      year: "1972",
    },
    {
      id: "2",
      title: "Pulp Fiction",
      image: "https://example.com/movie.jpg",
      year: "1994",
    },
    {
      id: "3",
      title: "The Shawshank Redemption",
      image: "https://example.com/movie.jpg",
      year: "1994",
    },
  ];

  it("should match the snapshot when there are movies", () => {
    const { container } = render(
      <BrowserRouter>
        <Movies movies={movies} />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });

  it("should match the snapshot when there are no movies", () => {
    const { container } = render(<Movies movies={[]} />);
    expect(container).toMatchSnapshot();
  });

  it("should render ListOfMovies component when there are movies", () => {
    const { getByRole } = render(
      <BrowserRouter>
        <Movies movies={movies} />
      </BrowserRouter>
    );
    expect(getByRole("list")).toBeInTheDocument();
  });

  it("should render NoMoviesResults component when there are no movies", () => {
    const { getByText } = render(<Movies movies={[]} />);
    expect(
      getByText("No se encontraron películas para esta búsqueda")
    ).toBeInTheDocument();
  });
});
