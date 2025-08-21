import React, { useState } from 'react';
import Header from '../components/Header';
import Movies from '../components/Movies';

function Search() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <Header setSearchResults={setSearchResults} setSearchQuery={setSearchQuery} />
      <Movies searchResults={searchResults} searchQuery={searchQuery} />
    </>
  );
}

export default Search;

