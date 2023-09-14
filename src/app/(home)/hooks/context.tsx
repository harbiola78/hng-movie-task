'use client';
import { AxiosError } from 'axios';
import React, { ReactNode, createContext, useEffect, useState } from 'react';
import MovieController from './actions';
import { popularMovieType } from '@/types/movie';

export interface Movie {
  loading: boolean;
  movies: popularMovieType[];
}
const MoviesContext = createContext({} as Movie);

export const MovieContextProvider = ({ children }: { children: ReactNode }) => {
  const [movies, setMovies] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetchMovies().then(() => console.log('movies fetched', movies));
  }, [movies]);
  
  const fetchMovies = async () => {
    try {
      const data = (await MovieController.index()).movies;
      // console.log(data)
      setMovies(data);
      setLoading(false);
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data);
        setLoading(false);
      }
    }
  };
  return (
    <MoviesContext.Provider
      value={{
        loading: loading || false,
        movies: movies || [],
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesContext;
