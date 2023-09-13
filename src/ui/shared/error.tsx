import { Fragment } from 'react';

const ErrorMessage = ({ error }: { error: string }) => {
  return (
    <Fragment>
      {error ? (
        <div className='flex my-5 px-5 items-center justify-center bg-pink-100 text-pink-500 border-pink-500'>
          {error}
        </div>
      ) : null}
    </Fragment>
  );
};

export default ErrorMessage;
