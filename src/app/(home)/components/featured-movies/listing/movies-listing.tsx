'use client';
import useMovies from '@/app/(home)/hooks/useMovies';
import Card from './card';
import { Fragment } from 'react';
import MovieLoader from './movies-loader';
import Link from 'next/link';

const MoviesListing = () => {
  const { movies, loading } = useMovies();
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-x-5 gap-y-20'>
      <Fragment>
        {loading ? (
          <MovieLoader count={4} />
        ) : (
          movies.slice(0, 10).map((movie) => (
            <Link href={`/${movie.id}`}>
              <Card key={movie.id} movie={movie} />
            </Link>
          ))
        )}
      </Fragment>
    </div>
  );
};

export default MoviesListing;
