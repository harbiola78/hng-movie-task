import Axios from "@/libs/axios";
import { popularMovieType } from "@/types/movie";

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

class MovieController {
  async index() {
    const { data: movies } = await Axios.get<Movie>('/movie/popular');
    const { data: playing } = await Axios.get<Movie>('/movie/now_playing');

    const { data: genreArr } = await Axios.get<Genre>('/genre/movie/list');

    const data = {
      movies: movies.results,
      genres: genreArr.genres,
      playing: playing.results,
    };

    return data;
  }
}

export default new MovieController();
