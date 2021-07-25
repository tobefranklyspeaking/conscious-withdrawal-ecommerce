import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CgSearch } from 'react-icons/cg';

const SearchBarStyle = styled.input`
  margin: 10px;
  border: 0;
  outline: 0;
  background: transparent;
  border-bottom: 2px solid white;
  color: white;
`;

const SearchBar = () => {
  const [search, updateSearch] = useState('');

  return (
    <>
      <form>
        <SearchBarStyle type='text' value={search} onChange={e => updateSearch(e)} style={{ color: 'white' }} />
        <CgSearch onClick={Query()} />
      </form>
    </>
  )
}

export default SearchBar;