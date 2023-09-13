import CreditsInfo from './credits';
import ActionButtons from './actions-button';
import DetailsSection from './detials-section';
import Banner from './banner';
import useMovie from '../hooks/useMovie';
import { Fragment } from 'react';
import Loader from '@/ui/shared/loader';
import ErrorMessage from '@/ui/shared/error';

const Content = () => {
  const { credits, error, loading, movie, getUTCDate } = useMovie();

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <article className='px-10 py-7 w-full xl:w-3/4 h-full'>
          <ErrorMessage error={error} />
          <Banner poster_path={movie.poster_path} />
          <section className='flex my-5 gap-5 items-center flex-wrap'>
            <h3 className='text-lg font-semibold'>
              {movie.original_title}: {movie.tagline}{' '}
            </h3>
            <div data-testid='movie-release-date'>
              {getUTCDate(movie.release_date).toUTCString()}
            </div>
            <div>
              Minutes: <span data-test-id='movie-runtime'>{movie.runtime}</span>
            </div>
          </section>
          <section className='flex w-full'>
            <div className='w-3/4'>
              <p className='lg:pr-12' data-testid='movie-overview'>
                {movie.overview}
              </p>
              <CreditsInfo credits={credits} />
              <ActionButtons />
            </div>
            <DetailsSection />
          </section>
        </article>
      )}
    </Fragment>
  );
};

export default Content;
