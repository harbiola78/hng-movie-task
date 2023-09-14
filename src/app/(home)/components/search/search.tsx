'use client';
import { FaSearch } from 'react-icons/fa';
import useSearch from '../../hooks/useSearch';
import SearchDropdown from './search-dropdown';

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
    <div className='relative border-2 border-solid  w-full md:max-w-xs lg:max-w-lg h-9 px-5 py-4 flex items-center rounded-md'>
      <input
        type='search'
        onChange={handleSearch}
        value={searchQuery}
        id='search'
        autoComplete='off'
        className='text-white bg-transparent outline-none w-full border-none'
        placeholder='What do you want to watch?'
      />
      <FaSearch className='text-white' />
      {showResult ? (
        <SearchDropdown
          errorMessage={errorMessage}
          result={result}
          loading={isLoading}
        />
      ) : null}
    </div>
  );
};

export default Search;
