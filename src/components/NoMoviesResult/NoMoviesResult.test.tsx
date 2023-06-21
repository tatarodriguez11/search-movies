
import { render } from "@testing-library/react";
import { NoMoviesResults } from "./NoMoviesResult";

describe("NoMoviesResults component", () => {
  it("should match the snapshot", () => {
    const { container } = render(<NoMoviesResults />);
    expect(container).toMatchSnapshot();
  });

  it("should render the correct message", () => {
    const { getByText } = render(<NoMoviesResults />);
    expect(
      getByText("No se encontraron películas para esta búsqueda")
    ).toBeInTheDocument();
  });
});
