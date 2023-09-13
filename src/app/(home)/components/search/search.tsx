"use client"
import { FaSearch } from 'react-icons/fa';
import useSearch from '../../hooks/useSearch';
import Link from 'next/link';
import SearchResult from './result';

const Search = () => {
  const {
    errorMessage,
    handleSearch,
    isLoading,
    result,
    searchQuery,
    showResult,
  } = useSearch();
  return (
    <div className='relative border-2 border-solid  w-full max-w-lg h-9 px-5 py-4 flex items-center rounded-md'>
      <input
        type='search'
        onChange={handleSearch}
        value={searchQuery}
        id='search'
        className='text-white bg-transparent outline-none w-full'
        placeholder='What do you want to watch?'
      />
      <FaSearch className='text-white' />
      <div className='absolute flex  inset-0 w-full top-12 text-black px-0'>
        <div className='flex flex-col gap-1 items-center justify-center w-full shadow-sm'>
          {showResult && result.length > 0
            ? result.map((search) => (
                <Link href={`/${search.id}`} className='w-full'>
                  <SearchResult key={search.id} result={search} />
                </Link>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default Search;
