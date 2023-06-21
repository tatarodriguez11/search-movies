import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import "matchmedia-polyfill";
import MovieSlider from "./MovieSlider";

describe("MovieSlider", () => {
  const movies = [
    {
      fields: {
        imageUrl: "https://example.com/image1.jpg",
        title: "Movie 1",
      },
    },
    {
      fields: {
        imageUrl: "https://example.com/image2.jpg",
        title: "Movie 2",
      },
    },
  ];

  it("renders correctly with movies", () => {
    render(<MovieSlider movies={movies} />);

    // Verificar que los elementos del slider se rendericen correctamente
    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(movies.length);

    // Verificar que los títulos y las imágenes de las películas se muestren correctamente
    movies.forEach((movie) => {
      expect(screen.getAllByText(movie.fields.title).length).toBeGreaterThan(0);
      expect(screen.getAllByAltText(movie.fields.title).length).toBeGreaterThan(0);
    });

    // Realizar el snapshot testing
    expect(screen.getByRole("list")).toMatchSnapshot();
  });

  it("renders correctly without movies", () => {
    render(<MovieSlider movies={[]} />);

    // Verificar que no se rendericen elementos del slider
    expect(screen.queryByRole("list")).toBeNull();
  });
});
