import React from "react";
import { render } from "@testing-library/react";
import CardMovie from "./CardMovie";
import { BrowserRouter } from "react-router-dom";
import { Film } from "../../interfaces";

describe("CardMovie", () => {
  const film: Film = {
    id: "1",
    title: "A Movie",
    year: "2022",
    image: "https://example.com/movie.jpg",
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <CardMovie film={film} />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders movie title", () => {
    const { getByText } = render(
      <BrowserRouter>
        <CardMovie film={film} />
      </BrowserRouter>
    );
    expect(getByText(film.title)).toBeInTheDocument();
  });

  it("renders movie year", () => {
    const { getByText } = render(
      <BrowserRouter>
        <CardMovie film={film} />
      </BrowserRouter>
    );
    expect(getByText(film.year.toString())).toBeInTheDocument();
  });

  it("renders movie image", () => {
    const { getByAltText } = render(
      <BrowserRouter>
        <CardMovie film={film} />
      </BrowserRouter>
    );
    expect(getByAltText(film.title)).toBeInTheDocument();
    expect(getByAltText(film.title)).toHaveAttribute("src", film.image);
  });

  it("navigates to movie page on link click", () => {
    const { container } = render(
      <BrowserRouter>
        <CardMovie film={film} />
      </BrowserRouter>
    );
    const link = container.querySelector("a");
    expect(link).toHaveAttribute("href", `/movies/${film.id}`);
  });
});
