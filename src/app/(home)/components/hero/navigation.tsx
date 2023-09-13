import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import Search from '../search/search';

const Navigation = () => {
  return (
    <nav className='container mx-auto flex py-5 justify-between items-center'>
      <div className='flex gap-5 items-center'>
        <Image src={'/tv.svg'} alt='logo' width={50} height={50} />
        <h3 className='text-2xl font-semibold text-white'>MovieBox</h3>
      </div>
      <Search />
      <div className='flex items-center gap-4'>
        <Link href={'#'} className='text-white'>
          Sign in
        </Link>
        <button className='rounded-full w-9 h-9 flex items-center justify-center bg-pink-700 outline-none'>
          <HiOutlineMenuAlt4 className='w-6 text-white font-semibold' />
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
