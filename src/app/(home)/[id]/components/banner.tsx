import Image from 'next/image';
import { BsFillPlayCircleFill } from 'react-icons/bs';

const Banner = ({ poster_path }: { poster_path: string }) => {
  const posterBaseUrl = 'https://image.tmdb.org/t/p/w1280';
  const imageUrl2 = 'https://image.tmdb.org/t/p/w235_and_h235_face/';
  const handlePlayButton = () => {

  }
  return (
    <picture className='mb-5 w-full relative overflow-hidden box-border'>
      <Image
        width={1080}
        height={550}
        src={poster_path ? posterBaseUrl + poster_path : '/image.svg'}
        alt='movie image'
        className='w-full max-h-[360px] object-cover object-center rounded-lg'
        data-testid='movie-poster'
      />
      <div className='absolute top-0 w-full h-full z-10 flex items-center justify-center'>
        <button className='outline-none rounded-full h-14 w-14 bg-white/50 flex items-center justify-center'>
          <BsFillPlayCircleFill
            size={24}
            className={'text-white/90'}
            onClick={handlePlayButton}
          />
        </button>
      </div>
    </picture>
  );
};

export default Banner;
