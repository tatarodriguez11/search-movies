import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { useMovie } from './useMovie';
import { searchMovieDetail } from '../../services/movies';

// mock de la función searchMovieDetail
jest.mock('../../services/movies', () => {
  return {
    searchMovieDetail: jest.fn(() => Promise.resolve({
      Title: 'Movie title',
      Plot: 'Movie plot',
      Actors: 'Actor 1, Actor 2',
      Year: '2021',
      Country: 'USA',
      Language: 'English',
      Genre: 'Action, Drama',
      Director: 'Director name',
      Poster: 'http://example.com/movie-poster.jpg',
      imdbID: '12345'
    }))
  }
});

describe('useMovie hook', () => {
  it('should correctly search for a movie and set the state', async () => {
    // render del hook con el id de una película
    const { result, waitForNextUpdate } = renderHook(() => useMovie());
    act(() => {
      result.current.getMovie('12345');
    });

    // esperar a que el estado se actualice
    await waitForNextUpdate();

    expect(searchMovieDetail).toHaveBeenCalledWith({ movieId: '12345' });

    expect(result.current.movie).toEqual({
      Title: 'Movie title',
      Plot: 'Movie plot',
      Actors: 'Actor 1, Actor 2',
      Year: '2021',
      Country: 'USA',
      Language: 'English',
      Genre: 'Action, Drama',
      Director: 'Director name',
      Poster: 'http://example.com/movie-poster.jpg',
      imdbID: '12345'
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(null);
  });
});