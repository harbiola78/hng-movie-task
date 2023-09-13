'use client';
import Axios from '@/libs/axios';
import { creditsType, movieType } from '@/types/movie';
import { AxiosError } from 'axios';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const useMovie = () => {
  const pathName = useParams();
  const id = pathName.id;
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({} as movieType);
  const [credits, setCredits] = useState({} as creditsType);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    fetchUserDetails().then(() => {});
  }, []);

  async function fetchUserDetails() {
    try {
      const fetchedMovie = await fetchMovie();
      setMovie(fetchedMovie.movie);
      setCredits(fetchedMovie.credits);
    } catch (error) {
      if (error instanceof AxiosError) {
        setError(error.response?.data || 'Server downtime, try again later!!');
      }
    }
    setLoading(false);
  }
  const getUTCDate = (date: string) => {
    const localReleaseDate = new Date(date);
    // Converting it to UTC by subtracting the local time zone offset
    const utcReleaseDate = new Date(
      localReleaseDate.getTime() - localReleaseDate.getTimezoneOffset() * 60000
    );
    return utcReleaseDate;
  };

  const fetchMovie = async () => {
    const { data: movie } = await Axios.get<movieType>(`/movie/${id}`);
    const { data: credits } = await Axios.get<creditsType>(
      `/movie/${id}/credits`
    );
    const data = {
      movie,
      credits,
    };
    console.log({ data }, 'status');
    return data;
  };
  return { movie, loading, credits, error, getUTCDate };
};

export default useMovie;
