'use client';

import Image from 'next/image';
import { GoHome, GoSignOut } from 'react-icons/go';
import { BiCameraMovie } from 'react-icons/bi';
import { BsFillPlayBtnFill } from 'react-icons/bs';
import { AiOutlineCalendar } from 'react-icons/ai';

const menus = [
  { id: 1, name: 'Home', url: '/', pathname: 'movies', icon: GoHome },
  {
    id: 2,
    name: 'Movies',
    url: '#movies',
    pathname: 'movies',
    icon: BiCameraMovie,
  },
  {
    id: 3,
    name: 'Tv Series',
    url: '#tv-series',
    pathname: 'tv-series',
    icon: BsFillPlayBtnFill,
  },
  {
    id: 3,
    name: 'Upcoming',
    url: '#upcoming',
    pathname: 'upcoming',
    icon: AiOutlineCalendar,
  },
];

const SideBar = ({
  current,
  action,
}: {
  current: number;
  action: (val: number) => void;
}) => {
  return (
    <aside className='border-r-2 border-solid min-h-screen rounded-r-[3.5rem] w-64 flex justify-between flex-col'>
      <div className='flex gap-2 items-center p-5'>
        <Image src={'/tv.svg'} width={36} height={36} alt='logo' />
        <h3 className='font-semibold'>Movie Box</h3>
      </div>
      <menu className=' space-y-2'>
        {menus.map((menu, index) => (
          <button
            className={`flex gap-2 px-5 p-3 w-full ${
              index === current
                ? 'border-r-4 border-pink-500 bg-pink-200 text-pink-500'
                : ''
            }`}
            onClick={() => action(index)}
          >
            <menu.icon size={24} />
            <span>{menu.name}</span>
          </button>
        ))}
      </menu>
      <article className='border-2 rounded-lg border-pink-500 py-4 px-4 mx-5'>
        <h3 className='font-semibold text-sm'>
          Play movie quizes and earn free tickets
        </h3>
        <p className='text-[13px] mt-2 text-gray-600'>
          50k People are playing now
        </p>
        <button className='py-2 px-5 my-2 rounded-2xl text-pink-500 bg-pink-200 text-sm'>
          Start Playing
        </button>
      </article>
      <div className='flex gap-x-2 p-5'>
        <GoSignOut />
        <span>Log out</span>
      </div>
    </aside>
  );
};

export default SideBar;
