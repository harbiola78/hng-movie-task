import { Fragment } from 'react';
import { Instagram } from 'react-content-loader';

const MovieLoader = ({ count = 1 }: { count?: number }) => {
  const loaderArr = new Array(count).fill('loader');
  return (
    <Fragment>
      {loaderArr.map((loader, i) => (
        <Instagram key={i} name={loader} />
      ))}
    </Fragment>
  );
};

export default MovieLoader;
