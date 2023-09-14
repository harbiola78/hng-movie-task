import {TfiMenuAlt} from 'react-icons/tfi'
import {IoTicket} from 'react-icons/io5'

const DetailsSection = () => {
    return ( 
        <div className='md:w-1/4'>
          <div className='flex flex-col gap-3'>
            <button className='flex items-center justify-center gap-2 px-5 py-2 rounded-md outline-none bg-pink-500 text-pink-50'>
              <IoTicket /> <span>See Showtime</span>
            </button>
            <button className='flex items-center justify-center gap-2 px-5 py-2 rounded-md outline-none bg-pink-200'>
              <TfiMenuAlt /> <span> More Watch Option</span>
            </button>
          </div>
        </div>
     );
}
 
export default DetailsSection;