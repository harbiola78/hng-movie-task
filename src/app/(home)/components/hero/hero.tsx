import Image from 'next/image';
import Link from 'next/link';
import Navigation from './navigation';
import Content from './content';

const Hero = () => {
  return (
    <div className='section relative'>
      <Image
        src='/Poster.svg'
        alt='hero image'
        width={1080}
        height={1080}
        className='w-full h-full object-center object-cover'
      />
      <div className="absolute top-0 z-50 w-full h-full">
        <Navigation />
        <Content />
      </div>
    </div>
  );
};

export default Hero;
