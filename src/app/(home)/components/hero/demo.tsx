import Image from "next/image";
import { FaPlayCircle } from "react-icons/fa";

const Demo = () => {
    return ( 
        <div className='container mx-auto w-full h-full'>
      {/* <div className='flex flex-col gap-4 max-w-sm h-full lg:min-h-[350px] items-center justify-center lg:mt-10 xl:mt-20'> */}
      <div className='w-full h-full grid grid-cols-1 place-content-center max-w-sm gap-2'>
        <h2 className='sm:text-2xl md:text-4xl lg:text-5xl leading-tight font-semibold text-white'>
           John Wick 3 : Parabellum
        </h2>
        <section className='lg:my-5 flex gap-6 w-full'>
          <div className='flex gap-2 text-white'>
            <Image src='/imdb.svg' alt='imdb logo' width={35} height={17} />
            <span className='text-sm text-white/80'>86.0/100</span>
          </div>
          <div className='flex gap-2 text-white'>
            <Image src='/fruit.svg' alt='imdb logo' width={16} height={17} />
            <span className='text-sm text-white/80'>97%</span>
          </div>
        </section>
        <p className='text-white'>
          John Wick is on the run after killing a member of the international
          assassins guild, and with a $14 million price tag on his head, he is
          the target of hit men and women everywhere.
        </p>
        <div className="flex w-full">
        <button className="bg-pink-700 text-white rounded-md py-3 px-7 flex gap-3 items-center">
            <FaPlayCircle />
        Watch trailer
        </button>
        </div>
      </div>
    </div>
     );
}
 
export default Demo;