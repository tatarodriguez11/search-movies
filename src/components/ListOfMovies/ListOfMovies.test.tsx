import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import ListOfMovies from "./ListOfMovies";
import CardMovie from "../CardMovie/CardMovie";
import { Film } from "../../interfaces";
import { BrowserRouter } from "react-router-dom";

describe("<ListOfMovies>", () => {
  const movies: Film[] = [
    {
      id: "1",
      title: "Movie 1",
      year: "2021",
      image: "https://www.example.com/poster1.png",
    },
    {
      id: "2",
      title: "Movie 2",
      year: "2020",
      image: "https://www.example.com/poster2.png",
    },
  ];

  it("matches snapshot", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <ListOfMovies movies={movies} />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders all movies", () => {
    const { getAllByRole } = render(
      <BrowserRouter>
        <ListOfMovies movies={movies} />
      </BrowserRouter>
    );
    const moviesList = getAllByRole("listitem");
    expect(moviesList.length).toBe(movies.length);
    moviesList.forEach((movie, index) => {
      expect(movie).toHaveTextContent(movies[index].title);
      expect(movie.querySelector("img")).toHaveAttribute(
        "src",
        movies[index].image
      );
    });
  });

  it("renders all movies and their respective CardMovie component", () => {
    const { getAllByRole } = render(
      <BrowserRouter>
        <ListOfMovies movies={movies} />
      </BrowserRouter>
    );
    const moviesList = getAllByRole("listitem");
    expect(moviesList.length).toBe(movies.length);
    moviesList.forEach((movie, index) => {
      const { asFragment } = render(
        <BrowserRouter>
          <CardMovie film={movies[index]} />
        </BrowserRouter>
      );
      expect(movie).toContainHTML(asFragment().firstChild.innerHTML);
    });
  });
});
