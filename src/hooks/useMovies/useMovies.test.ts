import { renderHook, act } from "@testing-library/react-hooks";
import { searchMovies } from "../../services/movies";
import { useMovies } from "./useMovies";

jest.mock("../../services/movies");

describe("useMovies", () => {
  beforeEach(() => {
    (searchMovies as jest.Mock).mockClear();
  });

  test("should not fetch movies when search term is empty", async () => {
    const search = "";

    const { result } = renderHook(() => useMovies({ search, sort: false }));

    expect(result.current.loading).toBe(false);
    expect(searchMovies).not.toHaveBeenCalled();
    expect(result.current.movies).toEqual([]);
  });

  test("should return movies when search term is not empty", () => {
    const search = "Batman";
    const newMovies = [
      { id: "1", title: "Batman Begins", year: "2005", image: "poster1.jpg" },
      { id: "2", title: "The Dark Knight", year: "2008", image: "poster2.jpg" },
    ];
  
    (searchMovies as jest.Mock).mockResolvedValueOnce(newMovies);
  
    const { result, waitForNextUpdate } = renderHook(
      ({ search, sort }) => useMovies({ search, sort }),
      { initialProps: { search, sort: false } }
    );
  
    act(() => {
      result.current.getMovies({ search });
    });
  
    waitForNextUpdate();
  });
  
});
