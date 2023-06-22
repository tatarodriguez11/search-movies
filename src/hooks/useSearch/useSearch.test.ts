import { renderHook, act } from "@testing-library/react-hooks";
import { useSearch } from "./useSearch";

describe("useSearch", () => {
  test("should update search value", () => {
    const { result } = renderHook(() => useSearch());

    act(() => {
      result.current.updateSearch("Batman");
    });

    expect(result.current.search).toBe("Batman");
    expect(result.current.error).toBe("");
  });

  test("should handle empty search", () => {
    const { result } = renderHook(() => useSearch());

    act(() => {
      result.current.updateSearch("");
    });

    expect(result.current.search).toBe("");
    expect(result.current.error).toBe("");
  });

  test("should handle numeric search", () => {
    const { result } = renderHook(() => useSearch());

    act(() => {
      result.current.updateSearch("123");
    });

    expect(result.current.search).toBe("123");
    expect(result.current.error).toBe("");
  });

  test("should clear error when valid search is entered", () => {
    const { result } = renderHook(() => useSearch());

    act(() => {
      result.current.updateSearch("Batman");
    });

    act(() => {
      result.current.updateSearch("Spider-Man");
    });

    expect(result.current.search).toBe("Spider-Man");
    expect(result.current.error).toBe("");
  });
});
