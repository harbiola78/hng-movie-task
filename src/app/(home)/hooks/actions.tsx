import Axios from '@/libs/axios';
import { TopRated, popularMovieType } from '@/types/movie';

export interface Movie {
  results: popularMovieType[];
  page: number;
  total_pages: number;
  total_results: number;
}

export interface Genre {
  genres: {
    id: number;
    name: string;
  }[];
}
const fetchTopRated = async () => {
  const params =
    'account/10632264/rated/movies?language=en-US&page=1&sort_by=created_at.asc';
  const p = 'movie/top_rated?language=en-US&page=1';
  const { data, status } = await Axios.get(`/${p}`);
  console.log(data);
};

type Rated = {
  results: TopRated[]
}

class MovieController {
  async index() {
    const { data: movies } = await Axios.get<Movie>('/movie/popular');
    const { data: playing } = await Axios.get<Movie>('/movie/now_playing');
    const { data: topRated } = await Axios.get<Rated>(
      '/movie/top_rated?language=en-US&page=1'
    );
    const { data: genreArr } = await Axios.get<Genre>('/genre/movie/list');

    const data = {
      movies: movies.results,
      genres: genreArr.genres,
      playing: playing.results,
      rated: topRated.results,
    };

    return data;
  }
}

export default new MovieController();
