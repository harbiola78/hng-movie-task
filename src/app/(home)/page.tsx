import Hero from './components/hero/hero';
import FeaturedMovies from './components/featured-movies/movie';
import Footer from '@/ui/shared/footer';

export default function Home() {
  return (
    <div className='w-full min-h-screen h-full'>
      <Hero />
      <FeaturedMovies />
      <Footer />
    </div>
  );
}
