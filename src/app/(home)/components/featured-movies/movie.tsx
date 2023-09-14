import Link from 'next/link';
import MoviesListing from './listing/movies-listing';

const FeaturedMovies = () => {
  return (
    <div className='bg-white w-full h-full'>
      <section className='w-full px-7 md:px-0 md:container md:mx-auto h-full'>
        <div className='w-full flex justify-between items-center py-7'>
          <h3 className='text-2xl font-semibold'>Featured Movies</h3>
          <Link href='#' className='text-pink-700'>
            See more
          </Link>
        </div>
        <MoviesListing />
      </section>
    </div>
  );
};

export default FeaturedMovies;
