import { render } from "@testing-library/react";
import { DetailTable } from "./DetailTable";

describe("DetailTable", () => {
  const props = {
    year: "2022",
    actors: "Actor 1, Actor 2",
    country: "USA",
    language: "English",
    genre: "Action",
    plot: "A plot summary",
    director: "John Doe",
    poster: "https://example.com/poster.jpg",
    title: "A Movie",
  };

  it("matches the snapshot", () => {
    const { container } = render(<DetailTable {...props} />);
    expect(container).toMatchSnapshot();
  });

  it("renders the movie poster", () => {
    const { getByAltText } = render(<DetailTable {...props} />);
    expect(getByAltText(props.title)).toBeInTheDocument();
  });

  it("renders the movie year", () => {
    const { getByText } = render(<DetailTable {...props} />);
    expect(getByText(props.year)).toBeInTheDocument();
  });

  it("renders the movie actors", () => {
    const { getByText } = render(<DetailTable {...props} />);
    expect(getByText(props.actors)).toBeInTheDocument();
  });

  it("renders the movie genre", () => {
    const { getByText } = render(<DetailTable {...props} />);
    expect(getByText(props.genre)).toBeInTheDocument();
  });

  it("renders the movie country", () => {
    const { getByText } = render(<DetailTable {...props} />);
    expect(getByText(props.country)).toBeInTheDocument();
  });

  it("renders the movie language", () => {
    const { getByText } = render(<DetailTable {...props} />);
    expect(getByText(props.language)).toBeInTheDocument();
  });

  it("renders the movie plot", () => {
    const { getByText } = render(<DetailTable {...props} />);
    expect(getByText(props.plot)).toBeInTheDocument();
  });

  it("renders the movie director", () => {
    const { getByText } = render(<DetailTable {...props} />);
    expect(getByText(props.director)).toBeInTheDocument();
  });
});