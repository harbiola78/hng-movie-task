'use client';
import Axios from '@/libs/axios';
import { ChangeEvent, useState } from 'react';
import { Movie } from './actions';
import { popularMovieType } from '@/types/movie';
import { AxiosError } from 'axios';

const useSearch = () => {
  const [result, setResult] = useState<popularMovieType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showResult, setShowResult] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    setIsLoading(true)
    const search = e.target.value;
    setSearchQuery(search);
    if (!search) {
      return;
    }

    console.log(search);
    if (search.length <= 2) {
        setIsLoading(false)
        setErrorMessage('search value must be at least (3) characters')
      return;
    }

    setShowResult(true);

    try {
      const { data } = await Axios.get<Movie>(`/search/movie?query=${search}`);
      const output = data.results.slice(0, 6);
      setResult(output);
    } catch (error) {
      // Handle the error in an appropriate way
      if(error instanceof AxiosError) {
        setErrorMessage(error.response?.data || 'An error occured, try again later!!')
      }
    }
  }
  return {isLoading,  result, errorMessage, showResult, searchQuery, handleSearch };
};

export default useSearch;
