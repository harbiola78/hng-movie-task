import { Fragment } from 'react';
import {IoWarningOutline} from 'react-icons/io5'

const ErrorMessage = ({ error }: { error: string }) => {
  return (
    <Fragment>
      {error ? (
        <div className='flex gap-2 my-5 py-3 border-2 rounded-md px-5 items-center justify-center bg-pink-100 text-pink-500 border-pink-500'>
         <IoWarningOutline size={20} className="font-semibold" />
          <span></span>{error}
        </div>
      ) : null}
    </Fragment>
  );
};

export default ErrorMessage;
