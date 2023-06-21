import { render, fireEvent, act } from "@testing-library/react";
import { FormSearch } from "./FormSearch";

describe("FormSearch", () => {
  const props = {
    handleChange: jest.fn(),
    handleSubmit: jest.fn(),
    handleSort: jest.fn(),
    sort: false,
    error: "",
    search: "",
  };

  it("matches the snapshot", () => {
    const { container } = render(<FormSearch {...props} />);
    expect(container).toMatchSnapshot();
  });

  it("displays an error when provided", () => {
    const testError = "Test error message";
    const { getByText } = render(<FormSearch {...props} error={testError} />);
    expect(getByText(testError)).toBeInTheDocument();
  });

  it("calls handleSubmit on form submit", () => {
    const onSubmit = jest.fn().mockImplementation((event) => {
      event.preventDefault();
    });
    const { getByText } = render(
      <FormSearch {...props} handleSubmit={onSubmit} />
    );
    const button = getByText("Buscar");

    fireEvent.click(button);
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  it("calls handleChange when input value changes", () => {
    const handleChange = jest.fn();
    const { getByTestId } = render(
      <FormSearch {...props} handleChange={handleChange} />
    );
    const input = getByTestId("search-input");
    act(() => {
      fireEvent.change(input, { target: { value: "a" } });
    });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("calls handleSort on checkbox click", () => {
    const handleSort = jest.fn().mockImplementation((event) => {
      event.preventDefault();
    });
    const { getByLabelText } = render(
      <FormSearch {...props} handleSort={handleSort} />
    );
    const checkbox = getByLabelText("Ordenar resultados");
    act(() => {
      fireEvent.click(checkbox);
    });
    expect(handleSort).toHaveBeenCalledTimes(1);
  });

  it("renders the correct placeholder text", () => {
    const { getByPlaceholderText } = render(<FormSearch {...props} />);
    const input = getByPlaceholderText("Avengers, Star Wars, The Matrix...");
    expect(input).toBeInTheDocument();
  });
});
